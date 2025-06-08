# Horizontal Menu Component

The Horizontal Menu (h-menu) component provides a horizontal navigation menu with support for dropdown items and mega menus.

## Dependencies

None - this is a CSS-only component. However, to enable dropdown functionality, you'll need to use it with Metro UI's dropdown component.

## Usage

### Basic Menu

```html
<ul class="h-menu">
    <li>
        <a href="#">Home</a>
    </li>
    <li>
        <a href="#" class="dropdown-toggle">Products</a>
        <ul class="d-menu">
            <li><a href="#">Product 1</a></li>
            <li><a href="#">Product 2</a></li>
            <li><a href="#">Product 3</a></li>
        </ul>
    </li>
    <li>
        <a href="#">About</a>
    </li>
    <li>
        <a href="#">Contact</a>
    </li>
</ul>
```

### No Hover Effect

Disable the hover effect by adding the `no-hover` class to the menu:

```html
<ul class="h-menu no-hover">
    <li><a href="#">Home</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
</ul>
```

### Large Menu

Create a larger menu by adding the `large` class:

```html
<ul class="h-menu large">
    <li><a href="#">Home</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
</ul>
```

### Mega Menu

Create a mega menu by adding the `mega` class to the menu and including a `mega-container` for the content:

```html
<ul class="h-menu mega">
    <li>
        <a href="#">Home</a>
    </li>
    <li>
        <a href="#" class="dropdown-toggle">Products</a>
        <div class="mega-container">
            <div class="row">
                <div class="cell-4">
                    <h3>Category 1</h3>
                    <ul>
                        <li><a href="#">Product 1.1</a></li>
                        <li><a href="#">Product 1.2</a></li>
                        <li><a href="#">Product 1.3</a></li>
                    </ul>
                </div>
                <div class="cell-4">
                    <h3>Category 2</h3>
                    <ul>
                        <li><a href="#">Product 2.1</a></li>
                        <li><a href="#">Product 2.2</a></li>
                        <li><a href="#">Product 2.3</a></li>
                    </ul>
                </div>
                <div class="cell-4">
                    <h3>Category 3</h3>
                    <ul>
                        <li><a href="#">Product 3.1</a></li>
                        <li><a href="#">Product 3.2</a></li>
                        <li><a href="#">Product 3.3</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </li>
    <li>
        <a href="#">About</a>
    </li>
</ul>
```

### Custom Styled Menu

```html
<style>
    .custom-h-menu {
        background-color: #3b5998;
        color: white;
    }
    
    .custom-h-menu > li:hover {
        background-color: #4c70ba;
    }
    
    .custom-h-menu .d-menu {
        background-color: #3b5998;
        color: white;
        border-color: #2d4373;
    }
    
    .custom-h-menu .d-menu li:hover {
        background-color: #4c70ba;
    }
</style>

<ul class="h-menu custom-h-menu">
    <li>
        <a href="#">Home</a>
    </li>
    <li>
        <a href="#" class="dropdown-toggle">Products</a>
        <ul class="d-menu">
            <li><a href="#">Hardware</a></li>
            <li><a href="#">Software</a></li>
            <li><a href="#">Services</a></li>
        </ul>
    </li>
    <li>
        <a href="#">About Us</a>
    </li>
    <li>
        <a href="#">Contact</a>
    </li>
</ul>
```

## Plugin Parameters

This is a CSS-only component and does not have plugin parameters.

## API Methods

This is a CSS-only component and does not have API methods.

## Events

This is a CSS-only component and does not have events.

## Styling with CSS Variables

The h-menu component uses LESS variables internally rather than CSS custom properties. The styling is based on the following LESS variables:

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `@white` | #ffffff | - | Background color of the menu |
| `@dark` | #191919 | - | Text color of the menu |
| `@hoverBackground` | #f0f0f0 | - | Background color on hover |
| `@zindex-dropdown` | 1000 | - | Z-index for dropdown menus |

### Example of Custom Styling

Since the component doesn't use CSS variables directly, you can customize it using standard CSS:

```css
.custom-h-menu {
    background-color: #3b5998;
    color: white;
}

.custom-h-menu > li:hover {
    background-color: #4c70ba;
}

.custom-h-menu .d-menu {
    background-color: #3b5998;
    color: white;
    border-color: #2d4373;
}

.custom-h-menu .d-menu li:hover {
    background-color: #4c70ba;
}
```

## Available CSS Classes

### Base Classes
- `.h-menu` - The main horizontal menu container

### Modifiers
- `.no-hover` - Disables the hover effect on menu items
- `.large` - Creates a larger menu with bigger font size and padding
- `.mega` - Enables mega menu functionality

### Structure Classes
- `.mega-container` - Container for mega menu content (used with `.h-menu.mega`)
- `.dropdown-toggle` - Applied to links that have dropdown menus

## JavaScript Integration

While the h-menu component itself doesn't include JavaScript functionality, you'll typically need to use it with Metro UI's dropdown component to handle the opening and closing of dropdown menus:

```html
<script>
    // Initialize dropdowns for the menu
    Metro.makePlugin(document.querySelectorAll('.h-menu .dropdown-toggle'), 'dropdown');
</script>
```

This initializes the dropdown functionality for all dropdown toggles within the h-menu.