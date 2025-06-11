# Media Breakpoint Variables (media.less)

This file defines CSS variables for responsive design breakpoints in Metro UI.

## Overview

The `media.less` file establishes CSS variables that correspond to the standard breakpoints used throughout the Metro UI framework. These variables are used for creating responsive layouts and components that adapt to different screen sizes.

## CSS Variables

The file defines the following CSS variables for media breakpoints:

| Variable | Description |
|----------|-------------|
| `--media-fs` | Fullscreen breakpoint |
| `--media-xs` | Extra small screens breakpoint |
| `--media-sm` | Small screens breakpoint |
| `--media-ld` | Low-density screens breakpoint |
| `--media-md` | Medium screens breakpoint |
| `--media-lg` | Large screens breakpoint |
| `--media-xl` | Extra large screens breakpoint |
| `--media-xxl` | Double extra large screens breakpoint |
| `--media-xxxl` | Triple extra large screens breakpoint |

These variables are derived from the corresponding LESS variables defined in the `../include/vars` file.

## Usage

These CSS variables can be used in your custom CSS to create responsive designs that align with Metro UI's breakpoints:

```css
@media (min-width: var(--media-md)) {
    /* Styles that apply to medium screens and above */
    .my-element {
        display: flex;
    }
}

@media (max-width: calc(var(--media-md) - 1px)) {
    /* Styles that apply to screens smaller than medium */
    .my-element {
        display: block;
    }
}
```

## Integration with Metro UI

Metro UI uses these breakpoints internally for its responsive utility classes. For example, classes like `.d-none-md` (hide on medium screens and above) or `.d-flex-lg` (display as flex on large screens and above) rely on these breakpoint variables.

## Breakpoint Hierarchy

The breakpoints follow this hierarchy from smallest to largest:

1. `--media-fs` (Fullscreen)
2. `--media-xs` (Extra Small)
3. `--media-sm` (Small)
4. `--media-ld` (Low Density)
5. `--media-md` (Medium)
6. `--media-lg` (Large)
7. `--media-xl` (Extra Large)
8. `--media-xxl` (Double Extra Large)
9. `--media-xxxl` (Triple Extra Large)

## Best Practices

1. **Consistent Breakpoints**: Use these variables instead of hardcoded pixel values to ensure consistency with Metro UI's responsive behavior.

2. **Mobile-First Approach**: Start with styles for the smallest screens and then use `min-width` media queries with these variables to add styles for larger screens.

3. **Avoid Breakpoint Proliferation**: Stick to these standard breakpoints rather than creating custom ones to maintain consistency across your application.

4. **Testing**: Always test your responsive designs at each of these breakpoints to ensure proper layout and functionality.

## Example: Creating a Responsive Grid

```css
.my-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

@media (min-width: var(--media-sm)) {
    .my-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: var(--media-md)) {
    .my-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (min-width: var(--media-lg)) {
    .my-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}
```

This example creates a responsive grid that displays 1 column on mobile, 2 columns on small screens, 3 columns on medium screens, and 4 columns on large screens.