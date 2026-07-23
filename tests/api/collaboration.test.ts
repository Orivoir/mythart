import "dotenv/config"
import { afterAll, beforeEach, expect, test } from "vitest"
import { NextRequest } from "next/server"

import { CollaborationPermission, CollaborationRole, PlanType } from "@/app/generated/prisma/client"
import { DELETE as DELETE_COLLABORATOR, POST as POST_COLLABORATOR, PUT as PUT_COLLABORATOR } from "@/app/api/collaborations/ebooks/[ebookId]/route"
import { DELETE as DELETE_ROLE, POST as POST_ROLE, PUT as PUT_ROLE } from "@/app/api/collaborations/roles/[ebookId]/route"
import type {
    CollaboratorDeleteResponseAPI,
    CollaboratorResponseAPI,
    CustomRoleDeleteResponseAPI,
    CustomRoleResponseAPI,
    ResponseErrorAPI,
} from "@/app/types/api/collaboration"
import prisma from "../helpers/prisma"
import { createUserFixture } from "../helpers/factories"
import resetDb from "../helpers/reset-db"

let ownerId = ""
let ownerProId = ""
let outsiderId = ""
let collaboratorTargetId = ""
let ebookId = ""
let ebookProId = ""
let chapterOneId = ""
let chapterTwoId = ""

function routeContext(id: string) {
    return { params: Promise.resolve({ ebookId: id }) }
}

function collaborationRequest(options: {
    method: "POST" | "PUT" | "DELETE"
    userId?: string
    path: string
    body?: Record<string, unknown>
}): NextRequest {
    const { method, userId, path, body } = options

    return new NextRequest(`http://localhost:3000${path}`, {
        method,
        headers: {
            ...(body ? { "content-type": "application/json" } : {}),
            ...(userId ? { "x-auth-user-id": userId } : {}),
        },
        ...(body ? { body: JSON.stringify(body) } : {}),
    })
}

beforeEach(async () => {
    await resetDb()

    const owner = await createUserFixture({ plan: PlanType.free })
    const ownerPro = await createUserFixture({ plan: PlanType.pro })
    const outsider = await createUserFixture({ plan: PlanType.free })
    const collaboratorTarget = await createUserFixture({ plan: PlanType.free })

    ownerId = owner.id
    ownerProId = ownerPro.id
    outsiderId = outsider.id
    collaboratorTargetId = collaboratorTarget.id

    const ebook = await prisma.ebook.create({
        data: {
            title: "Owner Ebook",
            ownerId,
        },
    })

    const ebookPro = await prisma.ebook.create({
        data: {
            title: "Pro Owner Ebook",
            ownerId: ownerProId,
        },
    })

    ebookId = ebook.id
    ebookProId = ebookPro.id

    const chapterOne = await prisma.chapter.create({
        data: {
            ebookId,
            title: "Chapter 1",
            content: {},
            position: 0,
        },
    })

    const chapterTwo = await prisma.chapter.create({
        data: {
            ebookId,
            title: "Chapter 2",
            content: {},
            position: 1,
        },
    })

    chapterOneId = chapterOne.id
    chapterTwoId = chapterTwo.id
})

afterAll(async () => {
    await resetDb()
})

test("POST /api/collaborations/ebooks/:ebookId creates a collaborator with chapter-scoped access", async () => {
    const request = collaborationRequest({
        method: "POST",
        userId: ownerId,
        path: `/api/collaborations/ebooks/${ebookId}`,
        body: {
            collaboratorUserId: collaboratorTargetId,
            role: CollaborationRole.AUTHOR,
            allChaptersAccess: false,
            chapterIds: [chapterOneId],
        },
    })

    const response = await POST_COLLABORATOR(request, routeContext(ebookId))
    const body = await response.json() as CollaboratorResponseAPI

    expect(response.status).toBe(201)
    expect(body.userId).toBe(collaboratorTargetId)
    expect(body.role).toBe(CollaborationRole.AUTHOR)
    expect(body.allChaptersAccess).toBe(false)
    expect(body.chapterIds).toEqual([chapterOneId])
})

test("POST /api/collaborations/ebooks/:ebookId returns PAYMENT_REQUIRED for custom role on free plan", async () => {
    const request = collaborationRequest({
        method: "POST",
        userId: ownerId,
        path: `/api/collaborations/ebooks/${ebookId}`,
        body: {
            collaboratorUserId: collaboratorTargetId,
            customRoleId: "role_any",
        },
    })

    const response = await POST_COLLABORATOR(request, routeContext(ebookId))
    const body = await response.json() as ResponseErrorAPI

    expect(response.status).toBe(402)
    expect(body.code).toBe("PAYMENT_REQUIRED")
})

test("PUT /api/collaborations/ebooks/:ebookId updates collaborator role and chapter access", async () => {
    await prisma.ebookCollaborator.create({
        data: {
            ebookId,
            userId: collaboratorTargetId,
            role: CollaborationRole.PROOFREADER,
            allChaptersAccess: true,
        },
    })

    const request = collaborationRequest({
        method: "PUT",
        userId: ownerId,
        path: `/api/collaborations/ebooks/${ebookId}`,
        body: {
            collaboratorUserId: collaboratorTargetId,
            role: CollaborationRole.EDITOR,
            allChaptersAccess: false,
            chapterIds: [chapterTwoId],
        },
    })

    const response = await PUT_COLLABORATOR(request, routeContext(ebookId))
    const body = await response.json() as CollaboratorResponseAPI

    expect(response.status).toBe(200)
    expect(body.role).toBe(CollaborationRole.EDITOR)
    expect(body.allChaptersAccess).toBe(false)
    expect(body.chapterIds).toEqual([chapterTwoId])
})

