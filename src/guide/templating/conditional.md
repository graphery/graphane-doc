---
outline: deep
---

# Conditional Rendering

The `g-if` directive is a feature in Graphane that allows you to conditionally show or hide
elements based on a boolean value. It provides a simple way to toggle the visibility of SVG
elements.

```svg
<circle g-if="data.isVisible" cx="50" cy="50" r="30"/>
```

In this example, the `g-if` directive is applied to a `<circle>` element. The `data.isVisible` is a
boolean value or expression that determines whether the element should be displayed or hidden. When
the value of `isVisible` is `true`, the circle will be displayed. If the value is `false`, the
element will be hidden and effectively removing it from view.

```html{3}
<g-composer data="isVisible: true">
  <svg viewBox="0 0 100 100">
    <circle g-if="isVisible" cx="50" cy="50" r="30"/>
  </svg>
</g-composer>
```
```html
<p>
  <label>change the visibility:
    <input type="checkbox" name="check" checked
           onchange="document.querySelector('g-composer').data.isVisible=this.checked">
  </label>
</p>
```

<g-composer data="isVisible: true">
  <svg viewBox="0 0 100 100">
    <circle g-if="isVisible" cx="50" cy="50" r="30"/>
  </svg>
</g-composer>
<p>
  <label>change the visibility:
    <input type="checkbox" checked 
           onchange="document.querySelector('g-composer').data.isVisible=this.checked">
  </label>
</p>