---
outline: deep
---

# Percentage

<p>&nbsp;</p>

<g-composer data="" style="width: 200px; --g-fill: green">
  <svg viewBox="0 0 200 270">
    <defs g-for="y of 10">
      <defs g-for="x of 10">
        <rect g-bind:x="x * 20"
              g-bind:y="y * 20"
              height="18"
              width="18"
              style="fill: var(--g-fill, grey)"
              g-bind:opacity="100 - ((y * 10) + x + 1) < value ? 1 : 0.3"/>
      </defs>
    </defs>
    <text x="100" 
          y="100"
          dominant-baseline="middle"
          text-anchor="middle"
          font-size="32">
      <tspan g-content="Math.round(value)"></tspan>%
    </text>
    <text x="100"
          y="220"
          font-size="16"
          dominant-baseline="middle"
          text-anchor="middle"
          g-content="label"></text>
  </svg>
  <g-script type="data">{
    value: 23,
    label: 'example'
  }</g-script>
</g-composer>

<p><label>value: 
  <input type="range" value="23" min="0" max="100" step="1" oninput="document.querySelector('g-composer').data.value = this.value">
</label></p>
<p><label>label:
  <input type="text" value="example" oninput="document.querySelector('g-composer').data.label = this.value">
</label></p>

```html
<g-composer data="" style="width: 200px; --g-fill: green">
  <template>
    <svg viewBox="0 0 200 270">
      <defs g-for="y of 10">
        <defs g-for="x of 10">
          <rect g-bind:x="x * 20"
                g-bind:y="y * 20"
                height="18"
                width="18"
                style="fill: var(--g-fill, grey)"
                g-bind:opacity="100 - ((y * 10) + x + 1) < value ? 1 : 0.3"/>
        </defs>
      </defs>
      <text x="100" 
            y="100"
            dominant-baseline="middle"
            text-anchor="middle"
            font-size="32">
        <tspan g-content="Math.round(value)"></tspan>%
      </text>
      <text x="100"
            y="220"
            font-size="16"
            dominant-baseline="middle"
            text-anchor="middle"
            g-content="label"></text>
    </svg>
  </template>
  <script type="data">{
    value: 23,
    label: 'example'
  }</script>
</g-composer>
```
```html
<p><label>value: 
  <input type="range" value="23" min="0" max="100" step="1" oninput="document.querySelector('g-composer').data.value = this.value">
</label></p>
<p><label>label:
  <input type="text" value="example" oninput="document.querySelector('g-composer').data.label = this.value">
</label></p>
```
