---
outline: deep
---

# Data property

The `g-svg` component acts as a bridge between the data and the SVG template engine, facilitating
the seamless integration of data updates with the visual output. When the data changes, the
framework automatically updates the corresponding SVG elements, ensuring that the view accurately
reflects the latest information.

The `.data` property provides a convenient interface for managing the data. You can easily add,
remove, or modify data points, triggering immediate updates to the visual representation. This
flexibility allows for agile development and rapid iteration, as developers can experiment with
different datasets and instantly observe the visual impact.

## Attribute with simple key and value

In the `.data` attribute you can directly include data in `key: value` format, which is useful only
with very simple visualisations, like some of the examples we use in this guide, but is not
sufficient when you want to make more complex visualisations.

### Example

```html

<g-svg data="width: 80; height: 80" id="circle">
  <svg viewBox="0 0 100 100">
    <rect x="10" y="10" fill="green"
          g-bind:width="data.width"
          g-bind:height="data.height"/>
  </svg>
</g-svg>
```

<g-svg data="width: 80; height: 80" id="rect1">
  <svg viewBox="0 0 100 100">
    <rect x="0" y="0" fill="green"
          g-bind:width="data.width" 
          g-bind:height="data.height"/>
  </svg>
</g-svg>

## Property object

You can manipulate the `.data` object of the `g-svg` component directly from Javascript. When a
change occurs in this object, the SVG graphic will be automatically updated with the new data,
keeping the view up-to-date at all times.

### Example

```html
<g-svg data="width: 80; height: 80" id="rect2">
  <svg viewBox="0 0 100 100">
    <rect x="0" y="0" fill="green"
          g-bind:width="data.width" 
          g-bind:height="data.height"/>
  </svg>
</g-svg>
<p>
  <label>
    width: <input type="range" min="0" max="100" value="80"
                  oninput="document.querySelector('#rect2').data.width=this.value">
  </label>
  <label>
    height: <input type="range" min="0" max="100" value="80"
                   oninput="document.querySelector('#rect2').data.height=this.value">
  </label>
</p>
```

<g-svg data="width: 80; height: 80" id="rect2">
  <svg viewBox="0 0 100 100">
    <rect x="0" y="0" fill="green"
          g-bind:width="data.width" 
          g-bind:height="data.height"/>
  </svg>
</g-svg>
<p>
  <label>
    width: <input type="range" min="0" max="100" value="80"
                  oninput="document.querySelector('#rect2').data.width=this.value">
  </label>
  <label>
    height: <input type="range" min="0" max="100" value="80"
                   oninput="document.querySelector('#rect2').data.height=this.value">
  </label>
</p>