# Remote Table

The Remote Table component provides a powerful way to display tabular data fetched from remote APIs. It includes built-in support for pagination, sorting, searching, and customizable data rendering with flexible field selection and column configuration.

## Dependencies

The Remote Table component requires the following dependencies to function properly:
- Table component (automatically imported)
- Pagination component (automatically imported)

## Usage

### Basic Usage

```html
<div data-role="remote-table"
     data-url="https://api.example.com/data"
     data-key-data="items">
</div>
```

### Advanced Configuration

```html
<div data-role="remote-table"
     data-caption="Products"
     data-url="https://dummyjson.com/products"
     data-url-search="https://dummyjson.com/products/search"
     data-key-offset="skip"
     data-key-limit="limit"
     data-key-data="products"
     data-key-total="total"
     data-key-sort="sortBy"
     data-key-order="order"
     data-key-search="q"
     data-fields="id, title, price, discountPercentage"
     data-sortable-fields="id, title, price, discountPercentage"
     data-col-size="30,,150,150"
     data-captions="ID, Title, Price, Discount"
     data-sort="id"
     data-cls-table="table-border striped row-hover responsive-sm"
     data-cls-pagination="mt-4 d-flex flex-justify-center"
     data-on-draw-cell="drawCell">
</div>
```

### Using External Controls

```html
<div class="d-flex flex-row gap-2">
    <input type="text" id="search">
    <select id="rows"></select>
</div>

<div data-role="remote-table"
     data-url="https://api.example.com/data"
     data-key-data="items"
     data-search-control="#search"
     data-rows-count-control="#rows"
     data-on-draw-cell="drawCell">
</div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `caption` | string | "" | Table caption text |
| `url` | string | "" | Primary API endpoint URL |
| `urlSearch` | string | "" | Search API endpoint URL (optional) |
| `method` | string | "GET" | HTTP method for API requests |
| `limit` | number | 10 | Number of records per page |
| `offset` | number | 0 | Starting offset for pagination |
| `fields` | string | "" | Comma-separated list of fields to display |
| `sortableFields` | string | "" | Comma-separated list of sortable fields |
| `colSize` | string | "" | Comma-separated list of column widths |
| `sort` | string | "" | Default sort field |
| `sortOrder` | string | "asc" | Default sort order (asc/desc) |
| `captions` | string | null | Comma-separated list of column headers |
| `keyLimit` | string | "" | API parameter name for limit |
| `keyOffset` | string | "" | API parameter name for offset |
| `keyTotal` | string | "" | API response key for total count |
| `keyData` | string | "" | API response key for data array |
| `keySort` | string | "" | API parameter name for sort field |
| `keyOrder` | string | "" | API parameter name for sort order |
| `keySearch` | string | "q" | API parameter name for search query |
| `shortPagination` | boolean | false | Use short pagination (prev/next only) |
| `rows` | number | 10 | Initial rows per page |
| `rowsSteps` | string | "10,25,50,100" | Available rows per page options |
| `showServiceBlock` | boolean | true | Show service controls block |
| `quickSearch` | boolean | true | Show search input |
| `selectOrder` | boolean | true | Show sort order selector |
| `selectCount` | boolean | true | Show rows count selector |
| `showPagination` | boolean | true | Show pagination controls |
| `params` | object | null | Additional API parameters |
| `searchControl` | string | null | External search control selector |
| `rowsCountControl` | string | null | External rows count control selector |
| `searchThreshold` | number | 3 | Minimum characters to trigger search |
| `rowsLabel` | string | "" | Label for rows count selector |
| `searchLabel` | string | "" | Label for search input |
| `clsTable` | string | "" | Additional CSS classes for table |
| `clsRow` | string | "" | Additional CSS classes for rows |
| `clsCell` | string | "" | Additional CSS classes for cells |
| `clsHead` | string | "" | Additional CSS classes for header |
| `clsPagination` | string | "" | Additional CSS classes for pagination |

## API Methods

+ `addParam(key, value)` - Add a single parameter to API requests.
+ `addParams(params)` - Add multiple parameters to API requests.
+ `clearParams()` - Clear all additional parameters.
+ `load(append)` - Reload data from the API.
+ `destroy()` - Remove the component and clean up.

#### Example of Method Usage

```javascript
const table = Metro.getPlugin('#myTable', 'remote-table');
table.addParam('category', 'electronics');
table.load();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onBeforeLoad` | Fired before loading data, receives URL and component instance |
| `onLoad` | Fired after loading data, receives response data |
| `onDrawRow` | Fired when drawing each table row, receives row element, entry data, and index |
| `onDrawCell` | Fired when drawing each table cell, receives cell element, value, field name, entry data, and index |
| `onDrawHeadCell` | Fired when drawing each header cell, receives cell element, caption, field name, index, sortable flag, sort status, and sort order |
| `onTableCreate` | Fired when the table component is created |

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--remote-table-order-block-size` | 200px | 200px | Width of the sort order block |
| `--remote-table-count-block-size` | 140px | 140px | Width of the rows count block |

### Example of Custom Styling

```css
/* Custom styling example */
#my-table {
    --remote-table-order-block-size: 250px;
    --remote-table-count-block-size: 160px;
}
```

## Available CSS Classes

### Base Classes
- `.remote-table` - Main component container
- `.table-component` - Table component wrapper
- `.service-block` - Controls container
- `.search-block` - Search input container
- `.count-block` - Rows count selector container
- `.order-block` - Sort order selector container
- `.table-pagination` - Pagination container

### Table Classes
- `.table-header` - Header row
- `.table-row` - Data row
- `.head-cell-{field}` - Header cell for specific field
- `.data-cell-{field}` - Data cell for specific field
- `.sortable-column` - Sortable column header
- `.sort-asc` - Ascending sort indicator
- `.sort-desc` - Descending sort indicator

### Pagination Classes
- `.short-pagination` - Short pagination container
- `.page-link` - Pagination link
- `.prev-page` - Previous page button
- `.next-page` - Next page button

## Additional Notes

- The component automatically handles API parameter mapping based on the configured key names
- Search functionality includes debouncing to prevent excessive API calls
- Column sorting is handled automatically for fields specified in `sortableFields`
- The component supports both full pagination and short pagination modes
- External controls can be used to override the built-in search and rows count selectors

## Best Practices

- Always specify the `keyData` parameter to indicate which property contains the data array
- Use `keyTotal` for proper pagination when your API supports it
- Implement the `onDrawCell` callback for custom cell formatting
- Use `fields` parameter to control which columns are displayed
- Set appropriate `searchThreshold` to balance user experience and API load
- Use external controls when you need custom styling or positioning of search and count selectors
- Always handle API errors gracefully in your backend implementation