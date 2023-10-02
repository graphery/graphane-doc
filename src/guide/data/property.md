---
outline: deep
---

# `.data` property

You can manipulate the `.data` object of the `g-template` component directly from Javascript. When a
change occurs in this object, the SVG graphic will be automatically updated with the new data,
keeping the view up-to-date at all times.

```html
<g-template data="width: 80; height: 80" id="example">
  <svg viewBox="0 0 100 100">
    <rect x="0" y="0" fill="green"
          g-bind:width="data.width" 
          g-bind:height="data.height"/>
  </svg>
</g-template>
```
```html
<p>
  <label>
    width: <input type="range" min="0" max="100" value="80"
                  oninput="document.querySelector('#rexample').data.width=this.value">
  </label>
  <label>
    height: <input type="range" min="0" max="100" value="80"
                   oninput="document.querySelector('#example').data.height=this.value">
  </label>
</p>
```

<g-template data="width: 80; height: 80" id="example">
  <svg viewBox="0 0 100 100">
    <rect x="0" y="0" fill="green"
          g-bind:width="data.width" 
          g-bind:height="data.height"/>
  </svg>
</g-template>
<p>
  <label>
    width: <input type="range" min="0" max="100" value="80"
                  oninput="document.querySelector('#example').data.width=this.value">
  </label>
  <label>
    height: <input type="range" min="0" max="100" value="80"
                   oninput="document.querySelector('#example').data.height=this.value">
  </label>
</p>