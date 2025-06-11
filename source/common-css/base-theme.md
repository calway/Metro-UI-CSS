# Base Theme (base-theme.less)

This file defines the core theme variables and basic styling for Metro UI components. It establishes the foundation for both light and dark themes.

## Overview

The `base-theme.less` file sets up essential CSS variables that control the appearance of Metro UI components, including layout sizes, control heights, colors, and other visual properties. It defines variables for both the default light theme (in `:root`) and the dark theme (in `.dark-side`).

## CSS Variables

### Layout Size Variables

These variables define standard size breakpoints used throughout the framework:

| Variable | Description |
|----------|-------------|
| `--layout-fs` | Fullscreen size |
| `--layout-xs` | Extra small size |
| `--layout-sm` | Small size |
| `--layout-ld` | Low-density size |
| `--layout-md` | Medium size |
| `--layout-lg` | Large size |
| `--layout-xl` | Extra large size |
| `--layout-xxl` | Double extra large size |
| `--layout-xxxl` | Triple extra large size |

### Control Height Variables

These variables define standard heights for UI controls:

| Variable | Description |
|----------|-------------|
| `--control-height-mini` | Mini control height (20px) |
| `--control-height-small` | Small control height (26px) |
| `--control-height-medium` | Medium control height (30px) |
| `--control-height-normal` | Normal control height (36px) |
| `--control-height-large` | Large control height (54px) |

### Light Theme Variables (Default)

These variables are defined in the `:root` selector and apply to the default light theme:

| Variable | Description |
|----------|-------------|
| `--default-background` | Default background color (#fff) |
| `--default-color` | Default text color (#191919) |
| `--default-color-hover` | Default hover text color (#000000) |
| `--default-background-disabled` | Default disabled background color (#f7f8fa) |
| `--default-color-disabled` | Default disabled text color (#c9ccd6) |
| `--body-background` | Body background color (same as default background) |
| `--body-color` | Body text color (same as default color) |
| `--body-color-secondary` | Secondary body text color (#a2a5b1) |
| `--border-color` | Border color for elements (#e8e8e8) |
| `--link-color` | Link text color (#5a87cb) |
| `--link-color-hover` | Link hover text color (#0056B3FF) |
| `--selected-color` | Selected item highlight color (#1FB1F8FF) |
| `--selected-row-background` | Background for selected rows (#f5f8fe) |
| `--selected-item-background` | Background for selected items (#d4e2ff) |

### Dark Theme Variables

These variables are defined in the `.dark-side` selector and apply when the dark theme is active:

| Variable | Description |
|----------|-------------|
| `--default-background` | Default background color (#1e1f22) |
| `--default-color` | Default text color (#dbdfe7) |
| `--default-color-hover` | Default hover text color (#dbdfe7) |
| `--default-background-disabled` | Default disabled background color (#343637) |
| `--default-color-disabled` | Default disabled text color (#54565a) |
| `--body-background` | Body background color (same as default background) |
| `--body-color` | Body text color (same as default color) |
| `--body-color-secondary` | Secondary body text color (#c0c0c0) |
| `--border-color` | Border color for elements (#4a4d51) |
| `--link-color` | Link text color (#5a87cb) |
| `--link-color-hover` | Link hover text color (#0056B3FF) |
| `--selected-row-background` | Background for selected rows (#26282e) |
| `--selected-item-background` | Background for selected items (#2e436e) |

## Basic Styling

The file also applies basic styling to the `body` element:

```css
body {
    background-color: var(--body-background);
    color: var(--body-color);
}
```

## Usage

These variables are used throughout the Metro UI framework to maintain consistent styling. You can also use them in your custom styles to ensure your components match the Metro UI design language.

### Example: Using Theme Variables in Custom Components

```css
.my-custom-component {
    background-color: var(--default-background);
    color: var(--default-color);
    border: 1px solid var(--border-color);
}

.my-custom-component.selected {
    background-color: var(--selected-item-background);
}
```

### Switching to Dark Theme

To enable the dark theme, add the `dark-side` class to the `html` or `body` element:

```html
<body class="dark-side">
    <!-- Your content here -->
</body>
```