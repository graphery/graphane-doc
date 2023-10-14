---
outline: deep
---

# `g-bind:attribute="expression"`

- **Name**:  `g-bind`

- **Shorthand**:  `:`

- **Parameter**: the attribute name.

- **Description**: dynamically binds an attribute to an expression return based on the data.

- **Special cases**:

  - `bind:style`: accepts an object containing CSS styles.
  - `bind:class`: adds class (not replaces) and can use a value or an array of values.

## Example

```html
<g-template data="size: 25, color: red">
  <svg viewBox="0 0 100 100">
    <circle g-bind:r="size" cx="50" cy="50" g-bind:fill="color"/>
  </svg>
</g-template>
```

<g-template data="size: 25, color: red">
  <svg viewBox="0 0 100 100">
    <circle g-bind:r="size" cx="50" cy="50" g-bind:fill="color"/>
  </svg>
</g-template>
