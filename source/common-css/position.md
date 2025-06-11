# Position Utilities (position.less)

This file provides basic positioning utility classes for controlling how elements are positioned in Metro UI.

## Overview

The `position.less` file defines CSS classes for setting the CSS `position` property and creating fixed headers and footers. These utilities form the foundation for more advanced positioning techniques.

## Basic Position Classes

These classes set the CSS `position` property:

| Class | Description |
|-------|-------------|
| `.pos-relative` | Sets `position: relative` |
| `.pos-absolute` | Sets `position: absolute` |
| `.pos-static` | Sets `position: static` |
| `.pos-fixed` | Sets `position: fixed` |
| `.pos-sticky` | Sets `position: sticky` with `top: 0` and `align-self: flex-start` |

## Fixed Position Utilities

These classes create fixed elements that span the full width of the viewport:

| Class | Description |
|-------|-------------|
| `.fixed-top` | Creates a fixed element at the top of the viewport |
| `.fixed-bottom` | Creates a fixed element at the bottom of the viewport |

## Responsive Variants

Most position classes have responsive variants that apply at specific breakpoints. The responsive variants follow the naming pattern `.{class}-{breakpoint}`.

For example:
- `.pos-relative-md` - Sets `position: relative` on medium screens and above
- `.pos-fixed-lg` - Sets `position: fixed` on large screens and above

Where `{breakpoint}` can be: xs, sm, md, lg, xl, xxl, xxxl

*Note: The `.pos-sticky` and fixed position utilities (`.fixed-top`, `.fixed-bottom`) do not have responsive variants.*

## Usage Examples

### Basic Positioning

```html
<!-- Relative positioning (creates a positioning context for absolute children) -->
<div class="pos-relative">
    <!-- Absolutely positioned within the parent -->
    <div class="pos-absolute">This element is positioned absolutely</div>
</div>

<!-- Static positioning (default flow) -->
<div class="pos-static">This element follows the normal document flow</div>

<!-- Fixed positioning (stays in place during scroll) -->
<div class="pos-fixed">This element stays fixed on the screen</div>

<!-- Sticky positioning (becomes fixed when scrolled to) -->
<div class="pos-sticky">This element sticks to the top when scrolled</div>
```

### Fixed Headers and Footers

```html
<!-- Fixed header -->
<header class="fixed-top">
    This header stays at the top of the viewport
</header>

<!-- Main content -->
<main>
    Content goes here
</main>

<!-- Fixed footer -->
<footer class="fixed-bottom">
    This footer stays at the bottom of the viewport
</footer>
```

### Responsive Positioning

```html
<!-- Element is static by default, relative on medium screens, absolute on large screens -->
<div class="pos-static pos-relative-md pos-absolute-lg">
    This element changes its positioning behavior at different screen sizes
</div>
```

## CSS Properties

### Basic Position Classes

```css
.pos-relative {position: relative !important;}
.pos-absolute {position: absolute !important;}
.pos-static {position: static !important;}
.pos-fixed {position: fixed !important;}
.pos-sticky {
    position: sticky !important;
    top: 0;
    align-self: flex-start !important;
}
```

### Fixed Position Utilities

```css
.fixed-top, .fixed-bottom {
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
}

.fixed-top {
    top: 0;
    bottom: auto;
}

.fixed-bottom {
    top: auto;
    bottom: 0;
}
```

## Best Practices

1. **Creating Positioning Contexts**: Use `.pos-relative` to create a positioning context for absolutely positioned child elements.

2. **Fixed Headers and Footers**: When using `.fixed-top` or `.fixed-bottom`, add appropriate padding to the body or main content to prevent content from being hidden behind these fixed elements.

3. **Sticky Positioning**: Be aware that `.pos-sticky` requires a scrollable container and may not work in all browsers. Always test thoroughly.

4. **Responsive Positioning**: Use responsive variants to change positioning behavior based on screen size, which is particularly useful for navigation elements that might be fixed on desktop but static on mobile.

5. **Combining with Other Utilities**: These position utilities work well with other Metro UI utilities:
   - Use with spacing utilities to add padding or margin
   - Use with z-index utilities to control stacking order
   - Use with width and height utilities to control dimensions

## Related Utilities

For more advanced positioning options, see the `position-ext.less` file, which provides utilities for precise positioning of elements in relation to their containers.