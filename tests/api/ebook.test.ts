import "dotenv/config"
import { beforeAll, afterAll, expect, test } from "vitest"
import { NextRequest } from "next/server"
import { GET, POST } from "../../app/api/ebooks/routes"
import type { CreateEbookResponseAPI, PaginatedEbooksAPI, ResponseErrorAPI } from "../../app/types/api/ebook"
import { createEbooksFixture, createUserFixture } from "../helpers/factories"
import resetDb from "../helpers/reset-db"
import { MAX_LENGTH } from "@/lib/constants/limits"

let userFixture: Awaited<ReturnType<typeof createUserFixture>> | null = null

beforeAll(async () => {
    userFixture = await createUserFixture()
})

afterAll(async () => {
    await resetDb()
})

test("GET /api/ebooks should return a empty list paginated result", async () => {
    if (!userFixture) {
        throw new Error("User fixture was not initialized")
    }

    const request = new NextRequest("http://localhost:3000/api/ebooks", {
        headers: {
            "x-auth-user-id": userFixture.id,
        },
    })

    const response = await GET(request)
    const body = await response.json() as PaginatedEbooksAPI

    expect(response.status).toBe(200)
    expect(body.items).toEqual([])
    expect(body.page).toBe(1)
    expect(body.pageSize).toBe(10)
    expect(body.totalItems).toBe(0)
    expect(body.totalPages).toBe(1)
})

test("GET /api/ebooks should return many ebooks", async () => {
    if (!userFixture) {
        throw new Error("User fixture was not initialized")
    }

    const ebooksToCreate = [
        {
            title: "Ebook One",
            subtitle: "Sub One",
            shortDescription: "First",
        },
        {
            title: "Ebook Two",
            subtitle: "Sub Two",
            shortDescription: "Second",
        },
        {
            title: "Ebook Three",
            subtitle: "Sub Three",
            shortDescription: "Third",
        },
    ]

    const createdCount = await createEbooksFixture(userFixture.id, ebooksToCreate)
    expect(createdCount).toBe(3)

    const request = new NextRequest("http://localhost:3000/api/ebooks?page=1&pageSize=10", {
        headers: {
            "x-auth-user-id": userFixture.id,
        },
    })

    const response = await GET(request)
    const body = await response.json() as PaginatedEbooksAPI

    expect(response.status).toBe(200)
    expect(body.items).toHaveLength(3)
    expect(body.totalItems).toBe(3)
    expect(body.page).toBe(1)
    expect(body.pageSize).toBe(10)
    expect(body.totalPages).toBe(1)
    expect(body.items.map((item) => item.title)).toEqual(
        expect.arrayContaining(["Ebook One", "Ebook Two", "Ebook Three"]),
    )
})

test("POST /api/ebooks should create a new ebook and return 201", async () => {
    if (!userFixture) {
        throw new Error("User fixture was not initialized")
    }

    const request = new NextRequest("http://localhost:3000/api/ebooks", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "x-auth-user-id": userFixture.id,
        },
        body: JSON.stringify({
            title: "Created From POST",
            subtitle: "API",
            shortDescription: "Created in integration test",
        }),
    })

    const response = await POST(request)
    const body = await response.json() as CreateEbookResponseAPI

    expect(response.status).toBe(201)
    expect(body.id).toBeDefined()
    expect(body.title).toBe("Created From POST")
    expect(body.subtitle).toBe("API")
    expect(body.shortDescription).toBe("Created in integration test")
    expect(typeof body.createdAt).toBe("number")
    expect(typeof body.updatedAt).toBe("number")
})

test.each([
    [
        "title is missing",
        {
            subtitle: "Subtitle",
            shortDescription: "A valid description",
        },
        "title",
        "TITLE_REQUIRED",
    ],
    [
        "title is too long",
        {
            title: "a".repeat(MAX_LENGTH.TITLE_EBOOK + 1),
            subtitle: "Subtitle",
            shortDescription: "A valid description",
        },
        "title",
        "TITLE_TOO_LONG",
    ],
    [
        "subtitle is too short",
        {
            title: "Valid title",
            subtitle: "",
            shortDescription: "A valid description",
        },
        "subtitle",
        "SUBTITLE_TOO_SHORT",
    ],
    [
        "subtitle is too long",
        {
            title: "Valid title",
            subtitle: "a".repeat(MAX_LENGTH.SUBTITLE_EBOOK + 1),
            shortDescription: "A valid description",
        },
        "subtitle",
        "SUBTITLE_TOO_LONG",
    ],
    [
        "short description is too short",
        {
            title: "Valid title",
            subtitle: "Subtitle",
            shortDescription: "Short",
        },
        "shortDescription",
        "SHORT_DESCRIPTION_TOO_SHORT",
    ],
    [
        "short description is too long",
        {
            title: "Valid title",
            subtitle: "Subtitle",
            shortDescription: "a".repeat(MAX_LENGTH.SHORT_DESCRIPTION_EBOOK + 1),
        },
        "shortDescription",
        "SHORT_DESCRIPTION_TOO_LONG",
    ],
])("POST /api/ebooks returns a validation error when %s", async (_description, requestBody, field, errorCode) => {
    if (!userFixture) {
        throw new Error("User fixture was not initialized")
    }

    const request = new NextRequest("http://localhost:3000/api/ebooks", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "x-auth-user-id": userFixture.id,
        },
        body: JSON.stringify(requestBody),
    })

    const response = await POST(request)
    const body = await response.json() as ResponseErrorAPI

    expect(response.status).toBe(400)
    expect(body.code).toBe("VALIDATION_ERROR")
    expect(body.message).toBe("Request validation failed")
    expect(body.fields?.[field]).toContain(errorCode)
})

test("POST /api/ebooks returns INVALID_JSON for malformed JSON", async () => {
    if (!userFixture) {
        throw new Error("User fixture was not initialized")
    }

    const request = new NextRequest("http://localhost:3000/api/ebooks", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "x-auth-user-id": userFixture.id,
        },
        body: "{invalid-json",
    })

    const response = await POST(request)
    const body = await response.json() as ResponseErrorAPI

    expect(response.status).toBe(400)
    expect(body.code).toBe("INVALID_JSON")
    expect(body.message).toBe("Request body must be valid JSON")
})
