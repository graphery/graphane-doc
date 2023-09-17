---
outline: deep
---

# `<g-data type="type" src="file"></g-data>`

- **Attribute**: `src`

- **Description**: the path to an external resource with the data.

- **Note**: `type` must always be present.

## Example

```html
<g-svg>
  <svg>
    <defs g-for="value of data">
      <circle g-bind:cx="value.x" g-bind:cy="value.y"
              g-bind:r="value.radix" g-bind:fill="value.color"/> </defs>
  </svg>
  <g-data type="csv" src="/circles.csv"></g-data>
</g-svg>
```

<g-svg>
  <svg>
    <defs g-for="value of data">
      <circle g-bind:cx="value.x" g-bind:cy="value.y"
              g-bind:r="value.radix" g-bind:fill="value.color"/> </defs>
  </svg>
  <g-data type="csv" src="/circles.csv"></g-data>
</g-svg>