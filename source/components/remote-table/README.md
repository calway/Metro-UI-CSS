# Remote Table

A powerful component for displaying data from remote sources with built-in pagination, sorting, searching, and customizable rendering. The Remote Table component automatically handles API calls, data loading, and provides a rich user interface for data interaction.

## Dependencies

- Hooks (for debounced search)
- Metro Pagination component

## Usage

### Basic Usage

```html
<div data-role="remote-table"
     data-url="https://api.example.com/data"
     data-key-data="items"
     data-key-total="total">
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
     data-sort-order="asc"
     data-limit="10"
     data-rows-steps="10,25,50,100"
     data-on-draw-cell="customCellRenderer"
     data-cls-table="table-border striped row-hover"
     data-cls-pagination="mt-4 d-flex flex-justify-center">
</div>
```

### JavaScript Initialization

```javascript
const table = Metro.makePlugin("#my-table", "remote-table", {
    url: "https://api.example.com/data",
    keyData: "items",
    keyTotal: "total",
    onLoad: function(data) {
        console.log("Data loaded:", data);
        return data;
    }
});
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `caption` | string | "" | Table caption text |
| `url` | string | "" | Primary URL for data loading |
| `urlSearch` | string | "" | URL for search requests (if different from main URL) |
| `method` | string | "GET" | HTTP method for requests |
| `limit` | number | 10 | Number of records per page |
| `offset` | number | 0 | Starting offset for pagination |
| `fields` | string | "" | Comma-separated list of fields to display |
| `sortableFields` | string | "" | Comma-separated list of sortable fields |
| `colSize` | string | "" | Comma-separated list of column widths |
| `sort` | string | "" | Default sort field |
| `sortOrder` | string | "asc" | Default sort order ("asc" or "desc") |
| `captions` | array | null | Custom column headers |
| `keyLimit` | string | "" | URL parameter name for limit |
| `keyOffset` | string | "" | URL parameter name for offset |
| `keyTotal` | string | "" | Response key containing total count |
| `keyData` | string | "" | Response key containing data array |
| `keySort` | string | "" | URL parameter name for sort field |
| `keyOrder` | string | "" | URL parameter name for sort order |
| `keySearch` | string | "q" | URL parameter name for search query |
| `shortPagination` | boolean | false | Use simple prev/next pagination |
| `rows` | number | 10 | Default rows per page |
| `rowsSteps` | string | "10,25,50,100" | Available rows per page options |
| `showServiceBlock` | boolean | true | Show search and controls block |
| `quickSearch` | boolean | true | Enable quick search input |
| `selectOrder` | boolean | true | Show sort order selector |
| `selectCount` | boolean | true | Show rows count selector |
| `showPagination` | boolean | true | Show pagination controls |
| `params` | object | null | Additional URL parameters |
| `clsTable` | string | "" | Additional CSS classes for table |
| `clsRow` | string | "" | Additional CSS classes for rows |
| `clsCell` | string | "" | Additional CSS classes for cells |
| `clsHead` | string | "" | Additional CSS classes for header |
| `clsPagination` | string | "" | Additional CSS classes for pagination |

## API Methods

+ `addParam(key, value)` - Adds a single parameter to the request URL.
+ `addParams(params)` - Adds multiple parameters to the request URL.
+ `clearParams()` - Clears all additional parameters.
+ `load(append)` - Manually triggers data loading from the remote source.
+ `destroy()` - Destroys the component and removes it from DOM.

#### Example of Method Usage

```javascript
const table = Metro.getPlugin('#my-table', 'remote-table');

// Add single parameter
table.addParam('category', 'electronics');

// Add multiple parameters
table.addParams({
    category: 'electronics',
    minPrice: 100,
    maxPrice: 500
});

// Clear all parameters
table.clearParams();

