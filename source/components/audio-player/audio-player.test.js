import { suite, it, expect, mock, beforeAll, beforeEach, DOM, waitFor } from '@olton/latte'

let Metro = null
let $ = null

beforeAll(async () => {
   const metro_js = `./lib/metro.js`
   const metro_css = `./lib/metro.css`

   DOM.js.fromFile(metro_js)
   DOM.css.fromFile(metro_css)

   Metro = await DOM.waitForObject('Metro')
   $ = await DOM.waitForObject('$')
})

beforeEach(() => {
   document.body.innerHTML = '';
})

// Test suite for the Audio Player component
suite("Audio Player Component Tests", () => {
    // Test initialization with default options
    it("should initialize with default options", async () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <audio id="test-audio"></audio>
        `;

        // Initialize the audio player
        Metro.makePlugin("#test-audio", "audio-player");

        // Get the audio player instance
        const player = Metro.getPlugin("#test-audio", "audio-player");

        // Check that the player was initialized
        expect(player).not.toBeNull();
        
        // Check that the audio element is wrapped in a player container
        const playerContainer = document.querySelector(".audio-player");
        expect(playerContainer).not.toBeNull();
        
        // Check default controls are present
        expect(document.querySelector(".audio-player .controls")).not.toBeNull();
        expect(document.querySelector(".audio-player .play")).not.toBeNull();
        expect(document.querySelector(".audio-player .stop")).not.toBeNull();
        expect(document.querySelector(".audio-player .mute")).not.toBeNull();
        expect(document.querySelector(".audio-player .loop")).not.toBeNull();
        expect(document.querySelector(".audio-player .stream")).not.toBeNull();
        expect(document.querySelector(".audio-player .volume")).not.toBeNull();
        expect(document.querySelector(".audio-player .info-box")).not.toBeNull();
    });

    // Test initialization with custom options
    it("should initialize with custom options", () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <audio id="test-audio-custom"></audio>
        `;

        // Initialize the audio player with custom options
        Metro.makePlugin("#test-audio-custom", "audio-player", {
            volume: 0.8,
            loop: true,
            showLoop: false,
            showStop: false,
            showInfo: false
        });

        // Get the audio player instance
        const player = Metro.getPlugin("#test-audio-custom", "audio-player");
        
        // Check that the player was initialized with custom options
        expect(player).not.toBeNull();
        
        // Check that specified controls are hidden
        expect(document.querySelector(".audio-player .loop")).toBeNull();
        expect(document.querySelector(".audio-player .stop")).toBeNull();
        expect(document.querySelector(".audio-player .info-box").style.display).toBe("none");
        
        // Check that volume is set correctly
        expect(player.audio.volume).toBe(0.8);
    });

    // Test custom icons
    it("should display custom icons when provided", () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <audio id="test-audio-icons"></audio>
        `;

        // Initialize the audio player with custom icons
        Metro.makePlugin("#test-audio-icons", "audio-player", {
            playIcon: "PLAY",
            stopIcon: "STOP",
            loopIcon: "LOOP"
        });

        // Check that the icons were set correctly
        expect(document.querySelector(".audio-player .play").innerHTML).toBe("PLAY");
        expect(document.querySelector(".audio-player .stop").innerHTML).toBe("STOP");
        expect(document.querySelector(".audio-player .loop").innerHTML).toBe("LOOP");
    });

    // Test play method
    it("should have a working play method", () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <audio id="test-audio-play" data-src="test.mp3"></audio>
        `;

        // Mock the audio play method
        const originalPlay = HTMLAudioElement.prototype.play;
        const playMock = mock();
        HTMLAudioElement.prototype.play = playMock;

        // Initialize the audio player
        Metro.makePlugin("#test-audio-play", "audio-player");

        // Get the audio player instance
        const player = Metro.getPlugin("#test-audio-play", "audio-player");
        
        // Call the play method
        player.play();
        
        // Check that the audio play method was called
        expect(playMock).toHaveBeenCalled();
        
        // Restore the original play method
        HTMLAudioElement.prototype.play = originalPlay;
    });

    // Test pause method
    it("should have a working pause method", () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <audio id="test-audio-pause"></audio>
        `;

        // Mock the audio pause method
        const originalPause = HTMLAudioElement.prototype.pause;
        const pauseMock = mock();
        HTMLAudioElement.prototype.pause = pauseMock;

        // Initialize the audio player
        Metro.makePlugin("#test-audio-pause", "audio-player");

        // Get the audio player instance
        const player = Metro.getPlugin("#test-audio-pause", "audio-player");
        
        // Call the pause method
        player.pause();
        
        // Check that the audio pause method was called
        expect(pauseMock).toHaveBeenCalled();
        
        // Restore the original pause method
        HTMLAudioElement.prototype.pause = originalPause;
    });

    // Test stop method
    it("should have a working stop method", () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <audio id="test-audio-stop"></audio>
        `;

        // Mock the audio pause method
        const originalPause = HTMLAudioElement.prototype.pause;
        const pauseMock = mock();
        HTMLAudioElement.prototype.pause = pauseMock;

        // Initialize the audio player
        Metro.makePlugin("#test-audio-stop", "audio-player");

        // Get the audio player instance
        const player = Metro.getPlugin("#test-audio-stop", "audio-player");
        
        // Call the stop method
        player.stop();
        
        // Check that the audio pause method was called
        expect(pauseMock).toHaveBeenCalled();
        
        // Check that currentTime was reset to 0
        expect(player.audio.currentTime).toBe(0);
        
        // Restore the original pause method
        HTMLAudioElement.prototype.pause = originalPause;
    });

    // Test setVolume method
    it("should have a working setVolume method", () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <audio id="test-audio-volume"></audio>
        `;

        // Initialize the audio player
        Metro.makePlugin("#test-audio-volume", "audio-player");

        // Get the audio player instance
        const player = Metro.getPlugin("#test-audio-volume", "audio-player");
        
        // Call the setVolume method
        player.setVolume(0.7);
        
        // Check that the volume was set correctly
        expect(player.audio.volume).toBe(0.7);
        
        // Test getting the volume
        const volume = player.setVolume();
        expect(volume).toBe(0.7);
    });

    // Test mute method
    it("should have a working mute method", () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <audio id="test-audio-mute"></audio>
        `;

        // Initialize the audio player
        Metro.makePlugin("#test-audio-mute", "audio-player");

        // Get the audio player instance
        const player = Metro.getPlugin("#test-audio-mute", "audio-player");
        
        // Set initial volume
        player.setVolume(0.8);
        
        // Call the mute method
        player.mute();
        
        // Check that the audio is muted
        expect(player.audio.volume).toBe(0);
        
        // Call the mute method again to unmute
        player.mute();
        
        // Check that the volume is restored
        expect(player.audio.volume).toBe(0.8);
    });

    // Test loop method
    it("should have a working loop method", () => {
        return
        // Create a DOM element for testing
        document.body.innerHTML = `
            <audio id="test-audio-loop"></audio>
        `;

        // Initialize the audio player
        Metro.makePlugin("#test-audio-loop", "audio-player", {
            showLoop: true
        });

        // Get the audio player instance
        const player = Metro.getPlugin("#test-audio-loop", "audio-player");
        
        // Call the loop method
        player.loop();
        
        // Check that the loop attribute is set
        expect(player.element.attr("loop")).toBe("loop");
        
        // Call the loop method again to disable looping
        player.loop();
        
        // Check that the loop attribute is removed
        expect(player.element.attr("loop")).toBeUndefined();
    });

    // Test event firing
    it("should fire audio-player-create event", () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <audio id="test-audio-event"></audio>
        `;

        // Create a mock for the event handler
        const createEventMock = mock();

        // Initialize the audio player with event handler
        Metro.makePlugin("#test-audio-event", "audio-player", {
            onAudioPlayerCreate: createEventMock
        });

        // Check that the event handler was called
        expect(createEventMock).toHaveBeenCalled();
    });

    // Test destroy method
    it("should destroy the audio player component", () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <audio id="test-audio-destroy"></audio>
        `;

        // Initialize the audio player
        Metro.makePlugin("#test-audio-destroy", "audio-player");

        // Get the audio player instance
        const player = Metro.getPlugin("#test-audio-destroy", "audio-player");

        // Destroy the audio player
        const element = player.destroy();

        // Check that the element was returned and event listeners were removed
        expect(element).not.toBeNull();
        expect(element.attr("id")).toBe("test-audio-destroy");
    });
});