
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("grid-new.html tests", () => {
    it("grid-new.html", async () => {
        await B.visit(`${getFileUrl(`./examples/grid-new.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
