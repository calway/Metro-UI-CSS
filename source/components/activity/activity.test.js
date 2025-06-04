import { suite, it, expect, mock, beforeAll, DOM, waitFor, beforeEach } from '@olton/latte'

let Metro = null

beforeAll(async () => {
    const metro_js = `./lib/metro.js` 
    const metro_css = `./lib/metro.css`

    DOM.js.fromFile(metro_js)
    DOM.css.fromFile(metro_css)

    Metro = await DOM.waitForObject('Metro')
})

beforeEach(() => {
    document.body.innerHTML = '';
})

// Test suite for the Activity component
suite("Activity Component Tests", () => {
    // Test initialization with default options
    it("should initialize with default options", async () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <div id="test-activity"></div>
        `;

        // Initialize the activity
        Metro.makePlugin("#test-activity", "activity");

        // Get the activity instance
        const activity = Metro.getPlugin("#test-activity", "activity");

        // Check that the activity was initialized
        expect(activity).not.toBeNull();
        expect(document.querySelector("#test-activity").classList.contains("activity-ring")).toBe(true);
    });

    // Test initialization with custom options
    it("should initialize with custom options", () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <div id="test-activity-custom"></div>
        `;

        // Initialize the activity with custom options
        Metro.makePlugin("#test-activity-custom", "activity", {
            type: "metro",
            style: "dark",
            size: 100
        });

        // Get the activity element
        const activityElement = document.querySelector("#test-activity-custom");

        // Check that the activity was initialized with custom options
        expect(activityElement).hasClass("activity-metro");
        expect(activityElement).hasClass("dark-side");
    });

    // Test initialization with color style
    it("should initialize with color style", () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <div id="test-activity-color"></div>
        `;

        // Initialize the activity with color style
        Metro.makePlugin("#test-activity-color", "activity", {
            style: "color"
        });

        // Get the activity element
        const activityElement = document.querySelector("#test-activity-color");

        // Check that the activity has color style
        expect(activityElement).hasClass("color-style");
    });

    // Test different activity types
    it("should create metro type activity", () => {
        document.body.innerHTML = `<div id="test-metro"></div>`;
        Metro.makePlugin("#test-metro", "activity", { type: "metro" });

        const element = document.querySelector("#test-metro");
        expect(element).hasClass("activity-metro");
        expect(element.querySelectorAll(".circle").length).toBe(5);
    });

    it("should create square type activity", () => {
        document.body.innerHTML = `<div id="test-square"></div>`;
        Metro.makePlugin("#test-square", "activity", { type: "square" });

        const element = document.querySelector("#test-square");
        expect(element).hasClass("activity-square");
        expect(element.querySelectorAll(".square").length).toBe(4);
    });

    it("should create cycle type activity", () => {
        document.body.innerHTML = `<div id="test-cycle"></div>`;
        Metro.makePlugin("#test-cycle", "activity", { type: "cycle" });

        const element = document.querySelector("#test-cycle");
        expect(element).hasClass("activity-cycle");
        expect(element.querySelectorAll(".cycle").length).toBe(1);
    });

    it("should create ring type activity", () => {
        document.body.innerHTML = `<div id="test-ring"></div>`;
        Metro.makePlugin("#test-ring", "activity", { type: "ring" });

        const element = document.querySelector("#test-ring");
        expect(element).hasClass("activity-ring");
        expect(element.querySelectorAll(".wrap").length).toBe(5);
        expect(element.querySelectorAll(".circle").length).toBe(5);
    });

    it("should create simple type activity", () => {
        document.body.innerHTML = `<div id="test-simple"></div>`;
        Metro.makePlugin("#test-simple", "activity", { type: "simple", size: 100, radius: 30 });

        const element = document.querySelector("#test-simple");
        expect(element).hasClass("activity-simple");

        const svg = element.querySelector("svg.circular");
        expect(svg).not.toBeNull();

        const circle = svg.querySelector("circle.path");
        expect(circle).not.toBeNull();
        expect(circle.getAttribute("cx")).toBe("50");
        expect(circle.getAttribute("cy")).toBe("50");
        expect(circle.getAttribute("r")).toBe("30");
    });

    it("should create atom type activity", () => {
        document.body.innerHTML = `<div id="test-atom"></div>`;
        Metro.makePlugin("#test-atom", "activity", { type: "atom" });

        const element = document.querySelector("#test-atom");
        expect(element).hasClass("activity-atom");
        expect(element.querySelectorAll(".electron").length).toBe(3);
    });

    it("should create bars type activity", () => {
        document.body.innerHTML = `<div id="test-bars"></div>`;
        Metro.makePlugin("#test-bars", "activity", { type: "bars" });

        const element = document.querySelector("#test-bars");
        expect(element).hasClass("activity-bars");
        expect(element.querySelectorAll(".bar").length).toBe(6);
    });

    // Test destroy method
    it("should destroy the activity component", () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <div id="test-activity-destroy"></div>
        `;

        // Initialize the activity
        Metro.makePlugin("#test-activity-destroy", "activity");

        // Get the activity instance
        const activity = Metro.getPlugin("#test-activity-destroy", "activity");

        // Destroy the activity
        const element = activity.destroy();

        // Check that the element exists and has the correct properties
        expect(element).not.hasParent();
    });

    // Test global API
    it("should open global activity", () => {
        // Mock the Metro.dialog.create method
        const originalCreate = Metro.dialog.create;
        let dialogCreated = false;

        Metro.dialog.create = mock(() => {
            dialogCreated = true;
            return { id: "test-dialog" };
        });

        // Open global activity
        const dialog = Metro.activity.open({
            type: "cycle",
            text: "Loading...",
            autoHide: 1000
        });

        // Check that dialog.create was called
        expect(dialogCreated).toBe(true);

        // Restore original method
        Metro.dialog.create = originalCreate;
    });

    it("should close global activity", () => {
        // Mock the Metro.dialog.close method
        const originalClose = Metro.dialog.close;
        let dialogClosed = false;

        Metro.dialog.close = mock((dialog) => {
            dialogClosed = true;
        });

        // Close global activity
        Metro.activity.close({ id: "test-dialog" });

        // Check that dialog.close was called
        expect(dialogClosed).toBe(true);

        // Restore original method
        Metro.dialog.close = originalClose;
    });

    // Test event firing
    it("should fire activity-create event", () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <div id="test-activity-event"></div>
        `;

        // Create a mock for the event handler
        const createEventMock = mock();

        // Initialize the activity with event handler
        Metro.makePlugin("#test-activity-event", "activity", {
            onActivityCreate: createEventMock
        });

        // Check that the event handler was called
        expect(createEventMock).toHaveBeenCalled();
    });
});
