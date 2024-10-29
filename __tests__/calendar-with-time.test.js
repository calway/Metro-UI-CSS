
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/easytest";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("calendar-with-time.html tests", () => {
    it("calendar-with-time.html", async () => {
        await B.visit(`${getFileUrl(`./__html__/calendar-with-time.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
