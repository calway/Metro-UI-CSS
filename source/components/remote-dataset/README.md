# Remote Dataset

The Remote Dataset component provides a powerful way to display and interact with data fetched from remote APIs. It includes built-in support for pagination, sorting, searching, and customizable data rendering with a flexible service interface for controlling data display options.

## Dependencies

- Pagination component
- Select component

## Usage

### Basic Usage

```html
<div data-role="remote-dataset"
     data-url="https://api.example.com/data"
     data-key-data="items"
     data-on-draw-entry="drawEntry">
</div>
```

### Advanced Configuration

```html
<div data-role="remote-dataset"
     data-caption="Products:"
     data-url="https://dummyjson.com/products"
     data-url-search="https://dummyjson.com/products/search"
     data-key-offset="skip"
     data-key-data="products"
     data-key-limit="limit"
     data-key-total="total"
     data-key-sort="sortBy"
     data-key-order="order"
     data-key-search="q"
     data-cls-body="row gap-4 mt-4"
     data-cls-pagination="mt-4 d-flex flex-justify-center"
     data-sort="rating:desc"
     data-sort-rules="price:asc:Price Asc:<span class='mif-arrow-up'>,price:desc:Price Desc:<span class='mif-arrow-down'>,rating:desc:By rating:<span class='mif-star-empty'>"
     data-on-draw-entry="drawEntry"
     data-rows="6"
     data-rows-steps="6, 24, 48, 96, 192">
</div>
```

### Using External Controls

```html
<div class="d-flex flex-row gap-2">
    <input type="text" id="search">
    <select id="sorting"></select>
    <select id="rows"></select>
</div>

<div data-role="remote-dataset"
     data-url="https://api.example.com/data"
     data-key-data="items"
     data-search-control="#search"
     data-rows-count-control="#rows"
     data-sorting-control="#sorting"
     data-on-draw-entry="drawEntry">
</div>
```

### JavaScript Initialization

```javascript
const dataset = Metro.makePlugin("#element", "remote-dataset", {
    url: "https://api.example.com/data",
    keyData: "items",
    onDrawEntry: function(entry, index, body) {
        // Custom rendering logic
    }
});
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `caption` | string | "" | Caption text displayed above the dataset |
| `url` | string | "" | Primary URL for data fetching |
| `urlSearch` | string | "" | Alternative URL for search requests |
| `method` | string | "GET" | HTTP method for requests |
| `limit` | number | 10 | Number of items per page |
| `offset` | number | 0 | Starting offset for pagination |
| `sort` | string | "" | Default sort field and order (format: "field:order") |
| `keyLimit` | string | "" | URL parameter name for limit |
| `keyOffset` | string | "" | URL parameter name for offset |
| `keyTotal` | string | "" | Response key containing total items count |
| `keyData` | string | "" | Response key containing data array |
| `keySort` | string | "" | URL parameter name for sort field |
| `keyOrder` | string | "" | URL parameter name for sort order |
| `keySearch` | string | "q" | URL parameter name for search query |
| `shortPagination` | boolean | false | Use simplified pagination (prev/next only) |
| `rows` | number | 10 | Initial number of rows per page |
| `rowsSteps` | string | "10,25,50,100" | Available options for rows per page |
| `sortRules` | string | "" | Sorting options (format: "field:order:label:icon") |
| `showServiceBlock` | boolean | true | Show the service control block |
| `quickSearch` | boolean | true | Show search input |
| `selectOrder` | boolean | true | Show sort selection |
| `selectCount` | boolean | true | Show rows count selection |
| `showMore` | boolean | true | Show load more button |
| `showPagination` | boolean | true | Show pagination controls |
| `params` | object | null | Additional URL parameters |
| `searchControl` | string | null | Selector for external search control |
| `sortingControl` | string | null | Selector for external sorting control |
| `rowsCountControl` | string | null | Selector for external rows count control |
| `searchThreshold` | number | 3 | Minimum characters to trigger search |
| `sortLabel` | string | "" | Label for sort dropdown |
| `rowsLabel` | string | "" | Label for rows count dropdown |
| `searchLabel` | string | "" | Label for search input |
| `clsBody` | string | "" | CSS classes for dataset body |
| `clsPagination` | string | "" | CSS classes for pagination |
| `clsSearchBlock` | string | "" | CSS classes for search block |
| `clsOrderBlock` | string | "" | CSS classes for order block |
| `clsRowsCountBlock` | string | "" | CSS classes for rows count block |
| `clsServiceBlock` | string | "" | CSS classes for service block |

## API Methods

- `addParam(key, value)` - Add a single URL parameter for data requests.
- `addParams(params)` - Add multiple URL parameters from an object.
- `clearParams()` - Remove all custom URL parameters.
- `load(append)` - Reload data from the server. If append is true, new data will be appended to existing entries.
- `destroy()` - Remove the component and clean up resources.

### Example of Method Usage

```javascript
const dataset = Metro.getPlugin('#myDataset', 'remote-dataset');

