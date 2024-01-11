---
outline: deep
---

# Data

We can create visualizations using data in CSV, JSON or JSON5 formats, and they will be available
for use in the template. To load the data, we need to use the `script` tag indicating that it
is `type="data"`.

```html {15-19}
<g-composer>
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

<g-composer>
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

## Formats

The format used is automatically identified by Graphane, and it is not necessary to specify it.

### CSV

It is possible to use the Comma Separated Values (CSV) format in its different variants, such as
comma or semicolon separation.

```html {11-14}
<g-composer>
  <svg viewBox="0 0 100 100">
    <defs g-for="value of data">
      <circle g-bind:cx="value.x"
              g-bind:cy="value.y"
              g-bind:r="value.radix"
              g-bind:fill="value.color"/>
    </defs>
  </svg>
  <script type="data">
    x,y,radix,color
    20,20,20,red
    45,45,30,blue
    80,80,10,green
  </script>
</g-composer>
```

<g-composer>
  <svg viewBox="0 0 100 100">
    <defs g-for="value of data">
      <circle g-bind:cx="value.x"
              g-bind:cy="value.y"
              g-bind:r="value.radix"
              g-bind:fill="value.color"/>
    </defs>
  </svg>
  <g-script type="data" src="../../data/circles.csv"></g-script>
</g-composer>


### JSON or JSON5

It is also possible to use Javascript Object Notation (JSON) or its looser variant JSON5.

```html {11-15}
<g-composer>
  <svg viewBox="0 0 100 100">
    <defs g-for="value of data">
      <circle g-bind:cx="value.x"
              g-bind:cy="value.y"
              g-bind:r="value.radix"
              g-bind:fill="value.color"/>
    </defs>
  </svg>
  <script type="data">
    [
      {x: 20, y: 20, radix: 20, color: "red"},
      {x: 45, y: 45, radix: 30, color: "blue"},
      {x: 80, y: 80, radix: 10, color: "green"},
    ]
  </script>
</g-composer>
```

## Structure

The data structure can be as flexible as necessary.

- **Object**: the data can be an object with properties and attributes, and can include other nested
  objects.

- **Array**: The data can be a collection of data in an array. When data is loaded in CSV format it is
  always transformed into an array with objects.

## Reactivity

You can update the data by the `g-compoposer` property `.data` and the graph is automatically updated:

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

<p>
  <label>.data.circles 
    <input type="range" min="0" max="50" step="1" value="5"
           oninput="document.querySelector('#example').data.circles = Number(this.value)">
  </label>
</p>


```html
<p>
  <label>.data.circles
    <input type="range" min="1" max="100" step="1" value="5" 
           oninput="document.querySelector('#example').data.circles = Number(this.value)">
  </label>
</p>
```

The reactivity system observes changes in the data both at the surface level and any changes in the
data nested in depth.