---
outline: deep
---

# Composer

Graphane Composer is designed to facilitate the creation of dynamic and interactive visualizations
by combining the power of the **SVG markup template**, dynamic and reactive **data** and 
**methods** for handling interactivity and data transformation.

The goal is to enable designers and developers **to build complex graphics efficiently**, while
benefiting from data binding and interactivity. To ensure smooth rendering and optimal performance,
the system includes mechanisms specifically designed to efficiently update the visualization when
the underlying data changes.

## Load

To get started, you need to include the Graphane Composer in your page. This can be done by adding a
script tag with the source pointing to the component file into the CDN:

```html
<script src="https://cdn.graphery.online/graphane/0.1.0-alpha.7/component/composer.js"></script>
```

::: details Understanding the CDN path

This is the detailed description of each URL part:

```
https://cdn.graphery.online/graphane/0.1.0-alpha.7/component/composer.js
|-----|--------------------|--------|-------------|---------|-----------|
   |            |               |          |           |          |-----> filename
   |            |               |          |           |----------------> kind
   |            |               |          |----------------------------> version
   |            |               |---------------------------------------> package
   |            |-------------------------------------------------------> domain
   |--------------------------------------------------------------------> protocol
```
:::

Graphane runs dynamically in the browser, and does not require compiling or transpiling at
development time.


## `g-composer`

By leveraging the web component Graphane Composer, you can enhance your content with visually
compelling graphics and visualizations without requiring extensive code modifications or specific
framework dependencies.

Graphane is based on `<g-composer></g-composer>` tag, the main component than include all other
elements.

```html
<g-composer>
  <!-- other elements -->
</g-composer>
```

## SVG

The first child is an SVG used as [template](../templating/).

```html {2-7}
<g-composer>
  <svg viewBox="0 0 100 100">
    <defs g-for="x of 3">
      <circle cx="50" cy="50" g-bind:r="(x + 1) * (48 / 3)"
              fill="none" stroke="black" stroke-width="1"/>
    </defs>
  </svg>
</g-composer>
```

<g-composer>
  <svg viewBox="0 0 100 100">
    <defs g-for="x of 3">
       <circle cx="50" cy="50" g-bind:r="(x + 1) * (48 / 3)" 
               fill="none" stroke="black" stroke-width="1"/>
    </defs>
  </svg>
</g-composer>


The standard SVG format is enhanced with **attribute-based directives** that allows to generate
visualizations in an intuitive way, focusing efforts on design and data, avoiding the need for
complex development. Any designer with a little programming knowledge can make great data-driven
designs.

- [`g-bind`](../templating/binding) (or the shorthand `:`): dynamically bind values to 
  attributes and styles.
- [`g-for`](../templating/lists): render the element block multiple times based on the data.
- [`g-if`](../templating/conditional): show an element conditionally.
- [`g-content`](../templating/content): update the element content.
- [`g-on`](../templating/events) (or the shorthand `@`): attach an event listener to the element.

## Data

We can create visualizations using SVG-based templates uploading [data](../data/) in CSV or JSON
formats, and they will be available for use in the template directly. To load the data, we need to
use the `script` tag indicating that it is `type="data"` and a source with `src`.

```html {8}
<g-composer>
  <svg viewBox="0 0 100 100">
    <defs g-for="x of circles">
      <circle cx="50" cy="50" g-bind:r="(x + 1) * (48 / circles)"
              fill="none" stroke="black" stroke-width="1"/>
    </defs>
  </svg>
  <script type="data" src="/data/circles.json"></script>
</g-composer>
```

<g-composer>
  <svg viewBox="0 0 100 100">
    <defs g-for="x of circles">
       <circle cx="50" cy="50" g-bind:r="(x + 1) * (48 / circles)" 
               fill="none" stroke="black" stroke-width="1"/>
    </defs>
  </svg>
  <g-script type="data" src="../../data/circles.json"></g-script>
</g-composer>

In some case it is easier to include the data directly into the `script` with `type="data"`. We can
insert CSV o JSON formats into the tag:

```html {8-12}
<g-composer>
  <svg viewBox="0 0 100 100">
    <defs g-for="x of circles">
      <circle cx="50" cy="50" g-bind:r="(x + 1) * (48 / circles)"
              fill="none" stroke="black" stroke-width="1"/>
    </defs>
  </svg>
  <script type="data">
    {
      "circles": 5
    }
  </script>
</g-composer>
```

<g-composer>
  <svg viewBox="0 0 100 100">
    <defs g-for="x of circles">
       <circle cx="50" cy="50" g-bind:r="(x + 1) * (48 / circles)" 
               fill="none" stroke="black" stroke-width="1"/>
    </defs>
  </svg>
  <g-script type="data">{
    circles: 5
  }</g-script>
</g-composer>

## Methods

You can add [methods](../methods/) for event handling with a simple 
`<script type="methods"></script>`. It is possible to include the code directly in the tag or
linked with the scr attribute. All functions defined into this tag are available from the template.

```html {13-22}
<g-composer id="reactive">
  <svg viewBox="0 0 100 100" g-on:click="update" style="cursor: pointer">
    <defs g-for="x of circles">
      <circle cx="50" cy="50" g-bind:r="(x + 1) * (48 / circles)"
              fill="none" stroke="black" stroke-width="1"/>
    </defs>
  </svg>
  <script type="data">
    {
      "circles": 5
    }
  </script>
  <script type="methods">
    function update(evt) {
      evt.preventDefault();
      if (evt.ctrlKey) {
        $.data.circles--;
      } else {
        $.data.circles++;
      }
    }
  </script>
</g-composer>
s
<p>click add circles, ctrl+click reduces circles</p>
```

<g-composer id="reactive">
  <svg viewBox="0 0 100 100" g-on:click="update" style="cursor: pointer">
    <defs g-for="x of circles">
      <circle cx="50" cy="50" g-bind:r="(x + 1) * (48 / circles)"
               fill="none" stroke="black" stroke-width="1"/>
    </defs>
  </svg>
  <g-script type="data">
    {
      "circles": 5
    }
  </g-script>
  <g-script type="methods">
    function update(evt) {
      evt.preventDefault();
      if (evt.ctrlKey) {
        $.data.circles--;
      } else {
        $.data.circles++;
      }
    }
  </g-script>
</g-composer>
<p style="font-size: small">click add circles, ctrl+click reduces circles</p>


## External resources

To link the external resources, you can use attributes of `g-composer` component.

- The `svg-src` attribute specifies the path to the SVG file.
- The `data-src` attribute indicates the location of the data source.
- The `methods-src` attribute indicates the location of methods.

Here is the previous example with external resources:

```html {2-4}
<g-composer
  svg-src="/svg/circles.svg"
  data-src="/data/circles.json"
  methods-src="/methods/circles.js">
</g-composer>
<p>click add circles, ctrl+click reduces circles</p>
```

<g-composer svg-src="../svg/circles.svg"
data-src="../data/circles.json"
methods-src="../methods/circles.js"></g-composer>
<p style="font-size: small">click add circles, ctrl+click reduces circles</p>

That's it! You've completed the quick start guide for using Graphane to render a simple SVG and
associate them with data.

