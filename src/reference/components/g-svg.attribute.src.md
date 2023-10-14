---
outline: deep
---

# `<g-template src="file.svg"></g-template>` 

- **Attribute**: `src`

- **Value**: resource path.

- **Description**: path to an SVG Template loaded as an external resource.

## Example

::: code-group

```html
<g-template data="value: 10" src="/external.svg"></g-template>
```

```svg
<svg viewBox="0 0 100 100">
  <defs g-for="n of value">
    <circle g-bind:cx="(n * 10) + 5" g-bind:cy="(n * 10) + 5" r="5"/>
  </defs>
</svg>
```

:::

<g-template data="value: 10" src="/external.svg"></g-template>
