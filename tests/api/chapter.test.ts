import "dotenv/config"
import { afterAll, beforeEach, expect, test } from "vitest"
import { NextRequest } from "next/server"

import { DELETE, PUT } from "@/app/api/chapters/[id]/routes"
import type { DeleteChapterResponseAPI, UpdateChapterResponseAPI } from "@/app/types/api/chapter"
import type { ResponseErrorAPI } from "@/app/types/api/ebook"
import { MAX_LENGTH } from "@/lib/constants/limits"
import prisma from "../helpers/prisma"
import { createUserFixture } from "../helpers/factories"
import resetDb from "../helpers/reset-db"

let ownerId = ""
let otherOwnerId = ""
let chapterId = ""
let otherChapterId = ""

function routeContext(id: string) {
    return { params: Promise.resolve({ id }) }
}

function chapterRequest(method: "PUT" | "DELETE", body?: string, authenticated = true): NextRequest {
    return new NextRequest(`http://localhost:3000/api/chapters/${chapterId}`, {
        method,
        headers: {
            ...(body ? { "content-type": "application/json" } : {}),
            ...(authenticated ? { "x-auth-user-id": ownerId } : {}),
        },
        ...(body ? { body } : {}),
    })
}

beforeEach(async () => {
    await resetDb()

    const owner = await createUserFixture()
    ownerId = owner.id
    const otherOwner = await prisma.user.create({
        data: {
            email: `other-${ownerId}@example.com`,
            name: "Other Fixture User",
            emailVerified: new Date(),
            stripeCustomerId: `cus_other_${ownerId}`,
        },
    })
    otherOwnerId = otherOwner.id

    const ebook = await prisma.ebook.create({
        data: {
            title: "Owner ebook",
            ownerId,
        },
    })
    const otherEbook = await prisma.ebook.create({
        data: {
            title: "Other owner ebook",
            ownerId: otherOwnerId,
        },
    })

    const chapter = await prisma.chapter.create({
        data: {
            title: "Original chapter",
            content: { blocks: ["original"] },
            ebookId: ebook.id,
            position: 0,
        },
    })
    const otherChapter = await prisma.chapter.create({
        data: {
            title: "Other chapter",
            content: {},
            ebookId: otherEbook.id,
            position: 0,
        },
    })

    chapterId = chapter.id
    otherChapterId = otherChapter.id
})

afterAll(async () => {
    await resetDb()
})

test("PUT /api/chapters/:id updates an owned chapter title and content", async () => {
    const request = chapterRequest("PUT", JSON.stringify({
        title: "Updated chapter",
        content: { blocks: ["updated"] },
    }))

    const response = await PUT(request, routeContext(chapterId))
    const body = await response.json() as UpdateChapterResponseAPI

    expect(response.status).toBe(200)
    expect(body.id).toBe(chapterId)
    expect(body.position).toBe(0)
    expect(body.title).toBe("Updated chapter")
    expect(body.content).toEqual({ blocks: ["updated"] })
    expect(typeof body.createdAt).toBe("number")
    expect(typeof body.updatedAt).toBe("number")
})

test("PUT /api/chapters/:id updates content without changing the title", async () => {
    const request = chapterRequest("PUT", JSON.stringify({
        content: { blocks: ["content only"] },
    }))

    const response = await PUT(request, routeContext(chapterId))
    const body = await response.json() as UpdateChapterResponseAPI

    expect(response.status).toBe(200)
    expect(body.position).toBe(0)
    expect(body.title).toBe("Original chapter")
    expect(body.content).toEqual({ blocks: ["content only"] })
})

test.each([
    ["too short", "", "CHAPTER_TITLE_TOO_SHORT"],
    ["too long", "a".repeat(MAX_LENGTH.TITLE_CHAPTER + 1), "CHAPTER_TITLE_TOO_LONG"],
])("PUT /api/chapters/:id returns a validation error when the title is %s", async (_description, title, fieldCode) => {
    const request = chapterRequest("PUT", JSON.stringify({ title }))

    const response = await PUT(request, routeContext(chapterId))
    const body = await response.json() as ResponseErrorAPI

    expect(response.status).toBe(400)
    expect(body.code).toBe("VALIDATION_ERROR")
    expect(body.fields?.title).toContain(fieldCode)
})

test("PUT /api/chapters/:id returns INVALID_JSON for malformed JSON", async () => {
    const response = await PUT(chapterRequest("PUT", "{invalid-json"), routeContext(chapterId))
    const body = await response.json() as ResponseErrorAPI

    expect(response.status).toBe(400)
    expect(body.code).toBe("INVALID_JSON")
})

test("PUT /api/chapters/:id rejects a non-object request body", async () => {
    const response = await PUT(chapterRequest("PUT", "[]"), routeContext(chapterId))
    const body = await response.json() as ResponseErrorAPI

    expect(response.status).toBe(400)
    expect(body.code).toBe("VALIDATION_ERROR")
    expect(body.fields?.root).toContain("INVALID_REQUEST_BODY")
})

test.each([
    ["is unauthenticated", false, "current", "UNAUTHORIZED", 401],
    ["does not exist", true, "missing", "NOT_FOUND", 404],
    ["belongs to another user", true, "other", "NOT_FOUND", 404],
])("PUT /api/chapters/:id returns an error when it %s", async (_description, authenticated, target, code, status) => {
    const id = target === "current" ? chapterId : target === "other" ? otherChapterId : "missing-chapter"
    const request = chapterRequest("PUT", JSON.stringify({ title: "Updated" }), authenticated)
    const response = await PUT(request, routeContext(id))
    const body = await response.json() as ResponseErrorAPI

    expect(response.status).toBe(status)
    expect(body.code).toBe(code)
})

test("DELETE /api/chapters/:id deletes an owned chapter", async () => {
    const response = await DELETE(chapterRequest("DELETE"), routeContext(chapterId))
    const body = await response.json() as DeleteChapterResponseAPI

    expect(response.status).toBe(200)
    expect(body).toEqual({ success: true })
    expect(await prisma.chapter.findUnique({ where: { id: chapterId } })).toBeNull()
})

test.each([
    ["is unauthenticated", false, "current", "UNAUTHORIZED", 401],
    ["does not exist", true, "missing", "NOT_FOUND", 404],
    ["belongs to another user", true, "other", "NOT_FOUND", 404],
])("DELETE /api/chapters/:id returns an error when it %s", async (_description, authenticated, target, code, status) => {
    const id = target === "current" ? chapterId : target === "other" ? otherChapterId : "missing-chapter"
    const request = chapterRequest("DELETE", undefined, authenticated)
    const response = await DELETE(request, routeContext(id))
    const body = await response.json() as ResponseErrorAPI

    expect(response.status).toBe(status)
    expect(body.code).toBe(code)
})
