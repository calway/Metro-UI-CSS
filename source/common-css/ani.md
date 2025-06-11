# Animation Utilities (ani.less)

This file provides a comprehensive set of CSS animation utilities for Metro UI components and elements.

## Overview

The `ani.less` file defines various animation classes and keyframes that can be applied to elements to create visual effects. These animations can be triggered on page load or on hover.

## CSS Variables

The file defines several CSS variables for animation durations and easing functions:

### Duration Variables
| Variable | Value |
|----------|-------|
| `--base-duration-0` | 0ms |
| `--base-duration-100` | 100ms |
| `--base-duration-200` | 200ms |
| `--base-duration-300` | 300ms |
| `--base-duration-400` | 400ms |
| `--base-duration-500` | 500ms |
| `--base-duration-600` | 600ms |
| `--base-duration-700` | 700ms |
| `--base-duration-800` | 800ms |
| `--base-duration-900` | 900ms |
| `--base-duration-1000` | 1s |

### Easing Variables
| Variable | Value |
|----------|-------|
| `--base-easing-linear` | cubic-bezier(0, 0, 1, 1) |
| `--base-easing-easeIn` | cubic-bezier(0.7, 0.1, 0.75, 0.9) |
| `--base-easing-easeOut` | cubic-bezier(0.3, 0.8, 0.6, 1) |
| `--base-easing-easeInOut` | cubic-bezier(0.6, 0, 0.2, 1) |

## Animation Classes

The file provides two types of animation classes:
1. `.ani-[animation-name]` - Animation starts immediately when applied
2. `.ani-hover-[animation-name]:hover` - Animation starts when element is hovered

### Available Animations

| Class | Description |
|-------|-------------|
| `.ani-spin`, `.ani-hover-spin:hover` | Rotates element 360 degrees continuously |
| `.ani-spin-reverse`, `.ani-hover-spin-reverse:hover` | Rotates element counter-clockwise continuously |
| `.ani-pulse`, `.ani-hover-pulse:hover` | Pulses the element with rotation |
| `.ani-spanner`, `.ani-hover-spanner:hover` | Applies a wrench-like rotation animation |
| `.ani-ring`, `.ani-hover-ring:hover` | Applies a bell-ringing animation |
| `.ani-vertical`, `.ani-hover-vertical:hover` | Moves element up and down |
| `.ani-horizontal`, `.ani-hover-horizontal:hover` | Moves element left and right |
| `.ani-flash`, `.ani-hover-flash:hover` | Makes element flash by changing opacity |
| `.ani-bounce`, `.ani-hover-bounce:hover` | Makes element bounce up and down |
| `.ani-float`, `.ani-hover-float:hover` | Makes element float up and down smoothly |
| `.ani-heartbeat`, `.ani-hover-heartbeat:hover` | Simulates a heartbeat by scaling element |
| `.ani-shake`, `.ani-hover-shake:hover` | Shakes element back and forth |
| `.ani-shuttle`, `.ani-hover-shuttle:hover` | Applies a shuttle-like rotation and scaling |
| `.ani-pass`, `.ani-hover-pass:hover` | Makes element pass from left to right |
| `.ani-ripple`, `.ani-hover-ripple:hover` | Creates a ripple effect by scaling and fading |

## Keyframes

The file defines keyframe animations for each of the animation classes, as well as some additional utility keyframes:

- `@keyframes swinging`
- `@keyframes scaleout`
- `@keyframes cubemove`
- `@keyframes orbit`
- `@keyframes metro-slide`
- `@keyframes metro-opacity`
- `@keyframes ani-spin`
- `@keyframes ani-spin-reverse`
- `@keyframes ani-pulse`
- `@keyframes ani-wrench`
- `@keyframes ani-ring`
- `@keyframes ani-vertical`
- `@keyframes ani-horizontal`
- `@keyframes ani-flash`
- `@keyframes ani-bounce`
- `@keyframes ani-float`
- `@keyframes ani-heartbeat`
- `@keyframes ani-shuttle`
- `@keyframes ani-pass`
- `@keyframes ani-ripple`
- `@keyframes ani-shrink`
- `@keyframes ani-pre-spin`
- `@keyframes ani-bg-stripes`
- `@keyframes slideUp`
- `@keyframes slideDown`

## Usage Examples

```html
<!-- Spinning element -->
<div class="ani-spin">This element will spin continuously</div>

<!-- Element that spins on hover -->
<div class="ani-hover-spin">This element will spin when hovered</div>

<!-- Bouncing element -->
<button class="ani-bounce">Bouncing Button</button>

<!-- Floating icon -->
<span class="icon ani-float">⚙️</span>
```

You can combine these animation classes with other Metro UI classes to create engaging user interfaces.