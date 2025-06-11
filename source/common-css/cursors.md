# Cursor Utilities (cursors.less)

This file provides a comprehensive set of utility classes for controlling cursor styles in Metro UI.

## Overview

The `cursors.less` file defines CSS classes for setting the cursor appearance when hovering over elements. These utility classes make it easy to apply appropriate cursor styles to indicate the behavior of interactive elements.

## Available Cursor Classes

All cursor utility classes use the prefix `.c-` followed by the cursor type name.

| Class | CSS Property | Description |
|-------|-------------|-------------|
| `.c-auto` | `cursor: auto;` | Default cursor, determined by the current context |
| `.c-default` | `cursor: default;` | Standard arrow cursor |
| `.c-none` | `cursor: none;` | No cursor is rendered |
| `.c-help` | `cursor: help;` | Question mark cursor indicating help is available |
| `.c-pointer` | `cursor: pointer;` | Hand cursor indicating a link or clickable element |
| `.c-progress` | `cursor: progress;` | Progress cursor indicating something is loading |
| `.c-wait` | `cursor: wait;` | Wait cursor (usually an hourglass) |
| `.c-cell` | `cursor: cell;` | Cell cursor for indicating a cell selection in a table |
| `.c-crosshair` | `cursor: crosshair;` | Crosshair cursor for precise selection |
| `.c-text` | `cursor: text;` | Text cursor (I-beam) for text selection |
| `.c-text-vertical` | `cursor: vertical-text;` | Vertical text cursor for vertical text selection |
| `.c-alias` | `cursor: alias;` | Alias/shortcut cursor |
| `.c-copy` | `cursor: copy;` | Copy cursor indicating something can be copied |
| `.c-move` | `cursor: move;` | Move cursor indicating something can be moved |
| `.c-no-drop` | `cursor: no-drop;` | No-drop cursor indicating that an item cannot be dropped |
| `.c-not-allowed` | `cursor: not-allowed;` | Not-allowed cursor indicating an action is not allowed |
| `.c-all-scroll` | `cursor: all-scroll;` | All-scroll cursor indicating scrolling in any direction |
| `.c-col-resize` | `cursor: col-resize;` | Column-resize cursor for horizontal resizing |
| `.c-row-resize` | `cursor: row-resize;` | Row-resize cursor for vertical resizing |
| `.c-n-resize` | `cursor: n-resize;` | North resize cursor |
| `.c-e-resize` | `cursor: e-resize;` | East resize cursor |
| `.c-s-resize` | `cursor: s-resize;` | South resize cursor |
| `.c-w-resize` | `cursor: w-resize;` | West resize cursor |
| `.c-ne-resize` | `cursor: ne-resize;` | Northeast resize cursor |
| `.c-nw-resize` | `cursor: nw-resize;` | Northwest resize cursor |
| `.c-se-resize` | `cursor: se-resize;` | Southeast resize cursor |
| `.c-sw-resize` | `cursor: sw-resize;` | Southwest resize cursor |
| `.c-ew-resize` | `cursor: ew-resize;` | East-west resize cursor |
| `.c-ns-resize` | `cursor: ns-resize;` | North-south resize cursor |
| `.c-nesw-resize` | `cursor: nesw-resize;` | Northeast-southwest resize cursor |
| `.c-nwse-resize` | `cursor: nwse-resize;` | Northwest-southeast resize cursor |
| `.c-zoom-in` | `cursor: zoom-in;` | Zoom-in cursor |
| `.c-zoom-out` | `cursor: zoom-out;` | Zoom-out cursor |
| `.c-grab` | `cursor: grab;` | Grab cursor indicating something can be grabbed |
| `.c-grabbing` | `cursor: grabbing;` | Grabbing cursor indicating something is being grabbed |

## Usage Examples

```html
<!-- Basic cursor examples -->
<div class="c-pointer">This element has a pointer cursor (hand)</div>
<div class="c-text">This element has a text cursor (I-beam)</div>
<div class="c-not-allowed">This element has a not-allowed cursor</div>

<!-- Interactive elements with appropriate cursors -->
<button class="c-pointer">Clickable Button</button>
<div class="c-move">Draggable Element</div>
<div class="c-grab">Grabbable Element</div>
<div class="c-grabbing">Element Being Grabbed</div>

<!-- Resize handles -->
<div class="c-ew-resize">Horizontal Resize Handle</div>
<div class="c-ns-resize">Vertical Resize Handle</div>
<div class="c-nwse-resize">Corner Resize Handle</div>

<!-- Loading indicator -->
<div class="c-progress">Loading...</div>
```

## Best Practices

1. Use the `.c-pointer` class for clickable elements that don't already have this cursor by default (like buttons).
2. Use the `.c-text` class for editable text areas that don't already have this cursor by default.
3. Use the `.c-not-allowed` class for disabled elements to indicate they cannot be interacted with.
4. Use the resize cursors (`.c-ew-resize`, `.c-ns-resize`, etc.) for resize handles in resizable UI components.
5. Use the `.c-grab` and `.c-grabbing` classes for draggable elements to indicate they can be moved.

## Browser Compatibility

These cursor styles are supported in all modern browsers, but some specific cursors might not be available in older browsers. Always test your application in your target browsers to ensure proper cursor display.