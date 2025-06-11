# Print Utilities (print.less)

This file provides utility classes for controlling how elements appear when a page is printed in Metro UI.

## Overview

The `print.less` file defines CSS classes that only apply when the page is being printed. These utilities allow you to create print-friendly versions of your web pages by showing, hiding, or modifying elements specifically for print output.

## Print-Specific Utilities

All classes in this file are wrapped in a `@media print` query, meaning they only take effect when printing.

### Display Utilities

Control how elements are displayed in print:

| Class | Description |
|-------|-------------|
| `.d-none-print` | Hides an element when printing |
| `.d-block-print` | Displays an element as a block when printing |
| `.d-inline-print` | Displays an element as inline when printing |
| `.d-inline-block-print` | Displays an element as inline-block when printing |
| `.d-table-print` | Displays an element as a table when printing |
| `.d-table-row-print` | Displays an element as a table row when printing |
| `.d-table-cell-print` | Displays an element as a table cell when printing |
| `.d-flex-print` | Displays an element as a flex container when printing |
| `.d-inline-flex-print` | Displays an element as an inline flex container when printing |

### Visibility Utilities

Control element visibility without affecting layout:

| Class | Description |
|-------|-------------|
| `.visible-print` | Makes an element visible when printing |
| `.no-visible-print` | Hides an element (but preserves its space) when printing |

### Overflow Utilities

Control how content that overflows its container is handled in print:

| Class | Description |
|-------|-------------|
| `.overflow-print` | Sets `overflow: auto` when printing |
| `.no-overflow-print` | Sets `overflow: hidden` when printing |
| `.scroll-print` | Sets `overflow: scroll` when printing |
| `.scroll-x-print` | Sets `overflow-x: auto` when printing |
| `.scroll-y-print` | Sets `overflow-y: auto` when printing |
| `.no-scroll-print` | Sets `overflow: hidden` when printing |
| `.no-scroll-x-print` | Sets `overflow-x: hidden` when printing |
| `.no-scroll-y-print` | Sets `overflow-y: hidden` when printing |

### Text Wrapping Utilities

Control how text wraps in print:

| Class | Description |
|-------|-------------|
| `.wrap-print` | Sets `white-space: normal` when printing |
| `.no-wrap-print` | Sets `white-space: nowrap` when printing |

## Usage Examples

### Hiding Elements When Printing

```html
<!-- This navigation menu won't appear in print -->
<nav class="d-none-print">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

### Showing Elements Only in Print

```html
<!-- This message only appears when printing -->
<div class="d-none d-block-print">
    <p>Printed on: <script>document.write(new Date().toLocaleDateString())</script></p>
</div>
```

### Changing Display Mode for Print

```html
<!-- This flexbox layout becomes a block layout when printing -->
<div class="d-flex d-block-print">
    <div>Column 1</div>
    <div>Column 2</div>
</div>
```

### Controlling Text Wrapping in Print

```html
<!-- This text won't wrap when printed -->
<div class="no-wrap-print">
    This is a long line of text that will not wrap when printed, which can be useful for certain types of content like code snippets.
</div>
```

### Controlling Overflow in Print

```html
<!-- This content will be scrollable in print preview -->
<div class="scroll-print" style="height: 200px;">
    <p>Lots of content here...</p>
    <p>More content...</p>
    <!-- ... -->
</div>
```

## Best Practices

1. **Hide Non-Essential Elements**: Use `.d-none-print` to hide navigation menus, advertisements, and other elements that aren't necessary in print.

2. **Optimize for Print**: Consider using `.d-block-print` to linearize content that might be in multi-column layouts on screen.

3. **Print-Only Information**: Add print-specific information (like dates, page numbers, or URLs) using elements with `.d-none d-block-print`.

4. **Test Print Layouts**: Always test your print styles using the browser's print preview feature to ensure they work as expected.

5. **Consider Ink Usage**: Use print utilities to hide background colors and images that consume a lot of ink but aren't necessary for the printed content.

## Example: Creating a Print-Friendly Page

```html
<div class="container">
    <!-- Header: simplified for print -->
    <header>
        <h1>Company Name</h1>
        <!-- Navigation: hidden in print -->
        <nav class="d-none-print">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <!-- Main content: visible in both screen and print -->
    <main>
        <h2>Article Title</h2>
        <p>Article content...</p>
    </main>
    
    <!-- Sidebar: becomes a block in print instead of floating -->
    <aside class="float-right d-block-print">
        <h3>Related Information</h3>
        <p>Additional details...</p>
    </aside>
    
    <!-- Footer: simplified for print -->
    <footer>
        <p>Copyright information</p>
        <!-- Social media links: hidden in print -->
        <div class="d-none-print">
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
        </div>
        <!-- Print-only footer information -->
        <div class="d-none d-block-print">
            <p>Printed from: example.com/page</p>
            <p>Date: <script>document.write(new Date().toLocaleDateString())</script></p>
        </div>
    </footer>
</div>
```

## Notes

- These utilities only affect the printed version of the page and have no effect on how elements appear on screen.
- For more complex print layouts, consider combining these utilities with custom `@media print` CSS rules.
- Remember that browser print rendering can vary, so test your print styles across different browsers.