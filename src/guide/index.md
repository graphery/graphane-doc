---
outline: deep
---

# User Guide

Graphane (is a **micro-framework** that provides designers and developers with a simple tool for
creating interactive and customizable graphics, diagrams, and visualizations. It combines the
convenience of **web components**, compatible with the most popular frameworks, a complete system of
**templates** based in directives, and a robust, high-performance library.

Graphane simplifies the process of **creating data-driven charts and graphs**. It offers a wide
range of intuitive tools that make it easy to link data to various graphical elements. The main
focus of Graphane is on creating data dynamic visualizations. It allows designers and developers to
incorporate interactivity and data reactivity into their graphics. This means that users can
actively engage with the visualizations and explore the data in a meaningful way.

In this guide, we will explain step by step how Graphane aims to simplify the process of creating
visualizations from data.

### Template

By leveraging the Graphane template web component, you can enhance your content with visually
compelling graphics and visualizations without requiring extensive code modifications or specific
framework dependencies.

Graphane is **based on**:

- [`<g-template></g-template>`](./components) the main component than include the graph template.

<g-template>
  <svg viewBox="0 0 100 100">
    <defs g-for="x of 3">
       <circle cx="50" cy="50" g-bind:r="(x + 1) * 10" 
               fill="none" stroke="black" stroke-width="1"/>
    </defs>
  </svg>
</g-template>

```html
<g-template>
  <svg viewBox="0 0 100 100">
    <defs g-for="x of 3">
      <circle cx="50" cy="50" g-bind:r="(x + 1) * 10"
              fill="none" stroke="black" stroke-width="1"/>
    </defs>
  </svg>
</g-template>
```

The standard SVG format is enhanced with **attribute-based directives** that allows to generate
visualizations in an intuitive way, focusing efforts on design and data, avoiding the need for
complex development. Any designer with a little programming knowledge can make great programming can
make great data-driven designs.

- [`g-bind`](./templating/binding) (or the shorthand `:`): dynamically bind values to attributes and
  styles.
- [`g-for`](./templating/lists): render the element block multiple times based on the data.
- [`g-if`](./templating/conditional): show an element conditionally.
- [`g-content`](./templating/content): update the element content.
- [`g-on`](./templating/events) (or the shorthand `@`): attach an event listener to the element.

### Data

We can create visualizations using SVG-based templates uploading data in CSV or JSON formats, and
they will be available for use in the template directly. To load the data, we need to use the
`script` tag indicating that it is of type `data` and a source with `src`.

<g-template>
  <svg viewBox="0 0 100 100">
    <defs g-for="x of data.circles">
       <circle cx="50" cy="50" g-bind:r="(x + 1) * 10" 
               fill="none" stroke="black" stroke-width="1"/>
    </defs>
  </svg>
  <g-script type="data" src="/data/guide.json"></g-script>
</g-template>

```html
<g-template>
  <svg viewBox="0 0 100 100">
    <defs g-for="x of data.circles">
      <circle cx="50" cy="50" g-bind:r="(x + 1) * 10"
              fill="none" stroke="black" stroke-width="1"/>
    </defs>
  </svg>
  <script type="data" src="/data/guide.json"></script>
</g-template>
```

In some case it is easier to include the data directly into the `script` with type `data`. We can
insert CSV o JSON data into the tag:

```html
<script type="data">
  {
    "circles": 3
  }
</script>
```

If we dynamically update the data, the template automatically is processed and the new graph is
created again. The reactivity is completed, we can update all data in deeps without problems.

<g-template id="reactive">
  <svg viewBox="0 0 100 100">
    <defs g-for="x of data.circles">
      <circle cx="50" cy="50" g-bind:r="(x + 1) * (48 / data.circles)"
               fill="none" stroke="black" stroke-width="1"/>
    </defs>
  </svg>
  <g-script type="data" src="/data/guide.json"></g-script>
</g-template>

<label>Update the data.circles:
<input type="range" value="3" min="0" max="25"
oninput="document.querySelector('#reactive').data.circles = Number(this.value)">
</label>

```html
<g-template id="reactive">
  <svg viewBox="0 0 100 100">
    <defs g-for="x of data.circles">
      <circle cx="50" cy="50" g-bind:r="(x + 1) * (50 / data.circles)"
              fill="none" stroke="black" stroke-width="1"/>
    </defs>
  </svg>
  <script type="data" src="/data/guide.json"></script>
</g-template>
```

```html
<label>Update the data.circles:
  <input type="range" value="3" min="0" max="25"
         oninput="document.querySelector('#reactive').data.circles = Number(this.value)">
</label>
```

### Imperative

When the template system is not enough, you can use **Javascript functions supported by the Graphane
SVG library**. The API of the library is very similar to the SVG structure and is easy to use. If
you know the SVG format, you know the Graphane API. If you learn the Graphane API, you learn the SVG
format.

### Integration

Graphane is designed as a web component, making **it easy to integrate and reuse within popular web
frameworks**. Graphane microframework is designed to have a lightweight footprint, enabling you to
incorporate dynamic SVG functionality without adding significant overhead to your projects.

### Extensibility

Graphane is highly extensible, allowing developers to **customize and extend its functionality to
suit their specific needs**. The framework provides a rich set of APIs and configuration options,
enabling you to fine-tune every aspect of your graphs and charts. Graphane empowers you with the
flexibility to create visually unique and engaging data visualizations.
