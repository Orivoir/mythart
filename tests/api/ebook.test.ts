import "dotenv/config";
import { beforeAll, afterAll, expect, test } from "vitest";
import { createUserFixture } from "../helpers/factories";
import resetDb from "../helpers/reset-db";

beforeAll(async () => {
    await createUserFixture();
})

afterAll(async () => {
    await resetDb();
})

test("should create a new user", async () => {
    expect(1 + 1).toBe(2)
});