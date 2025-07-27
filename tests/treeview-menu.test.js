
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("treeview-menu.html tests", () => {
    it("treeview-menu.html", async () => {
        await B.visit(`${getFileUrl(`./examples/treeview-menu.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
