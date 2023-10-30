---
outline: deep
---

# `function data()`

You can include a `function data()` in the methods to perform filter and transformation of data
before the template evaluation. This function receives the original data and must be return the
transformed data.


```html {13-18}
<g-composer data="percentage: 50">
  <svg viewBox="0 0 100 130">
    <defs g-for="n of spokes">
      <line x1="50" y1="0" x2="50" y2="50"
            stroke-width="4" stroke="red"
            :transform="rotate((360 / spokes) * n,50, 50)"/>
    </defs>
    <text x="50" y="115" font-size="12"
          dominant-baseline="middle" text-anchor="middle"
          g-content="`${ percentage } % (${ spokes } spokes)`"></text>
  </svg>
  <script type="methods">
    function data(original) {
      return {
        ...original,
        spokes: Math.floor(original.percentage / 100 * 25) 
      };
    }
  </script>
</g-composer>
<p>
```
```html
<p>
  <label>percentage:
    <input type="range" min="0" max="100" step="1" value="50"
           oninput="document.querySelector('g-composer').data.percentage = this.value">
  </label>
</p>
```

<g-composer data="percentage: 50">
  <svg viewBox="0 0 100 130">
    <defs g-for="n of spokes">
      <line x1="50" y1="0" x2="50" y2="50"
            stroke-width="4" stroke="red"
            g-bind:transform="rotate((360 / spokes) * n,50, 50)"/>
    </defs>
    <text x="50" y="115" font-size="12"
          dominant-baseline="middle" text-anchor="middle"
          g-content="`${ percentage } % (${ spokes } spokes)`"></text>
  </svg>
  <g-script type="methods">
    function data(original) {
      return {
        ...original,
        spokes: Math.floor(original.percentage / 100 * 25) 
      };
    }
  </g-script>
</g-composer>
<p>
<label>percentage:
  <input type="range" min="0" max="100" step="1" value="50"
         oninput="document.querySelector('g-composer').data.percentage = this.value">
</label></p>
