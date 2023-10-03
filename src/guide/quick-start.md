---
outline: deep
---

# Quick Start

## Step 1: Load

To get started, you'll need to include the Graphane component in your HTML file. This can be done by
adding a script tag with the source pointing to the component file into the CDN:

```html
<script src="https://cdn.graphery.online/graphane/0.1.0-alpha.1/component/template.js"></script>
```

::: details Understanding the CDN path

This is the detailed description of each URL part:

```
https://cdn.graphery.online/graphane/0.1.0-alpha.1/component/template.js
|-----|--------------------|--------|-------------|---------|-----------|
   |            |               |          |           |          |-----> filename
   |            |               |          |           |----------------> kind
   |            |               |          |----------------------------> version
   |            |               |---------------------------------------> package
   |            |-------------------------------------------------------> domain
   |--------------------------------------------------------------------> protocol
```

:::

## Step 2: `g-template` component

Once the Graphane is loaded, you can utilize the `g-template` component in your HTML code. This
component is responsible for rendering the SVG and managing the associated data.

```html
<g-template>
  <!-- add the content here -->
</g-template>
```

## Step 3: SVG

You can define the SVG template within the `svg` tag. This template will be used to render the SVG.
Here's an example:

```html
<g-template>
  <svg viewBox="0 0 100 100">
    <defs g-for="value of data">
      <circle g-bind:cx="value.x"
              g-bind:cy="value.y"
              g-bind:r="value.radix"
              g-bind:fill="value.color"/>
    </defs>
  </svg>
</g-template>
```

As you can see, the template includes directives such as `g-for` and `g-bind`. These directives are
part of the SVG template language specifically created to build SVG from data in a declarative way.

## Step 4: Data

To associate data with the SVG, you can use the `script type="data"` tag. This tag allows you to
specify the type of data (e.g., CSV, JSON) and provide the data source or directly include the data
inside.

```html
<g-template>
  <svg viewBox="0 0 100 100">
    <defs g-for="value of data">
      <circle g-bind:cx="value.x"
              g-bind:cy="value.y"
              g-bind:r="value.radix"
              g-bind:fill="value.color"/>
    </defs>
  </svg>
  <script type="data">
    "x";"y";"radix";"color"
    20;20;20;"red"
    45;45;30;"blue"
    80;80;10;"green"
  </script>
</g-template>
```

<g-template>
  <svg viewBox="0 0 100 100">
    <defs g-for="value of data">
      <circle g-bind:cx="value.x"
              g-bind:cy="value.y"
              g-bind:r="value.radix"
              g-bind:fill="value.color"/>
    </defs>
  </svg>
  <g-script type="data" src="/data/circles.csv"></g-script>
</g-template>

## Optional: use external resources

To link the SVG and CSV as resources, you can use the `svg-src` and `data-src` attributes of
`g-template` component.

- The `svg-src` attribute specifies the path to the SVG file.
- The `data-src` attribute indicates the location of the data source.

Here is the previous example with external resources:

```svg
<g-template svg-src="/svg/circles.svg" data-src="/data/circles.csv"></g-template>
```

<g-template svg-src="/svg/circles.svg" data-src="/data/circles.csv"></g-template>

That's it! You've completed the quick start guide for using Graphane to render a simple SVG and
associate them with data.