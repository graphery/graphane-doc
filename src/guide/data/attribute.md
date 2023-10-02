---
outline: deep
---

# Data property

In the `data` attribute you can directly include data with format `key: value` separated with `,
` or `;`. It is useful with basic visualizations, like some of the examples we use in this guide,
but is not sufficient when you want to make more complex situations.

```html

<g-template data="width: 80, height: 80">
  <svg viewBox="0 0 100 100">
    <rect x="10" y="10" fill="green"
          g-bind:width="data.width"
          g-bind:height="data.height"/>
  </svg>
</g-template>
```

<g-template data="width: 80, height: 80">
  <svg viewBox="0 0 100 100">
    <rect x="0" y="0" fill="green"
          g-bind:width="data.width" 
          g-bind:height="data.height"/>
  </svg>
</g-template>

::: warning
The `.data` property has the key and values defined in the attribute, but if this
property is updated, the attribute is not updated. It is a unidirectional reflection, from attribute
to property, but not in the opposite direction.
:::
