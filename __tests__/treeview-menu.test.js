
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/easytest";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("treeview-menu.html tests", () => {
    it("treeview-menu.html", async () => {
        await B.visit(`${getFileUrl(`./__html__/treeview-menu.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
