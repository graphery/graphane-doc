---
outline: deep
---

# Bars

<g-composer>
  <svg style="height: 340px"
       g-bind:viewBox="`0 0 ${(data.length) * 100 + 60} 340`">
    <defs g-for="value of 6">
      <text x="40" 
            text-anchor="end"
            g-bind:y="280 - (value * 50)"
            g-content="(0 | value  * 20) + '%'">aa
      </text>
    </defs>
    <defs g-for="({year, value}, idx) of data">
      <text y="320" 
            g-bind:x="(idx * 100) + 100" 
            g-content="year"></text>
      <line y1="20"
            y2="280"
            stroke-width="30"
            stroke="lightgrey"
            stroke-linecap="round"
            g-bind:x1="(idx * 100) + 115"
            g-bind:x2="(idx * 100) + 115"/>
      <line y1="280"
            y2="280"
            stroke-width="30"
            stroke="blue"
            stroke-linecap="round"
            g-bind:x1="(idx * 100) + 115"
            g-bind:x2="(idx * 100) + 115"
            g-bind:y1="$$.dynamic(((1 - value) * 260) + 20)"/>
      <text y="284"
            style="fill: white; font-size:0.75em; text-anchor:middle"
            g-bind:x="(idx * 100) + 115" 
            g-content="(0 | value * 100) + '%'"></text>
    </defs>
  </svg>
  <g-script type="data">[
    {"year": 2019, "value": 0.74},
    {"year": 2020, "value": 0.65},
    {"year": 2021, "value": 0.42},
    {"year": 2022, "value": 0.92}
  ]</g-script>
</g-composer>

<p><label>2019:
  <input type="range" min="0" max="1" step="0.01" value="0.74" 
         oninput="document.querySelector('g-composer').data[0]. value = this.value">
</label></p>
<p><label>2020:
  <input type="range" min="0" max="1" step="0.01" value="0.65"
         oninput="document.querySelector('g-composer').data[1]. value = this.value">
</label></p>
<p><label>2021:
  <input type="range" min="0" max="1" step="0.01" value="0.42"
         oninput="document.querySelector('g-composer').data[2]. value = this.value">
</label></p>
<p><label>2022:
  <input type="range" min="0" max="1" step="0.01" value="0.92"
         oninput="document.querySelector('g-composer').data[3]. value = this.value">
</label></p>

```html
<g-composer>
  <svg style="height: 340px"
       g-bind:viewBox="`0 0 ${(data.length) * 100 + 60} 340`">
    <defs g-for="value of 6">
      <text x="40"
            text-anchor="end"
            g-bind:y="280 - (value * 50)"
            g-content="(0 | value  * 20) + '%'">aa
      </text>
    </defs>
    <defs g-for="({year, value}, idx) of data">
      <text y="320"
            g-bind:x="(idx * 100) + 100"
            g-content="year"></text>
      <line y1="20"
            y2="280"
            stroke-width="30"
            stroke="lightgrey"
            stroke-linecap="round"
            g-bind:x1="(idx * 100) + 115"
            g-bind:x2="(idx * 100) + 115"/>
      <line y1="280"
            y2="280"
            stroke-width="30"
            stroke="blue"
            stroke-linecap="round"
            g-bind:x1="(idx * 100) + 115"
            g-bind:x2="(idx * 100) + 115"
            g-bind:y1="$$.dynamic(((1 - value) * 260) + 20)"/>
      <text y="284"
            style="fill: white; font-size:0.75em; text-anchor:middle"
            g-bind:x="(idx * 100) + 115"
            g-content="(0 | value * 100) + '%'"></text>
    </defs>
  </svg>
  <g-script type="data">[
    {"year": 2019, "value": 0.74},
    {"year": 2020, "value": 0.65},
    {"year": 2021, "value": 0.42},
    {"year": 2022, "value": 0.92}
    ]</g-script>
</g-composer>
```

```html
<p><label>2019:
  <input type="range" min="0" max="1" step="0.01" value="0.74"
         oninput="document.querySelector('g-composer').data[0]. value = this.value">
</label></p>
<p><label>2020:
  <input type="range" min="0" max="1" step="0.01" value="0.65"
         oninput="document.querySelector('g-composer').data[1]. value = this.value">
</label></p>
<p><label>2021:
  <input type="range" min="0" max="1" step="0.01" value="0.42"
         oninput="document.querySelector('g-composer').data[2]. value = this.value">
</label></p>
<p><label>2022:
  <input type="range" min="0" max="1" step="0.01" value="0.92"
         oninput="document.querySelector('g-composer').data[3]. value = this.value">
</label></p>
```