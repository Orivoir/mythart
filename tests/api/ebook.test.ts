import "dotenv/config"
import { beforeAll, afterAll, expect, test } from "vitest"
import { NextRequest } from "next/server"
import { GET, POST } from "../../app/api/ebooks/routes"
import type { CreateEbookResponseAPI, PaginatedEbooksAPI, ResponseErrorAPI } from "../../app/types/api/ebook"
import { createEbooksFixture, createUserFixture } from "../helpers/factories"
import resetDb from "../helpers/reset-db"

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

test("POST /api/ebooks should return 400 when title is missing", async () => {
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
            subtitle: "Missing title",
            shortDescription: "This should fail",
        }),
    })

    const response = await POST(request)
    const body = await response.json() as ResponseErrorAPI

    expect(response.status).toBe(400)
    expect(body.message).toBe("Title is required")
})