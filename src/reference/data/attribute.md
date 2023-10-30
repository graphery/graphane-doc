---
outline: deep
---

# Attribute `data` 

- **Component**: `g-composer`

- **Attribute**: `data`

- **Value**: a simple list of key-value separated with `,` or `;`.

- **Description**: inline data.

```html
<g-composer data="value: 10, color: 'red'">
  <svg viewBox="0 0 100 100">
    <defs g-for="n of value">
      <circle g-bind:cx="(n * 10) + 5" 
              g-bind:cy="(n * 10) + 5" 
              g-bind:fill="color" 
              r="5"/>
    </defs>
  </svg>
</g-composer>
```

<g-composer data="value: 10, color: 'red'">
  <svg viewBox="0 0 100 100">
    <defs g-for="n of value">
      <circle g-bind:cx="(n * 10) + 5" g-bind:cy="(n * 10) + 5" g-bind:fill="color" r="5"/>
    </defs>
  </svg>
</g-composer>
