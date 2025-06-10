# Sidenav M3

## Description

The Sidenav M3 component provides a Metro 3 style side navigation menu for your application. It's a CSS-only component that creates a vertical navigation menu with support for titles, icons, dropdown menus, and visual effects.

## Dependencies

- Metro UI CSS core styles

## Usage

### Basic Usage

```html
<ul class="sidenav-m3">
    <li class="title">Navigation</li>
    <li>
        <a href="#">
            <span class="icon mif-home"></span>
            Home
        </a>
    </li>
    <li>
        <a href="#">
            <span class="icon mif-cog"></span>
            Settings
        </a>
    </li>
    <li>
        <a href="#">
            <span class="icon mif-user"></span>
            Profile
        </a>
    </li>
</ul>
```

### With Active Item

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
            <span class="icon mif-cog"></span>
            Settings
        </a>
        <ul class="d-menu" data-role="dropdown">
            <li><a href="#">General</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Privacy</a></li>
        </ul>
    </li>
</ul>
```

### With Stick Effect and Background Color

```html
<ul class="sidenav-m3">
    <li class="title">Navigation</li>
    <li class="stick-left bg-green">
        <a href="#">
            <span class="icon mif-home"></span>
            Home
        </a>
    </li>
    <li class="stick-right bg-red">
        <a href="#">
            <span class="icon mif-cog"></span>
            Settings
        </a>
    </li>
</ul>
```

### With Disabled Item

```html
<ul class="sidenav-m3">
    <li class="title">Navigation</li>
    <li>
        <a href="#">
            <span class="icon mif-home"></span>
            Home
        </a>
    </li>
    <li class="disabled">
        <a href="#">
            <span class="icon mif-cog"></span>
            Settings
        </a>
    </li>
</ul>
```

### With RTL Support

```html
<ul class="sidenav-m3" dir="rtl">
    <li class="title">التنقل</li>
    <li>
        <a href="#">
            <span class="icon mif-home"></span>
            الصفحة الرئيسية
        </a>
    </li>
    <li>
        <a href="#">
            <span class="icon mif-cog"></span>
            الإعدادات
        </a>
    </li>
</ul>
```

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--border-color` | Inherited from theme | Inherited from theme | The color of borders between menu items |

### Example of Custom Styling

```css
/* Custom styling example */
.my-sidenav {
    --border-color: #ff5252;
}
```

## Available CSS Classes

### Base Classes
- `.sidenav-m3` - The main container class for the sidenav component

### Item Classes
- `.title` - Defines a title section in the navigation
- `.active` - Marks an item as active/selected
- `.disabled` - Marks an item as disabled
- `.stick-left` - Adds a visual stick effect on the left side of an item
- `.stick-right` - Adds a visual stick effect on the right side of an item

### Element Classes
- `.icon` - Used for icons within navigation items
- `.dropdown-toggle` - Used for items that have dropdown menus
- `.d-menu` - Used for dropdown menus

### Background Color Classes
You can add background color classes to items with stick effects:
- `.bg-red`, `.bg-green`, `.bg-blue`, etc. - Adds background color to the stick effect

## Complete Example

```html
<div style="height: 500px;">
    <ul class="sidenav-m3">
        <li class="title">My Application</li>
        <li class="active">
            <a href="#">
                <span class="mif-home icon"></span>
                Dashboard
            </a>
        </li>
        <li class="stick-right bg-red">
            <a href="#">
                <span class="mif-cog icon"></span>
                Settings
            </a>
        </li>
        <li class="stick-left bg-green">
            <a class="dropdown-toggle" href="#">
                <span class="mif-tree icon"></span>
                Categories
            </a>
            <ul class="d-menu" data-role="dropdown">
                <li><a href="#"><span class="mif-vpn-lock icon"></span> Category 1</a></li>
                <li><a href="#">Category 2</a></li>
                <li><a href="#">Category 3</a></li>
                <li class="disabled"><a href="#">Category 4 (Disabled)</a></li>
            </ul>
        </li>
        <li><a href="#">Regular Item</a></li>
        <li class="disabled"><a href="#">Disabled Item</a></li>

        <li class="title">Additional Options</li>
        <li><a href="#">Help</a></li>
        <li><a href="#">About</a></li>
    </ul>
</div>
```
