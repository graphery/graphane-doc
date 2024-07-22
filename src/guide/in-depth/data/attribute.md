---
outline: deep
---

# Data property

When the data to be handled is basic, the `data` attribute can be used directly to indicate keys and
values separated by comma (`,`) or semicolon (`;`). It is useful with basic visualizations, like
some of the examples we use in this guide, but is not sufficient when you want to make more complex
situations.

```html {1}
<g-composer data="width: 80, height: 80">
  <svg viewBox="0 0 100 100">
    <rect x="10" y="10" fill="green"
          g-bind:width="data.width"
          g-bind:height="data.height"/>
  </svg>
</g-composer>
```

<g-composer data="width: 80, height: 80">
  <svg viewBox="0 0 100 100">
    <rect x="0" y="0" fill="green"
          g-bind:width="data.width" 
          g-bind:height="data.height"/>
  </svg>
</g-composer>

::: warning The `.data` property has the key and values defined in the attribute, but if this
property is updated, the attribute is not updated. It is a unidirectional reflection, from attribute
to property, but not in the opposite direction.
:::
