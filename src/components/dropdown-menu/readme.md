# dropdown-menu



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `title`  | `title`   |             | `string` | `undefined` |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `openChanged` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [dropdown-integrated-component](../dropdown-integrated-component)

### Depends on

- [dropdown-dialog](../dropdown-dialog)

### Graph
```mermaid
graph TD;
  dropdown-menu --> dropdown-dialog
  dropdown-dialog --> button-element
  dropdown-integrated-component --> dropdown-menu
  style dropdown-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
