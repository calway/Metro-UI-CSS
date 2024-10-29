
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/easytest";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("panel.html tests", () => {
    it("panel.html", async () => {
        await B.visit(`${getFileUrl(`./__html__/panel.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