test("DELETE /api/collaborations/ebooks/:ebookId removes collaborator", async () => {
    await prisma.ebookCollaborator.create({
        data: {
            ebookId,
            userId: collaboratorTargetId,
            role: CollaborationRole.AUTHOR,
            allChaptersAccess: true,
        },
    })

    const request = collaborationRequest({
        method: "DELETE",
        userId: ownerId,
        path: `/api/collaborations/ebooks/${ebookId}`,
        body: {
            collaboratorUserId: collaboratorTargetId,
        },
    })

    const response = await DELETE_COLLABORATOR(request, routeContext(ebookId))
    const body = await response.json() as CollaboratorDeleteResponseAPI

    expect(response.status).toBe(200)
    expect(body.success).toBe(true)
    expect(await prisma.ebookCollaborator.findUnique({
        where: {
            ebookId_userId: {
                ebookId,
                userId: collaboratorTargetId,
            },
        },
    })).toBeNull()
})

test("POST /api/collaborations/roles/:ebookId creates custom role for pro plan", async () => {
    const request = collaborationRequest({
        method: "POST",
        userId: ownerProId,
        path: `/api/collaborations/roles/${ebookProId}`,
        body: {
            name: "Reviewer Plus",
            permissions: [
                CollaborationPermission.CHAPTER_READ,
                CollaborationPermission.CHAPTER_UPDATE,
            ],
        },
    })

    const response = await POST_ROLE(request, routeContext(ebookProId))
    const body = await response.json() as CustomRoleResponseAPI

    expect(response.status).toBe(201)
    expect(body.name).toBe("Reviewer Plus")
    expect(body.permissions).toEqual([
        CollaborationPermission.CHAPTER_READ,
        CollaborationPermission.CHAPTER_UPDATE,
    ])
})

test("PUT /api/collaborations/roles/:ebookId updates custom role", async () => {
    const role = await prisma.ebookCustomRole.create({
        data: {
            ebookId: ebookProId,
            name: "Role v1",
            permissions: [CollaborationPermission.CHAPTER_READ],
            createdByUserId: ownerProId,
        },
    })

    const request = collaborationRequest({
        method: "PUT",
        userId: ownerProId,
        path: `/api/collaborations/roles/${ebookProId}`,
        body: {
            roleId: role.id,
            name: "Role v2",
            permissions: [
                CollaborationPermission.CHAPTER_READ,
                CollaborationPermission.CHAPTER_UPDATE,
            ],
        },
    })

    const response = await PUT_ROLE(request, routeContext(ebookProId))
    const body = await response.json() as CustomRoleResponseAPI

    expect(response.status).toBe(200)
    expect(body.id).toBe(role.id)
    expect(body.name).toBe("Role v2")
    expect(body.permissions).toEqual([
        CollaborationPermission.CHAPTER_READ,
        CollaborationPermission.CHAPTER_UPDATE,
    ])
})

test("DELETE /api/collaborations/roles/:ebookId blocks deletion when role is in use", async () => {
    const role = await prisma.ebookCustomRole.create({
        data: {
            ebookId: ebookProId,
            name: "Used role",
            permissions: [CollaborationPermission.CHAPTER_READ],
            createdByUserId: ownerProId,
        },
    })

    await prisma.ebookCollaborator.create({
        data: {
            ebookId: ebookProId,
            userId: collaboratorTargetId,
            role: null,
            customRoleId: role.id,
            allChaptersAccess: true,
        },
    })

    const request = collaborationRequest({
        method: "DELETE",
        userId: ownerProId,
        path: `/api/collaborations/roles/${ebookProId}`,
        body: {
            roleId: role.id,
        },
    })

    const response = await DELETE_ROLE(request, routeContext(ebookProId))
    const body = await response.json() as ResponseErrorAPI

    expect(response.status).toBe(400)
    expect(body.code).toBe("VALIDATION_ERROR")
    expect(body.fields?.roleId).toContain("CUSTOM_ROLE_IN_USE")
})

test("POST /api/collaborations/ebooks/:ebookId returns NOT_FOUND for unauthorized user", async () => {
    const request = collaborationRequest({
        method: "POST",
        userId: outsiderId,
        path: `/api/collaborations/ebooks/${ebookId}`,
        body: {
            collaboratorUserId: collaboratorTargetId,
            role: CollaborationRole.AUTHOR,
        },
    })

    const response = await POST_COLLABORATOR(request, routeContext(ebookId))
    const body = await response.json() as ResponseErrorAPI

    expect(response.status).toBe(404)
    expect(body.code).toBe("NOT_FOUND")
})

test("POST /api/collaborations/ebooks/:ebookId returns UNAUTHORIZED without auth header", async () => {
    const request = collaborationRequest({
        method: "POST",
        path: `/api/collaborations/ebooks/${ebookId}`,
        body: {
            collaboratorUserId: collaboratorTargetId,
            role: CollaborationRole.AUTHOR,
        },
    })

    const response = await POST_COLLABORATOR(request, routeContext(ebookId))
    const body = await response.json() as ResponseErrorAPI

    expect(response.status).toBe(401)
    expect(body.code).toBe("UNAUTHORIZED")
})
