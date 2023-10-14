---
outline: deep
---

# `<g-template data-src="data.csv" data-type="csv"></g-template>` 

- **Attribute**: `data-source`

- **Value**: resource path.

- **Description**: path to an CVS, JSON or JS file loaded as an external resource.

----

- **Attribute**: `data-type`

- **Value**: CSV, JSON or JS.

- **Description**: the file content type, coma separated value (CSV), Javascript Object Notation 
  (JSON) or a Javascript object (JS).
 
## Example

::: code-group

```html
<g-template data-src="/circles.csv" data-type="csv">
  <svg viewBox="0 0 100 100">
    <defs g-for="value of data">
      <circle g-bind:cx="value.x"
              g-bind:cy="value.y"
              g-bind:r="value.radix"
              g-bind:fill="value.color"/>
    </defs>
  </svg>
</g-template>
```

```text
"x";"y";"radix";"color"
20;20;20;"red"
45;45;30;"blue"
80;80;10;"green"
```

:::

<g-template data-src="/circles.csv" data-type="csv">
  <svg viewBox="0 0 100 100">
    <defs g-for="value of data">
      <circle g-bind:cx="value.x"
              g-bind:cy="value.y"
              g-bind:r="value.radix"
              g-bind:fill="value.color"/>
    </defs>
  </svg>
</g-template>
