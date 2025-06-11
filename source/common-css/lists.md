# List Utilities (lists.less)

This file provides a comprehensive set of utility classes for styling and formatting lists in Metro UI.

## Overview

The `lists.less` file defines CSS classes for various list styles, from simple utility classes to complex list layouts with avatars, titles, and descriptions. These utilities make it easy to create visually appealing and functional lists for different purposes.

## CSS Variables

| Variable | Light Theme | Dark Theme | Description |
|----------|-------------|------------|-------------|
| `--step-list-number-color` | #757575 | #ffedbc | Color of the numbers in step lists |

## List Types

### Step List

A numbered list with a vertical line connecting the items, useful for displaying steps in a process:

```html
<ol class="step-list">
    <li>First step in the process</li>
    <li>Second step in the process</li>
    <li>Third step in the process</li>
</ol>
```

### Custom List Marker

A list where you can define custom markers for each item using the `data-marker` attribute:

```html
<ul class="custom-list-marker">
    <li data-marker="→">Item with arrow marker</li>
    <li data-marker="✓">Item with checkmark marker</li>
    <li data-marker="•">Item with bullet marker</li>
</ul>
```

### Items List

A list for displaying items with optional avatars and secondary information:

```html
<ul class="items-list">
    <li>
        <img class="avatar" src="avatar.jpg" alt="User Avatar">
        <span class="label">Primary Text</span>
        <span class="second-label">Secondary Text</span>
        <span class="second-action">⋮</span>
    </li>
    <li>
        <img class="avatar" src="avatar2.jpg" alt="User Avatar">
        <span class="label">Another Item</span>
        <span class="second-label">More information</span>
        <span class="second-action">⋮</span>
    </li>
</ul>
```

### Feed List

An extended version of the items list, designed for content feeds with larger avatars/images:

```html
<div class="feed-list">
    <span class="title">Today</span>
    <div class="item">
        <img class="avatar" src="image1.jpg" alt="Content Image">
        <span class="label">Article Title</span>
        <span class="second-label">Article summary or description goes here</span>
    </div>
    <span class="title">Yesterday</span>
    <div class="item">
        <img class="avatar" src="image2.jpg" alt="Content Image">
        <span class="label">Another Article</span>
        <span class="second-label">Another summary or description</span>
    </div>
</div>
```

### Group List

A simple list with borders between items, can be horizontal or vertical:

```html
<!-- Vertical Group List -->
<ul class="group-list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<!-- Horizontal Group List -->
<ul class="group-list horizontal">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

### Inline List

A list where items are displayed inline (horizontally):

```html
<ul class="inline-list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

### Unstyled List

A list with no bullets or numbers:

```html
<ul class="unstyled-list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

## Ordered List Styles

The file provides several style variants for ordered lists:

| Class | Description |
|-------|-------------|
| `.decimal` | Standard decimal numbering (1, 2, 3) |
| `.roman-upper` | Uppercase Roman numerals (I, II, III) |
| `.roman-lower` | Lowercase Roman numerals (i, ii, iii) |
| `.alpha-upper` | Uppercase letters (A, B, C) |
| `.alpha-lower` | Lowercase letters (a, b, c) |
| `.latin-upper` | Uppercase Latin letters (A, B, C) |
| `.latin-lower` | Lowercase Latin letters (a, b, c) |

Example:
```html
<ol class="roman-upper">
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```

## Additional Utilities

| Class | Description |
|-------|-------------|
| `.no-style` | Removes all list styling (bullets, numbers, indentation) |

## Detailed Components

### Items List and Feed List Components

Both the `.items-list` and `.feed-list` support these components:

| Component | Description |
|-----------|-------------|
| `.avatar` | An image or icon representing the list item |
| `.label` | Primary text for the list item |
| `.second-label` | Secondary text for the list item (smaller, lighter color) |
| `.second-action` | An action button/icon positioned at the right side |
| `.title` (feed-list only) | A section header for grouping list items |

### Feed List Image Positioning

The `.feed-list` supports positioning the image/avatar on the right side:

```html
<div class="feed-list">
    <div class="item">
        <img class="avatar on-right" src="image.jpg" alt="Content Image">
        <span class="label">Article Title</span>
        <span class="second-label">Description with image on the right</span>
    </div>
</div>
```

## CSS Properties

### Step List

```css
.step-list {
    margin: 0 0 0 3em;
    padding: 0;
    list-style-type: none;
    counter-reset: li;
}

.step-list > li {
    border-left: 1px var(--border-color) solid;
    position: relative;
    padding: 0 1rem;
    margin: 1rem;
    vertical-align: top;
}

.step-list > li::before {
    position: absolute;
    content: counter(li);
    counter-increment: li;
    font-size: 2rem;
    color: var(--step-list-number-color);
    left: -.5rem;
    top: 0;
    margin-left: -2em;
    width: 1.8em;
    text-align: right;
}
```

## Usage Examples

### Step List for a Process

```html
<ol class="step-list">
    <li>Create an account</li>
    <li>Set up your profile</li>
    <li>Connect with friends</li>
    <li>Start sharing content</li>
</ol>
```

### Contact List with Items List

```html
<ul class="items-list">
    <li>
        <img class="avatar" src="john.jpg" alt="John's Avatar">
        <span class="label">John Doe</span>
        <span class="second-label">Software Developer</span>
        <span class="second-action">📞</span>
    </li>
    <li>
        <img class="avatar" src="jane.jpg" alt="Jane's Avatar">
        <span class="label">Jane Smith</span>
        <span class="second-label">UX Designer</span>
        <span class="second-action">📞</span>
    </li>
</ul>
```

### News Feed with Feed List

```html
<div class="feed-list">
    <span class="title">Breaking News</span>
    <div class="item">
        <img class="avatar" src="news1.jpg" alt="News Image">
        <span class="label">Major Discovery Announced</span>
        <span class="second-label">Scientists have made a breakthrough in quantum computing...</span>
    </div>
    <div class="item">
        <img class="avatar" src="news2.jpg" alt="News Image">
        <span class="label">New Policy Implemented</span>
        <span class="second-label">The government has announced a new environmental policy...</span>
    </div>
    <span class="title">Earlier This Week</span>
    <div class="item">
        <img class="avatar" src="news3.jpg" alt="News Image">
        <span class="label">Sports Team Wins Championship</span>
        <span class="second-label">After a thrilling match, the local team has secured the title...</span>
    </div>
</div>
```

### Navigation with Group List

```html
<ul class="group-list horizontal">
    <li>Home</li>
    <li>Products</li>
    <li>Services</li>
    <li>About</li>
    <li>Contact</li>
</ul>
```

## Best Practices

1. **Choose the Right List Type**: Select the appropriate list type based on your content and design needs:
   - Use `.step-list` for sequential processes or instructions
   - Use `.items-list` for simple item listings with optional avatars
   - Use `.feed-list` for content feeds with images and descriptions
   - Use `.group-list` for simple grouped items, especially in navigation

2. **Accessibility**: Ensure that lists maintain proper semantic structure:
   - Use `<ol>` for ordered lists (steps, rankings, etc.)
   - Use `<ul>` for unordered lists (items, options, etc.)
   - Provide proper alt text for images in `.avatar` elements

3. **Responsive Design**: Consider how lists will display on different screen sizes:
   - `.group-list.horizontal` may need to revert to vertical on small screens
   - Images in `.feed-list` may need size adjustments on mobile

4. **Visual Hierarchy**: Use the primary and secondary labels to establish clear visual hierarchy:
   - Keep `.label` text concise and descriptive
   - Use `.second-label` for supporting information
   - Group related items under `.title` in feed lists