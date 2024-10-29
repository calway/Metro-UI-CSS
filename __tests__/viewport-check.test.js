
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/easytest";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("viewport-check.html tests", () => {
    it("viewport-check.html", async () => {
        await B.visit(`${getFileUrl(`./__html__/viewport-check.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
