---
outline: deep
---

# Quadrant

<g-composer style="width: 250px; height: 250px;">
  <svg viewBox="0 0 120 120">
    <line x1="60" y1="10" x2="60" y2="110" stroke-width="1" stroke="lightgrey"></line> 
    <line x1="10" y1="60" x2="110" y2="60" stroke-width="1" stroke="lightgrey"></line>
    <defs g-for="(value, key) of data">
        <circle r="3"
                g-bind:cx="value.x + 10"
                g-bind:cy="value.y + 10"
        ></circle>
        <text style="font-size: 7px"
              g-content="'option ' + key" 
              g-bind:x="value.x > 50 ? value.x - 22 : value.x + 15" 
              g-bind:y="value.y + 12"
        ></text>
    </defs>
  </svg>
  <g-script type="data">
  {
    a: {x: 10, y: 40},
    b: {x: 65, y: 12},
    c: {x: 32, y: 23},
    d: {x: 24, y: 80},
    e: {x: 92, y: 62},
  }
  </g-script>
</g-composer>

```html
<g-composer style="width: 250px; height: 250px;">
    <svg viewBox="0 0 120 120">
        <line x1="60" y1="10" x2="60" y2="110" stroke-width="1" stroke="lightgrey"></line> 
        <line x1="10" y1="60" x2="110" y2="60" stroke-width="1" stroke="lightgrey"></line>
        <defs g-for="(value, key) of data">
            <circle r="3"
                    g-bind:cx="value.x + 10"
                    g-bind:cy="value.y + 10"
            ></circle>
            <text style="font-size: 7px"
                  g-content="'option ' + key" 
                  g-bind:x="value.x > 50 ? value.x - 22 : value.x + 15" 
                  g-bind:y="value.y + 12"
            ></text>
        </defs>
    </svg>
    <script type="data">
    {
      a: {x: 10, y: 40},
      b: {x: 65, y: 12},
      c: {x: 32, y: 23},
      d: {x: 24, y: 80},
      e: {x: 92, y: 62},
    }
    </script>
</g-composer>
```