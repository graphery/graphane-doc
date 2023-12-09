---
outline: deep
---

# Template

The template is an SVG with special directives. It combines the power of Scalable Vector Graphic 
declarative language with directives to define how the graphic is built with the data.

```html {2-14}
<g-composer>
  <template>
    <svg viewBox="0 0 100 100" width="100"  height="100">
      <defs g-for="x of 3">
        <circle 
          cx="50" 
          cy="50" 
          g-bind:r="(x + 1) * (48 / 3)"
          fill="none" 
          stroke="black" 
          stroke-width="1"/>
      </defs>
    </svg>
  </template>
</g-composer>
```

<g-composer>
  <svg viewBox="0 0 100 100" width="100"  height="100">
    <defs g-for="x of 3">
      <circle 
        cx="50" 
        cy="50" 
        g-bind:r="(x + 1) * (48 / 3)"
        fill="none" 
        stroke="black" 
        stroke-width="1"/>
    </defs>
  </svg>
</g-composer>

The standard SVG format is enhanced with attribute-based **directives** that allows to generate
visualizations in an intuitive way, focusing efforts on design and data, avoiding the need for
complex development. Any designer with a little programming knowledge can make great data-driven
designs.

## `g-bind`

This directive, or the shorthand `:`, dynamically bind values to attributes.

```html {5}
<g-composer id="circle"">
  <template>
    <svg viewBox="0 0 100 100" width="100">
      <circle
        g-bind:r="size"
        cx="50" 
        cy="50" 
        fill="red"/>
    </svg>
  </template>
  <script type="data">
    {size: 25}
  </script>
</g-composer>
```
```html
<p>
  <label>Change the size:
    <input type="range" max="50" value="25"
           oninput="document.querySelector('#circle').data.size = this.value">
  </label>
</p>
```

<g-composer id="circle">
  <svg viewBox="0 0 100 100" width="100">
    <circle
      g-bind:r="size"
      cx="50" 
      cy="50" 
      fill="red"/>
  </svg>
  <g-script type="data">
    {size: 25}
  </g-script>
</g-composer>

<p>
<label>Change the size:
  <input type="range" max="50" value="25"
  oninput="document.querySelector('#circle').data.size = this.value">
  </label>
</p>

> See more about [`g-bind`](../in-depth/templating/binding.md)

## `g-for`

Render a block, defined with the tag `defs`, multiple times based on the data.

```html {4}
<g-composer id="circles">
  <template>
    <svg viewBox="0 0 100 100" width="100">
      <defs g-for="n of circles">
        <circle
          r="4"
          g-bind:cx="((n % 10) * 10) + 5" 
          g-bind:cy="(Math.floor(n / 10) * 10) + 5" 
          fill="red"/>
      </defs>
    </svg>
  </template>
  <script type="data">
    {circles: 40}
  </script>
</g-composer>
```
```html
<p>
  <label>Change the number of circles:
    <input type="range" max="100" value="40"
           oninput="document.querySelector('#circles').data.circles = Number(this.value)">
  </label>
</p>
```

<g-composer id="circles">
  <svg viewBox="0 0 100 100" width="100">
    <defs g-for="n of circles">
      <circle
        r="4"
        g-bind:cx="((n % 10) * 10) + 5" 
        g-bind:cy="(Math.floor(n / 10) * 10) + 5" 
        fill="red"/>
    </defs>
  </svg>
  <g-script type="data">
    {circles: 40}
  </g-script>
</g-composer>

<p>
<label>Change the number of circles:
  <input type="range" max="100" value="40"
  oninput="document.querySelector('#circles').data.circles = Number(this.value)">
  </label>
</p>

> See more about [`g-for`](../in-depth/templating/lists.md)

## `g-if`

Show or hide an element conditionally.

```html {6}
<g-composer id="odd_even">
  <template>
    <svg viewBox="0 0 100 100" width="100">
      <defs g-for="n of 100">
        <circle
          g-if="((n + 1) % 2 === 0 && even) || ((n + 1) % 2 !== 0 && odd)"
          r="4"
          g-bind:cx="((n % 10) * 10) + 5" 
          g-bind:cy="(Math.floor(n / 10) * 10) + 5" 
          fill="red"/>
      </defs>
    </svg>
  </template>
  <script type="data">
    {
      odd: true,
      even: true
    }
  </script>
</g-composer>
```
```html
<p>
  <label>
    <input type="checkbox" checked
           oninput="document.querySelector('#odd_even').data.odd = this.checked">
    show odd
  </label>
  <label>
    <input type="checkbox" checked
           oninput="document.querySelector('#odd_even').data.even = this.checked">
    show even
  </label>
</p>
```

<g-composer id="odd_even">
  <svg viewBox="0 0 100 100" width="100">
    <defs g-for="n of 100">
      <circle
        g-if="((n + 1) % 2 === 0 && even) || ((n + 1) % 2 !== 0 && odd)"
        r="4"
        g-bind:cx="((n % 10) * 10) + 5" 
        g-bind:cy="(Math.floor(n / 10) * 10) + 5" 
        fill="red"/>
    </defs>
  </svg>
  <g-script type="data">
    {
      odd: true,
      even: true
    }
  </g-script>
</g-composer>

<p>
  <label>
    <input type="checkbox" checked
           oninput="document.querySelector('#odd_even').data.odd = this.checked">
    show odd
  </label>
  <label>
    <input type="checkbox" checked
           oninput="document.querySelector('#odd_even').data.even = this.checked">
    show even
  </label>
</p>

> See more about [`g-if`](../in-depth/templating/conditional.md).

## `g-content`

Defines the element content.

```html {6,10}
<g-composer id="content">
  <template>
    <svg viewBox="0 0 100 100" width="100">
      <rect x="0" y="0" width="100" height="100" fill="green"/>
      <text style="font-size:20px; fill:white"
            g-content="title"
            x="5" 
            y="40"></text>
      <text style="font-size:12px; fill:white"
            g-content="subtitle"
            x="5" 
            y="65"></text>
    </svg>
  </template>
  <script type="data">
    {
      title: 'hello',
      subtitle: 'world'
    }
  </script>
</g-composer>
```
```html
<p>
  <label>title: 
    <input type="text" value="hello"
           oninput="document.querySelector('#content').data.title = this.value">
  </label>
</p>
<p>
  <label>subtitle: 
    <input type="text" value="world"
           oninput="document.querySelector('#content').data.subtitle = this.value">
  </label>
</p>
```

<g-composer id="content">
  <svg viewBox="0 0 100 100" width="100">
    <rect x="0" y="0" width="100" height="100" fill="green"/>
    <text style="font-size:20px; fill:white"
          g-content="title"
          x="5" 
          y="40"></text>
    <text style="font-size:12px; fill:white"
          g-content="subtitle"
          x="5" 
          y="65"></text>
  </svg>
  <g-script type="data">
    {
      title: 'hello',
      subtitle: 'world'
    }
  </g-script>
</g-composer>

<p>
  <label>title: 
    <input type="text" value="hello"
           oninput="document.querySelector('#content').data.title = this.value">
  </label>
</p>
<p>
  <label>subtitle: 
    <input type="text" value="world"
           oninput="document.querySelector('#content').data.subtitle = this.value">
  </label>
</p>

> See more about [`g-content`](../in-depth/templating/content). 
