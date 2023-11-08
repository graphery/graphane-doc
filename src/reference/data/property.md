---
outline: deep
---

# Property `.data`

- **Component**: `g-composer`

- **Property**: `.data`

- **Description**: for a complex values or dynamic handle you can use the `.value` property and the
  `g-composer` component.

```html
<g-composer id="d2">
  <svg viewBox="0 0 100 100">
    <defs g-for="(color, idx) of data">
      <circle g-bind:cx="(idx * 30) + 10"
              g-bind:cy="(idx * 30) + 10"
              g-bind:fill="color"
              r="10"/>
    </defs>
  </svg>
</g-composer>
```
```html
<p>
  <button onclick="document.querySelector('#d2').data=['red','green','blue']">
    click to add data
  </button>
</p>
```

<g-composer id="d2">
  <svg viewBox="0 0 100 100">
    <defs g-for="(color, idx) of data">
      <circle g-bind:cx="(idx * 30) + 10" 
              g-bind:cy="(idx * 30) + 10" 
              g-bind:fill="color"
              r="10"/>
    </defs>
  </svg>
</g-composer>
<p>
  <button onclick="document.querySelector('#d2').data=['red','green','blue']">
    click to add data
  </button>
</p>
