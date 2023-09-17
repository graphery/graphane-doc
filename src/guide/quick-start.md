---
outline: deep
---

# Quick Started

## Step 1: Load

To get started, you'll need to include the Graphane component in your HTML file. This can be
done by adding a script tag with the source pointing to the component file into the CDN:

```html

<script src="https://cdn.Graphane.online/svg/2.0.0.beta.3/component/gsvg.js"></script>
```

::: details Understanding the CDN path

This is the detailed description of each URL part:

```
https://cdn.Graphane.online/svg/2.0.0.beta.3/component/gsvg.js
|-----|--------------------|---|------------|---------|-------|
   |            |            |       |           |        |---> filename
   |            |            |       |           |------------> kind
   |            |            |       |------------------------> version
   |            |            |--------------------------------> library
   |            |---------------------------------------------> domain
   |----------------------------------------------------------> protocol (use 'https')
```

:::

## Step 2: `g-svg` component

Once the Graphane library is loaded, you can utilize the `g-svg` component in your HTML code. This
component is responsible for rendering the SVG and managing the associated data.

```html

<g-svg>
  <!-- add the content here -->
</g-svg>
```

## Step 3: SVG template

After including the library and the `g-svg` component, you can define the SVG template within
the `g-svg` tag. This template will be used to render the SVG. Here's an example:

```html
<g-svg>
  <svg viewBox="0 0 100 100">
    <defs g-for="value of data">
      <circle g-bind:cx="value.x"
              g-bind:cy="value.y"
              g-bind:r="value.radix"
              g-bind:fill="value.color"/>
    </defs>
  </svg>
</g-svg>
```

As you can see, the template includes directives such as `g-for` and `g-bind`. These directives are
part of the SVG template language specifically created to build SVG from data in a declarative way.

## Step 4: Data

To associate data with the SVG, you can use the `g-data` component. This component allows you to
specify the type of data (e.g., CSV, JSON) and provide the data source or include directly the data
inside. Here's an example of how to include the `g-data` component:

```html
<g-svg>
  <svg viewBox="0 0 100 100">
    <defs g-for="value of data">
      <circle g-bind:cx="value.x"
              g-bind:cy="value.y"
              g-bind:r="value.radix"
              g-bind:fill="value.color"/>
    </defs>
  </svg>
  <g-data type="csv">
    "x";"y";"radix";"color"
    20;20;20;"red"
    45;45;30;"blue"
    80;80;10;"green"
  </g-data>
</g-svg>
```

<g-svg>
  <svg viewBox="0 0 100 100">
    <defs g-for="value of data">
      <circle g-bind:cx="value.x"
              g-bind:cy="value.y"
              g-bind:r="value.radix"
              g-bind:fill="value.color"/>
    </defs>
  </svg>
  <g-data type="csv" src="/circles.csv">  </g-data>
</g-svg>

## Optional: use external resources

To link the SVG and CSV as resources, you can use the `src` and `data-src` attributes of `g-svg`
component. 

- The `src` attribute specifies the path to the SVG file.
- The `data-src` attribute indicates the location of the data source.
- The `data-type` specifies the type of data being used (e.g., CSV, JSON). 

Here's a basic example:

```svg
<g-svg src="/circles.svg" data-src="/circles.csv" data-type="csv"></g-svg>
```

That's it! You've completed the quick start guide for using Graphane to render a simple SVG and
associate them with data.