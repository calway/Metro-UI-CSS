# Calendar Picker Component

The Calendar Picker component provides an interactive date and time selection interface with a popup calendar. It allows users to select dates and optionally times in a user-friendly way.

## Usage

### Basic Usage

```html
<!-- Basic calendar picker -->
<input data-role="calendar-picker">

<!-- Calendar picker with label -->
<input data-role="calendar-picker" data-label="Select date">

<!-- Calendar picker with initial value -->
<input data-role="calendar-picker" data-value="2023-05-15">

<!-- Calendar picker with time selection -->
<input data-role="calendar-picker" data-show-time="true">
```

### Advanced Usage

```html
<!-- Calendar picker with custom format -->
<input data-role="calendar-picker" data-format="DD/MM/YYYY">

<!-- Calendar picker with min and max date constraints -->
<input data-role="calendar-picker" data-min-date="2023-01-01" data-max-date="2023-12-31">

<!-- Calendar picker with clear button -->
<input data-role="calendar-picker" data-clear-button="true">

<!-- Calendar picker in dialog mode -->
<input data-role="calendar-picker" data-dialog-mode="true">

<!-- Calendar picker with dialog point -->
<input data-role="calendar-picker" data-dialog-point="360">
```

## Plugin Parameters

The Calendar Picker component accepts the following parameters:

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `label` | String | `""` | Label text for the input |
| `value` | String | `""` | Initial value for the calendar picker |
| `nullValue` | Boolean | `true` | Allow empty value |
| `useNow` | Boolean | `false` | Use current date/time as default value |
| `prepend` | String | `""` | Content to prepend to the input |
| `dialogMode` | Boolean | `false` | Show calendar in dialog mode |
| `dialogPoint` | Number | `640` | Screen width breakpoint for switching to dialog mode |
| `dialogOverlay` | Boolean | `true` | Show overlay in dialog mode |
| `overlayColor` | String | `"#000000"` | Color of the overlay |
| `overlayAlpha` | Number | `0.5` | Opacity of the overlay |
| `size` | String | `"100%"` | Width of the component |
| `format` | String | `METRO_DATE_FORMAT` | Format for displaying the date |
| `inputFormat` | String | `null` | Format for parsing input date |
| `clearButton` | Boolean | `false` | Show clear button |
| `calendarButtonIcon` | String | `"📅"` | Icon for the calendar button |
| `clearButtonIcon` | String | `"❌"` | Icon for the clear button |
| `prevMonthIcon` | String | `"⯇"` | Icon for previous month button |
| `nextMonthIcon` | String | `"⯈"` | Icon for next month button |
| `prevYearIcon` | String | `"⯇"` | Icon for previous year button |
| `nextYearIcon` | String | `"⯈"` | Icon for next year button |
| `copyInlineStyles` | Boolean | `false` | Copy inline styles from input to container |
| `openMode` | String | `"auto"` | Mode for opening the calendar (`"auto"`, `"up"`) |
| `showTime` | Boolean | `false` | Show time picker |
| `initialTime` | String | `null` | Initial time value |
| `initialHours` | Number | `null` | Initial hours value |
| `initialMinutes` | Number | `null` | Initial minutes value |
| `wide` | Boolean | `false` | Use wide calendar view |
| `widePoint` | Number | `null` | Breakpoint for wide calendar view |
| `weekStart` | Number | `0` | First day of week (0 for Sunday) |
| `outside` | Boolean | `true` | Show days from previous/next months |
| `ripple` | Boolean | `false` | Enable ripple effect on day selection |
| `rippleColor` | String | `null` | Color for ripple effect |
| `exclude` | String | `null` | Dates to exclude from selection |
| `minDate` | String | `null` | Minimum selectable date |
| `maxDate` | String | `null` | Maximum selectable date |
| `yearsBefore` | Number | `100` | Number of years to show before current year |
| `yearsAfter` | Number | `100` | Number of years to show after current year |
| `special` | String | `null` | Special dates to highlight |
| `events` | String | `null` | Event dates to mark |
| `showWeekNumber` | Boolean | `false` | Show week numbers |

## API Methods

The Calendar Picker component provides the following API methods:

```javascript
// Get the component instance
const picker = Metro.getPlugin("#myCalendarPicker", "calendar-picker");
```

| Method | Parameters | Description |
| ------ | ---------- | ----------- |
| `val(value, format)` | `value`: Date string, `format`: Optional format | Set or get the current value |
| `clear()` | None | Clear the current value |
| `disable()` | None | Disable the calendar picker |
| `enable()` | None | Enable the calendar picker |
| `toggleState()` | None | Toggle between enabled and disabled states |
| `getTime(asString)` | `asString`: Boolean | Get the current time as array or string |

## Events

The Calendar Picker component triggers the following events:

| Event | Description |
| ----- | ----------- |
| `onDayClick` | Triggered when a day is clicked |
| `onCalendarPickerCreate` | Triggered when the calendar picker is created |
| `onCalendarShow` | Triggered when the calendar is shown |
| `onCalendarHide` | Triggered when the calendar is hidden |
| `onChange` | Triggered when the value changes |
| `onPickerChange` | Triggered when the picker value changes |
| `onMonthChange` | Triggered when the month changes |
| `onYearChange` | Triggered when the year changes |

## CSS Classes

The following CSS classes can be used to customize the appearance:

| Parameter | Description |
| --------- | ----------- |
| `clsPicker` | Class for the picker container |
| `clsInput` | Class for the input element |
| `clsPrepend` | Class for the prepend element |
| `clsLabel` | Class for the label element |
| `clsCalendar` | Class for the calendar element |
| `clsCalendarHeader` | Class for the calendar header |
| `clsCalendarContent` | Class for the calendar content |
| `clsCalendarMonths` | Class for the months view |
| `clsCalendarYears` | Class for the years view |
| `clsToday` | Class for the today button |
| `clsSelected` | Class for selected dates |
| `clsExcluded` | Class for excluded dates |
| `clsCalendarTime` | Class for the time component |
| `clsTime` | Class for the time element |
| `clsTimeHours` | Class for the hours element |
| `clsTimeMinutes` | Class for the minutes element |
| `clsTimeButton` | Class for time buttons |
| `clsTimeButtonPlus` | Class for the plus button |
| `clsTimeButtonMinus` | Class for the minus button |
| `clsOverlay` | Class for the dialog overlay |

## Styling with CSS Variables

The Calendar Picker component uses the following CSS variables:

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--zindex-absolute` | `1000` | `1000` | Z-index for the calendar popup |
| `--zindex-modal` | `2000` | `2000` | Z-index for the calendar in dialog mode |

### Example of Custom Styling

```css
/* Custom styling for calendar picker */
.my-calendar-picker {
  --zindex-absolute: 1000;
  --zindex-modal: 2000;
}

/* Custom styling for the calendar */
.my-calendar-picker .calendar {
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
```

## Accessibility

The Calendar Picker component includes proper semantics for improved accessibility:
- Proper labeling of input fields
- Keyboard navigation support
- Screen reader friendly structure

## Best Practices

1. Always provide a clear label for the calendar picker
2. Use appropriate date format for your target audience
3. Consider using dialog mode on mobile devices
4. Set reasonable min and max date constraints when applicable
5. Provide clear visual feedback for selected dates