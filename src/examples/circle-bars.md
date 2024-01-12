---
outline: deep
---

# Bars

<g-composer>
  <svg viewBox="0 0 500 500">
    <defs g-for="({year, value}, n) of data">
      <text g-bind:y="(n * (250 / data.length)) + 25" g-content="year" x="200"></text>
      <path 
        g-bind:style="{fill: $.config.colors[n]}"
        g-bind:d="$$.barArc(250, 250, (250 - (n * (250 / data.length)) - 20), (275/data.length)/2, (270 * value))"/>
    </defs>
  </svg>
  <g-script type="plugin" src="https://cdn.graphery.online/graphane/0.1.0-alpha/plugins/shapes.js"></g-script>
  <g-script type="data">[
    {"year": 2022, "value": 1},
    {"year": 2021, "value": 0.42},
    {"year": 2020, "value": 0.65},
    {"year": 2019, "value": 0.74},
    {"year": 2018, "value": 0.5}
  ]</g-script>
  <g-script type="config">{
    colors: ['#194a7a', '#476f95', '#7593af', '#a3b7ca', '#d1dbe4'] 
  }</g-script>
</g-composer>

<p><label>2018:
  <input type="range" min="0" max="1" step="0.01" value="0.5" 
         oninput="document.querySelector('g-composer').data[4]. value = this.value">
</label></p>
<p><label>2019:
  <input type="range" min="0" max="1" step="0.01" value="0.74" 
         oninput="document.querySelector('g-composer').data[3]. value = this.value">
</label></p>
<p><label>2020:
  <input type="range" min="0" max="1" step="0.01" value="0.65"
         oninput="document.querySelector('g-composer').data[2]. value = this.value">
</label></p>
<p><label>2021:
  <input type="range" min="0" max="1" step="0.01" value="0.42"
         oninput="document.querySelector('g-composer').data[1]. value = this.value">
</label></p>
<p><label>2022:
  <input type="range" min="0" max="1" step="0.01" value="1"
         oninput="document.querySelector('g-composer').data[0]. value = this.value">
</label></p>

```html
<g-composer>
  <svg viewBox="0 0 500 500">
    <defs g-for="({year, value}, n) of data">
      <text :y="(n * (250 / data.length)) + 25" g-content="year" x="200"></text>
      <path
        :style="{fill: $.config.colors[n]}"
        :d="$$.barArc(250, 250, 250-(n*(250/data.length))-20, (275/data.length)-25, 270*value)"
      />
    </defs>
  </svg>
  <script type="plugin" src="http://localhost:63342/graphane/src/plugins/shapes.js">
  </script>
  <script type="data">[
    {"year": 2022, "value": 1},
    {"year": 2021, "value": 0.42},
    {"year": 2020, "value": 0.65},
    {"year": 2019, "value": 0.74},
    {"year": 2018, "value": 0.5}
  ]</script>
  <script type="config">{
    colors: ['#194a7a', '#476f95', '#7593af', '#a3b7ca', '#d1dbe4']
  }</script>
</g-composer>
```