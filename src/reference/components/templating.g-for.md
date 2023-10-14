# `g-for="item of items"` or <br/> `g-for="(item, index) of items"`

- **Name**:  `g-for`

- **Description**: render a block of SVG elements multiple times based on a number, an array or an
object's properties.

- **Applies to**: `defs` elements.

## Example

```html
<g-template data="value: 10">
  <svg viewBox="0 0 100 100">
    <defs g-for="n of value">
      <circle g-bind:cx="(n * 10) + 5" g-bind:cy="(n * 10) + 5" r="5"/>
    </defs>
  </svg>
</g-template>
```

<g-template data="value: 10">
  <svg viewBox="0 0 100 100">
    <defs g-for="n of value">
      <circle g-bind:cx="(n * 10) + 5" g-bind:cy="(n * 10) + 5" r="5"/>
    </defs>
  </svg>
</g-template>