// Add custom parameters
dataset.addParam('category', 'electronics');
dataset.addParams({
    'min-price': 100,
    'max-price': 500
});

// Reload data with new parameters
dataset.load();

// Clear parameters and reload
dataset.clearParams();
dataset.load();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onBeforeLoad` | Fired before data loading. Receives URL and component instance. Should return modified URL. |
| `onLoad` | Fired after data is loaded. Receives response data and should return processed data. |
| `onDrawEntry` | Fired for each data entry to render custom HTML. Receives entry, index, and body element. |
| `onDatasetCreate` | Fired when the component is fully initialized. |

### Event Usage Example

```javascript
function drawEntry(entry, index, body) {
    const html = `
        <div class="data-item">
            <h3>${entry.title}</h3>
            <p>${entry.description}</p>
        </div>
    `;
    $(body).append(html);
}

function beforeLoad(url, component) {
    console.log('Loading from:', url);
    return url + '&timestamp=' + Date.now();
}

function afterLoad(data) {
    console.log('Data loaded:', data);
    return data; // Return processed data
}
```

## Styling with CSS Variables

| Variable | Default | Description |
| -------- | ------- | ----------- |
| `--remote-dataset-gap` | 10px | Gap between service block elements |
| `--remote-dataset-order-block-size` | 200px | Width of the sorting dropdown block |
| `--remote-dataset-count-block-size` | 140px | Width of the rows count dropdown block |

### Example of Custom Styling

```css
#my-dataset {
    --remote-dataset-gap: 20px;
    --remote-dataset-order-block-size: 250px;
    --remote-dataset-count-block-size: 160px;
}
```

## Available CSS Classes

### Base Classes
- `.remote-dataset` - Main component container
- `.dataset-caption` - Caption text styling
- `.dataset-body` - Container for data entries
- `.dataset-pagination` - Pagination container
- `.dataset-load-more` - Load more button container

### Service Block Classes
- `.service-block` - Container for search, sort, and count controls
- `.search-block` - Search input container
- `.order-block` - Sort dropdown container  
- `.count-block` - Rows count dropdown container

### Pagination Classes
- `.short-pagination` - Simple prev/next pagination style
- `.page-link` - Individual page links
- `.prev-page` - Previous page button
- `.next-page` - Next page button

## Data Format Requirements

The remote API should return data in the following format:

```json
{
    "items": [],
    "total": 100,
    "limit": 10,
    "offset": 0
}
```

**Key Descriptions:**
- `items` - Array of data entries (key specified by keyData parameter)
- `total` - Total number of items (key specified by keyTotal parameter)  
- `limit` - Items per page (key specified by keyLimit parameter)
- `offset` - Current offset (key specified by keyOffset parameter)

## Best Practices

- Always implement the `onDrawEntry` callback to define how data entries should be rendered.
- Use appropriate `keyData`, `keyTotal`, `keyLimit`, and `keyOffset` parameters to match your API response structure.
- Implement proper error handling in your `onLoad` callback.
- Use external controls for better integration with your application's UI.
- Set appropriate `searchThreshold` to avoid excessive API calls during typing.
- Use `sortRules` to provide user-friendly sorting options with icons.
- Consider using `shortPagination` for mobile-friendly interfaces.
- Always validate and sanitize data in your `onDrawEntry` function.

## Additional Notes

- The component automatically handles URL construction with pagination, sorting, and search parameters.
- Search functionality includes debouncing to prevent excessive API calls.
- The component supports both full pagination and simple prev/next navigation.
- External controls can be used to integrate the dataset with your existing UI components.
- All service blocks (search, sort, count) can be individually hidden using the respective show* parameters.
- The component uses Metro UI's pagination component for full pagination functionality.