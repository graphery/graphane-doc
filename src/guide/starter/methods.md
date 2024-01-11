---
outline: deep
---

# Methods

You can add methods with a simple `<script type="methods"></script>`. All functions defined into
this tag are available from the template.

```html {5,11-16}
<g-composer>
  <template>
    <svg viewBox="0 0 100 100" width="200" height="200">
      <g style="cursor: pointer"
         g-on:click="update">
        <rect x="1" y="1" width="98" height="90" fill="blue"/>
        <text x="24" y="48" fill="white">click me</text>
      </g>
    </svg>
  </template>
  <g-script type="methods">
    function update() {
      const rect = $.svg.querySelector('rect');
      rect.fill(rect.fill() === 'blue' ? 'red' : 'blue');
    }
  </g-script>
</g-composer>
```

<g-composer>
  <svg viewBox="0 0 100 100" width="200" height="200">
    <g g-on:click="update" 
       style="cursor: pointer">
      <rect x="1" y="1" width="98" height="90" fill="blue"/>
      <text x="24" y="48" fill="white">click me</text>
    </g>
  </svg>
  <g-script type="methods">
    function update() {
      const rect = $.svg.querySelector('rect');
      rect.fill(rect.fill() === 'blue' ? 'red' : 'blue');
    }
  </g-script>
</g-composer>


## Event handling

You can use the directive `g-on:`, or the shorthand `@`, follow the event name for event handling.

In the previous example, the directive `g-on:click="update"` link the event `click` to the function
`update` defined into the `script type="methods"`.

In this other example the `click` event on all SVG content, updates the `circles` data value.

```html
<g-composer>
  <template>
    <svg viewBox="0 0 100 100" style="cursor: pointer" width="200" height="200"
         g-on:click="click">
      <defs g-for="x of circles">
        <circle cx="50" cy="50" fill="none" stroke="black" stroke-width="1"
                g-bind:r="(x + 1) * (48 / circles)"/>
      </defs>
    </svg>
  </template>
  <script type="data">
    { "circles": 5 }
  </script>
  <script type="methods">
    function click(evt) {
      evt.preventDefault();
      if (evt.ctrlKey) {
        $.data.circles--;
      } else {
        $.data.circles++;
      }
    }
  </script>
</g-composer>
```

<g-composer>
  <svg viewBox="0 0 100 100" g-on:click="click" style="cursor: pointer" width="200" height="200">
    <defs g-for="x of circles">
      <circle cx="50" cy="50" fill="none" stroke="black" stroke-width="1"
              g-bind:r="(x + 1) * (48 / circles)"/>
    </defs>
  </svg>
  <g-script type="data">
    { "circles": 5 }
  </g-script>
  <g-script type="methods">
    function click(evt) {
      evt.preventDefault();
      if (evt.ctrlKey) {
        $.data.circles--;
      } else {
        $.data.circles++;
      }
    }
  </g-script>
</g-composer>


In the defined functions we can access the `$` object with which we can access the SVG (`$.svg`) or
the data (`$.data`), facilitating the manipulation of both the generated graphic and the data used.

## Data transformation

If you create a function with the name `data` it is automatically called when data is loaded or
modified. The function receives the initial data and returns the new data values. You can include
the `data` function to perform the filtering and transformation before the template evaluation,
add calculated values, etc.

```html
<g-composer style="width: 150px;">
  <template>
    <svg viewBox="0 0 30 80">
      <defs g-for="(r, n) of data">
        <rect x="0" width="50" fill="green"
              g-bind:y="r.y"
              g-bind:height="r.height"
              g-bind:opacity="r.opacity"/>
        <text x="4" font-size="4"
              g-bind:y="r.y + (r.height / 2)"
              g-content="`${ r.name } (${ r.value })`"></text>
      </defs>
    </svg>
  </template>
  <script type="data">
  [
    {name: 'alpha', value: 10},
    {name: 'beta', value: 20},
    {name: 'gamma', value: 35},
  ]
  </script>
  <script type="methods">
    function data(values) {
      const total = values.reduce((n, r) =>  r.value + n, 0);
      let y = 0;
      return values.map(r => {
        const d = {
          ...r, 
          y      : y,
          height : r.value / total * 80,
          opacity: r.value / total
        };
        y = y + d.height;
        return d;
      });
    }
  </script>
</g-composer>
```

<g-composer style="width: 150px;">
  <svg viewBox="0 0 30 80">
    <defs g-for="(r, n) of data">
      <rect x="0"
            width="50"
            fill="green"
            g-bind:y="r.y"
            g-bind:height="r.height"
            g-bind:opacity="r.opacity"/>
      <text x="4"
            font-size="4"
            g-bind:y="r.y + (r.height / 2)"
            g-content="`${ r.name } (${ r.value })`"></text>
    </defs>
  </svg>
  <g-script type="data">
  [
    {name: 'alpha', value: 10},
    {name: 'beta', value: 20},
    {name: 'gamma', value: 35},
  ]
  </g-script>
  <g-script type="methods">
    function data(values) {
      const total = values.reduce((n, r) =>  r.value + n, 0);
      let y = 0;
      return values.map(r => {
        const d = {
          ...r, 
          y      : y,
          height : r.value / total * 80,
          opacity: r.value / total
        };
        y = y + d.height;
        return d;
      });
    }
  </g-script>
</g-composer>

## Functions available in the template

All functions defined into the `script type="methods"` are available into the template. You can
define several functions, variables or constants into the script; the template only can access to
all functions define as `function`.

::: warning
The arrow functions are not available into the template because are assigned to a constants or
variables.
:::
