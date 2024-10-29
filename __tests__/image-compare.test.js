
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/easytest";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("image-compare.html tests", () => {
    it("image-compare.html", async () => {
        await B.visit(`${getFileUrl(`./__html__/image-compare.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