// Reload data
table.load();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onBeforeLoad` | Called before making the API request. Receives URL and can modify it. |
| `onLoad` | Called after receiving data from API. Can transform the response data. |
| `onDrawRow` | Called when drawing each table row. Receives row element, data, and index. |
| `onDrawCell` | Called when drawing each table cell. Receives cell element, value, field name, record, and index. |
| `onDrawHeadCell` | Called when drawing each header cell. Receives cell element and metadata. |
| `onTableCreate` | Called when the table component is fully created. |

### Event Usage Examples

```javascript
// Transform data before display
function onLoad(data) {
    // Modify or validate data
    data.products = data.products.map(item => ({
        ...item,
        formattedPrice: `$${item.price.toFixed(2)}`
    }));
    return data;
}

// Custom cell rendering
function drawCell(cell, value, fieldName, record, index) {
    if (fieldName === 'price') {
        cell.innerHTML = `<span class="${value > 100 ? 'fg-red' : 'fg-green'}">$${value}</span>`;
    }
    if (fieldName === 'status') {
        cell.innerHTML = `<span class="badge ${value === 'active' ? 'bg-green' : 'bg-gray'}">${value}</span>`;
    }
}

// Custom row styling
function drawRow(row, data, index) {
    if (data.featured) {
        row.addClass('bg-light');
    }
}
```

## Styling with CSS Variables

The Remote Table component uses minimal custom CSS variables and relies primarily on Metro UI's table styling system.

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| N/A | N/A | N/A | Component uses Metro UI table variables |

### Example of Custom Styling

```css
/* Custom table styling */
.remote-table .table {
    --table-border-color: #e0e0e0;
    --table-header-bg: #f5f5f5;
}

/* Custom search block styling */
.remote-table .search-block {
    margin-bottom: 20px;
    padding: 15px;
    background: #f9f9f9;
    border-radius: 4px;
}

/* Custom cell styling */
.remote-table .data-cell-price {
    text-align: right;
    font-weight: bold;
}

.remote-table .data-cell-id {
    text-align: center;
    font-family: monospace;
}
```

## Available CSS Classes

### Base Classes
- `.remote-table` - Main component container
- `.table-component` - Applied to the main element
- `.table-entry` - Container for table and controls
- `.search-block` - Container for search and control inputs
- `.table-pagination` - Pagination container
- `.short-pagination` - Simple prev/next pagination style

### Data Classes
- `.data-cell-{fieldname}` - Applied to each data cell based on field name
- `.head-cell-{fieldname}` - Applied to each header cell based on field name
- `.sortable-column` - Applied to sortable header cells
- `.sort-asc` / `.sort-desc` - Applied to currently sorted columns

### Service Classes
- `.table-header` - Header row class
- `.table-row` - Data row class

## Expected API Response Format

The remote API should return data in the following format:

```json
{
    "total": 100,
    "products": [
        {
            "id": 1,
            "title": "Product Name",
            "price": 29.99,
            "category": "Electronics"
        }
    ]
}
```

Where:
- `total` - Total number of records (for pagination)
- `products` - Array of data records (key name configurable via `keyData`)

## URL Parameters

The component automatically adds these parameters to API requests:

- `limit` - Number of records requested
- `skip`/`offset` - Starting position for pagination
- `sortBy` - Field to sort by
- `order` - Sort direction ("asc" or "desc")
- `q` - Search query (when using search)

Parameter names are configurable via the `key*` options.

## Additional Notes

- The component automatically handles debounced search with a 300ms delay
- Search queries must be at least 3 characters long to trigger a request
- The component supports both full pagination and simple prev/next navigation
- Column widths can be set using the `colSize` parameter with comma-separated values
- Empty values in `colSize` will use automatic width for those columns
- The component integrates with Metro UI's theme system for light/dark mode support

## Best Practices

- Always specify `keyData` and `keyTotal` parameters to match your API response structure
- Use `onLoad` event to transform or validate data before display
- Implement proper error handling in your API endpoints
- Use `onDrawCell` for custom formatting rather than modifying data directly
- Set appropriate `limit` values based on your data size and user experience needs
- Use `urlSearch` parameter if your search endpoint differs from the main data endpoint
- Implement server-side pagination, sorting, and searching for better performance with large datasets