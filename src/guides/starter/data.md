---
outline: deep
---

# Data

We can create visualizations using SVG-based templates uploading data in CSV, JSON or JSON5
formats, and they will be available for use in the template directly. To load the data, we need to
use the `script` tag indicating that it is `type="data"`.

```html {15-19}
<g-composer id="example">
  <template>
    <svg viewBox="0 0 100 100" width="200" height="200">
      <defs g-for="x of circles">
        <circle 
          cx="50" 
          cy="50" 
          g-bind:r="(x + 1) * (48 / circles)"
          fill="none" 
          stroke="black" 
          stroke-width="1"/>
      </defs>
    </svg>
  </template>
  <script type="data">
    {
      "circles": 5
    }
  </script>
</g-composer>
```

<g-composer id="example">
  <svg viewBox="0 0 100 100" width="200" height="200">
    <defs g-for="x of circles">
      <circle 
        cx="50" 
        cy="50" 
        g-bind:r="(x + 1) * (48 / circles)"
        fill="none" 
        stroke="black" 
        stroke-width="1"/>
    </defs>
  </svg>
  <g-script type="data">
    {
      "circles": 5
    }
  </g-script>
</g-composer>


You can update the data by the attribute `.data` and the graph is automatically updated:

<p>
  <label>data.circles 
    <input 
      type="range"
      min="0"
      max="50"
      step="1"
      value="5"
      oninput="document.querySelector('#example').data.circles = Number(this.value)">
  </label>
</p>


```html
<p>
  <label>data.circles
    <input
      type="range"
      min="1"
      max="100"
      step="1"
      value="5"
      oninput="document.querySelector('#example').data.circles = Number(this.value)">
  </label>
</p>
```

In several cases, it is easier to include the data from an external resource with the attribute 
`src` to CSV or JSON file:

```html {15}
<g-composer id="example">
  <template>
    <svg viewBox="0 0 100 100" width="200" height="200">
      <defs g-for="x of circles">
        <circle
          cx="50"
          cy="50"
          g-bind:r="(x + 1) * (48 / circles)"
          fill="none"
          stroke="black"
          stroke-width="1"/>
      </defs>
    </svg>
  </template>
  <script type="data" src="/data/circles.json"></script>
</g-composer>
```
