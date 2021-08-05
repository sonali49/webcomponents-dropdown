# dropdown-integrated-component



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type           | Default     |
| --------------- | ---------------- | ----------- | -------------- | ----------- |
| `data`          | `data`           |             | `[] \| string` | `undefined` |
| `resetValue`    | `resetvalue`     |             | `boolean`      | `undefined` |
| `selectedValue` | `selected-value` |             | `string`       | `undefined` |


## Dependencies

### Depends on

- [dropdown-menu-item](../dropdown-menu-item)
- [button-element](../button-element)
- [dropdown-menu](../dropdown-menu)

### Graph
```mermaid
graph TD;
  dropdown-integrated-component --> dropdown-menu-item
  dropdown-integrated-component --> button-element
  dropdown-integrated-component --> dropdown-menu
  dropdown-menu --> dropdown-dialog
  dropdown-dialog --> button-element
  style dropdown-integrated-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
