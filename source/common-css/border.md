# Border Utilities (border.less)

This file provides a comprehensive set of utility classes for controlling borders, border styles, border radius, and special animated border effects in Metro UI.

## Overview

The `border.less` file defines various CSS classes for manipulating borders on elements, including utilities for removing borders, setting border styles, controlling border radius, and creating animated border effects.

## CSS Variables

### Border Radius
| Variable | Default Value |
|----------|---------------|
| `--border-radius` | 6px |

### Animated Border Variables
| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--animated-border-speed` | 3s | Duration of the border animation |
| `--animated-border-size` | 2px | Width of the animated border |
| `--animated-border-color` | #50a8ff | Default color for animated borders |
| `--animated-border-color-1` | #ff4545 | First color in rainbow border gradient |
| `--animated-border-color-2` | #00ff99 | Second color in rainbow border gradient |
| `--animated-border-color-3` | #006aff | Third color in rainbow border gradient |
| `--animated-border-color-4` | #ff0095 | Fourth color in rainbow border gradient |
| `--animated-border-color-5` | #ff4545 | Fifth color in rainbow border gradient |

## Border Removal Classes

### No Border Classes
| Class | Description |
|-------|-------------|
| `.no-border` | Removes all borders |
| `.no-border-left` | Removes left border |
| `.no-border-right` | Removes right border |
| `.no-border-top` | Removes top border |
| `.no-border-bottom` | Removes bottom border |
| `.no-border-visible` | Makes borders transparent |

### Border None Classes (Alternative Syntax)
| Class | Description |
|-------|-------------|
| `.border-none` | Removes all borders |
| `.border-left-none` | Removes left border |
| `.border-right-none` | Removes right border |
| `.border-top-none` | Removes top border |
| `.border-bottom-none` | Removes bottom border |
| `.border-visible-none` | Makes borders transparent |

## Border Addition Classes

| Class | Description |
|-------|-------------|
| `.border` | Adds a 1px transparent border on all sides |
| `.border-left` | Adds a 1px transparent border on the left |
| `.border-right` | Adds a 1px transparent border on the right |
| `.border-top` | Adds a 1px transparent border on the top |
| `.border-bottom` | Adds a 1px transparent border on the bottom |

## Border Radius Classes

| Class | Description |
|-------|-------------|
| `.border-radius`, `.rounded` | Applies the default border radius (6px) |
| `.border-radius-half`, `.to-cycle` | Makes the element circular (border-radius: 50%) |
| `.border-radius-1` through `.border-radius-20` | Sets specific border radius from 1px to 20px |

## Border Size Classes

| Class | Description |
|-------|-------------|
| `.border-size-1` through `.border-size-20` | Sets border width from 1px to 20px |

## Border Style Classes

| Class | Description |
|-------|-------------|
| `.border-solid` | Sets solid border style |
| `.border-dashed` | Sets dashed border style |
| `.border-dotted` | Sets dotted border style |
| `.border-double` | Sets double border style |
| `.border-groove` | Sets groove border style |
| `.border-inset` | Sets inset border style |
| `.border-outset` | Sets outset border style |
| `.border-ridge` | Sets ridge border style |

## Responsive Border Classes

The file includes responsive variants for border removal classes that apply at different breakpoints:

| Class | Description |
|-------|-------------|
| `.border-none-{breakpoint}` | Removes all borders at specified breakpoint |
| `.border-top-none-{breakpoint}` | Removes top border at specified breakpoint |
| `.border-right-none-{breakpoint}` | Removes right border at specified breakpoint |
| `.border-bottom-none-{breakpoint}` | Removes bottom border at specified breakpoint |
| `.border-left-none-{breakpoint}` | Removes left border at specified breakpoint |

Where `{breakpoint}` can be: xs, sm, md, lg, xl, xxl, xxxl

## Animated Border Classes

### Rainbow Border
| Class | Description |
|-------|-------------|
| `.rainbow-border` | Applies a colorful animated rainbow border effect |
| `.rainbow-border-hover` | Applies the rainbow border effect only on hover |

### Animated Border
| Class | Description |
|-------|-------------|
| `.animated-border` | Applies an animated rotating border effect |
| `.animated-border-hover` | Applies the animated border effect only on hover |
| `.animated-border-{color}` | Applies the animated border effect with a specific color |
| `.animated-border-hover-{color}` | Applies the animated border effect with a specific color only on hover |

Where `{color}` can be any of the Metro UI color names (e.g., primary, secondary, success, etc.)

## Usage Examples

### Basic Border Utilities

```html
<!-- Adding borders -->
<div class="border">Element with a 1px transparent border</div>
<div class="border border-solid">Element with a 1px solid border</div>

<!-- Removing borders -->
<div class="no-border">Element with no border</div>
<div class="border-top-none">Element with no top border</div>

<!-- Border radius -->
<div class="rounded">Element with default border radius</div>
<div class="to-cycle">Circular element</div>
<div class="border-radius-10">Element with 10px border radius</div>

<!-- Border size -->
<div class="border border-solid border-size-3">Element with 3px solid border</div>

<!-- Border style -->
<div class="border border-dashed">Element with dashed border</div>
```

### Animated Borders

```html
<!-- Rainbow border -->
<div class="rainbow-border p-4">
    Element with animated rainbow border
</div>

<!-- Rainbow border on hover -->
<div class="rainbow-border-hover p-4">
    Element with rainbow border on hover
</div>

<!-- Animated border -->
<div class="animated-border p-4">
    Element with animated border
</div>

<!-- Animated border with specific color -->
<div class="animated-border-success p-4">
    Element with green animated border
</div>

<!-- Animated border on hover -->
<div class="animated-border-hover-primary p-4">
    Element with primary color animated border on hover
</div>
```

### Responsive Border Utilities

```html
<!-- Border that disappears on medium screens and above -->
<div class="border border-solid border-none-md">
    This element has a border on small screens only
</div>
```

## Notes

- To use animated borders, the parent element must have `position: relative` (this is automatically applied by the CSS).
- Animated borders use CSS `@property` and conic gradients, which may not be supported in all browsers.
- Border colors can be set using standard CSS, or by combining with Metro UI color utility classes.