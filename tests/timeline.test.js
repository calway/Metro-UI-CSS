
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("timeline.html tests", () => {
    it("timeline.html", async () => {
        await B.visit(`${getFileUrl(`./examples/timeline.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
