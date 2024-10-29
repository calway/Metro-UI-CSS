
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/easytest";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("stepper.html tests", () => {
    it("stepper.html", async () => {
        await B.visit(`${getFileUrl(`./__html__/stepper.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
