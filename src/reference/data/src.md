---
outline: deep
---

# External Source

- **Attribute**: 
  - `src` in `script type="data"`
  - `data-src` in `g-template`.

- **Description**: the path to an external resource with the data.

## Example

```html
<g-template>
  <svg>
    <defs g-for="value of data">
      <circle g-bind:cx="value.x" g-bind:cy="value.y"
              g-bind:r="value.radix" g-bind:fill="value.color"/> </defs>
  </svg>
  <script type="data" src="/data/circles.csv"></script>
</g-template>
```

<g-template>
  <svg>
    <defs g-for="value of data">
      <circle g-bind:cx="value.x" g-bind:cy="value.y"
              g-bind:r="value.radix" g-bind:fill="value.color"/> </defs>
  </svg>
  <g-script type="data" src="../../data/circles.csv"></g-script>
</g-template>