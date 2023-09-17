---
outline: deep
---

# `<g-svg data="key: value"></g-svg>`

- **Attribute**: `data`

- **Value**: a simple list of key-value.

- **Description**: inline data for templating.

## Example attribute

```html
<g-svg data="value: 10, color: 'red'">
  <svg viewBox="0 0 100 100">
    <defs g-for="n of value">
      <circle g-bind:cx="(n * 10) + 5" g-bind:cy="(n * 10) + 5" 
              g-bind:fill="color" r="5"/>
    </defs>
  </svg>
</g-svg>
```

<g-svg data="value: 10, color: 'red'">
  <svg viewBox="0 0 100 100">
    <defs g-for="n of value">
      <circle g-bind:cx="(n * 10) + 5" g-bind:cy="(n * 10) + 5" g-bind:fill="color" r="5"/>
    </defs>
  </svg>
</g-svg>

---

- **Property**: `.data`

- **Description**: for a complex values you can use the `.value` property and the 
`<g-data></g-data>` component.

## Example property

```html
<g-svg id="data2">
  <svg viewBox="0 0 100 100">
    <defs g-for="(n, idx) of value">
      <circle g-bind:cx="(n * 30) + 5" g-bind:cy="(n * 30) + 5" 
              g-bind:fill="colors[idx]" r="10"/>
    </defs>
  </svg>
</g-svg>
<button onclick="document.querySelector('#data2').data={value:3,colors:['red','green','blue']}">
  add data
</button>
```

<g-svg id="data2">
  <svg viewBox="0 0 100 100">
    <defs g-for="(n, idx) of value">
      <circle g-bind:cx="(n * 30) + 10" g-bind:cy="(n * 30) + 10" g-bind:fill="colors[idx]" r="10"/>
    </defs>
  </svg>
</g-svg>
<button onclick="document.querySelector('#data2').data = {value: 3, colors: ['red', 'green', 'blue']}">add data</button>