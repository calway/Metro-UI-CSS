
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/easytest";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("spinner.html tests", () => {
    it("spinner.html", async () => {
        await B.visit(`${getFileUrl(`./__html__/spinner.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
