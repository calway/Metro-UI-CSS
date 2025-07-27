# Sidenav M3

Sidenav M3 is a Metro UI 3 sidebar navigation component. It provides a stylish navigation menu with support for icons, dropdown menus, and colored indicators on the sides of menu items.

## Usage

### Basic Usage

```html
<ul class="sidenav-m3">
    <li class="title">Navigation</li>
    <li class="active">
        <a href="#">
            <span class="icon mif-home"></span>
            Home
        </a>
    </li>
    <li>
        <a href="#">
            <span class="icon mif-user"></span>
            Profile
        </a>
    </li>
    <li>
        <a href="#">
            <span class="icon mif-cog"></span>
            Settings
        </a>
    </li>
</ul>
```

### With Colored Indicators

```html
<ul class="sidenav-m3">
    <li class="title">Navigation</li>
    <li class="stick-left stick-color-red active">
        <a href="#">
            <span class="icon mif-home"></span>
            Home
        </a>
    </li>
    <li class="stick-left stick-color-blue">
        <a href="#">
            <span class="icon mif-user"></span>
            Profile
        </a>
    </li>
    <li class="stick-left stick-color-green">
        <a href="#">
            <span class="icon mif-cog"></span>
            Settings
        </a>
    </li>
</ul>
```

### With Dropdown Menu

```html
<ul class="sidenav-m3">
    <li class="title">Navigation</li>
    <li>
        <a href="#" class="dropdown-toggle">
            <span class="icon mif-user"></span>
            User
            <span class="dropdown-caret"></span>
        </a>
        <ul class="d-menu" data-role="dropdown">
            <li><a href="#">Profile</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Logout</a></li>
        </ul>
    </li>
</ul>
```

## Styling with CSS Variables

### Layout Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--sidenav-m3-width` | 220px | 220px | Width of the sidenav |
| `--sidenav-m3-border-radius` | 4px | 4px | Border radius of menu items and indicators |

### Color Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--sidenav-m3-background` | #f6f6f6 | #2b2d30 | Background color of the sidenav |
| `--sidenav-m3-color` | #191919 | #dfe1e5 | Text color of menu items |
| `--sidenav-m3-icon-color` | #191919 | #dfe1e5 | Color of menu item icons |
| `--sidenav-m3-counter-color` | #191919 | #dfe1e5 | Color of counter text |
| `--sidenav-m3-background-hover` | #cecece | #43454a | Background color of menu items on hover |
| `--sidenav-m3-color-hover` | #0a0a0a | #ffffff | Text color of menu items on hover |
| `--sidenav-m3-background-active` | #68a3ff | #468cff | Background color of active menu items |
| `--sidenav-m3-color-active` | #ffffff | #ffffff | Text color of active menu items |

### Example of Custom Styling

```css
.my-sidenav {
    --sidenav-m3-width: 250px;
    --sidenav-m3-background: #e0e0e0;
    --sidenav-m3-background-active: #1ba1e2;
}
```

## Available CSS Classes

### Base Classes
- `.sidenav-m3` - Main component class

### Element Classes
- `.icon` - Applied to the icon element
- `.title` - Applied to the title element
- `.dropdown-caret` - Applied to the dropdown caret element

### Position Classes
- `.stick-left` - Adds a colored indicator to the left side of the menu item
- `.stick-right` - Adds a colored indicator to the right side of the menu item

### Color Classes
- `.stick-color-[color]` - Sets the color of the indicator, where [color] can be any of the standard Metro UI colors (red, green, blue, yellow, etc.)

### State Classes
- `.active` - Applied to the active menu item

## Best Practices

- Use meaningful icons that clearly represent the menu item's purpose
- Use colored indicators (sticks) to categorize menu items or highlight important sections
- Keep the menu structure simple and organized with clear hierarchy
- Use the title class to create section headers within the menu
- Use consistent colors for indicators to create a cohesive visual language
- Consider using right-side indicators for items that represent outgoing actions