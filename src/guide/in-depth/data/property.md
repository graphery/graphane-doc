---
outline: deep
---

# `.data` property

The `g-composer` data is accessible through the `.data` property. This property is available to:

- external programs using the component (`document.querySelector('g-composer').data`)
- functions defined as methods within the component (`$.data`).
- template directives (`g-for="record of data"`).

You can manipulate the `.data` object directly, and when a change occurs in this object, the SVG
graphic will be automatically updated with the new data, keeping the view up to date at all times.

```html
<g-composer id="example">
  <template>
    <svg viewBox="0 0 100 100">
      <rect x="0" y="0" fill="green"
            g-bind:width="width"
            g-bind:height="height"/>
    </svg>
  </template>
  <script type="data">
    { 
      width: 80,
      height: 80 
    }
  </script>
</g-composer>
```

```html {4,8}
<p>
  <label> width: 
    <input type="range" min="0" max="100" value="80"
           oninput="document.querySelector('#example').data.width = this.value">
  </label>
  <label> height: 
    <input type="range" min="0" max="100" value="80"
           oninput="document.querySelector('#example').data.height = this.value">
</label>
</p>
```

<g-composer data="width: 80; height: 80" id="example">
  <svg viewBox="0 0 100 100">
    <rect x="0" y="0" fill="green"
          g-bind:width="width" 
          g-bind:height="height"/>
  </svg>
</g-composer>
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