---
outline: deep
---

# Template

The template combines the power of Scalable Vector Graphic (SVG) declarative language with
directives to define how the graphic is built from the data.

<g-editor href="#example1"></g-editor>

<g-composer id="example1">
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
complex development.

- [`g-bind`](#g-bind) (or the shorthand `:`): dynamically bind values to attributes.
- [`g-for`](#g-for): render the element block multiple times based on the data.
- [`g-if`](#g-if): show an element conditionally.
- [`g-content`](#g-content): update the element content.

In the following we will describe how it works:

## `g-bind`

The `g-bind:` directive, or the abbreviation `:`, followed by an attribute name, dynamically binds 
data values to attributes.

In this example, the circle radius (`r` attribute) is defined with `size` data value with 
`g-bind:r="size"`.

<g-editor href="#circle"></g-editor>

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

If you change the value of `size`, the `r` attribute changes.

> See more about [`g-bind`](../in-depth/templating/binding.md)

## `g-for`

Renders a block defined with the `defs` tag multiple times depending on the data. The directive
dynamically evaluates a `case of value` or `(case, index) of value` expression. Value can be a 
number or an array.

In this example, a number of `circles` is displayed.

<g-editor href="#circles"></g-editor>

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

Changing the value of `circles` changes the number of circles displayed.

> See more about [`g-for`](../in-depth/templating/lists.md)

## `g-if`

Show or hide an element conditionally by an expression based on the data.

In this example, the odd and even circles are displayed if the values `odd` and `event` are true or
false.

<g-editor href="#odd_even"></g-editor>

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

Include data values as the element content.

In this example, the text content is defined with `title` and `subtitle` data values.

<g-editor href="#content"></g-editor>

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
