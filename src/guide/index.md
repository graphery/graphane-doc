---
outline: deep
---

# User Guide

Graphane (gSVG) is a **micro-framework** that provides designers and developers with a simple
tool for creating interactive and customizable graphics, diagrams, and visualizations. It combines
the convenience of **web components**, compatible with the most popular frameworks, a complete
system of **SVG templates** based in directives, and a robust, high-performance **Javascript**
library.

Graphane **simplifies the process of creating data-driven charts and graphs**. It offers a wide
range of intuitive tools that make it easy to link data to various graphical elements. The main
focus of Graphane is on creating data dynamic visualizations. It allows designers and developers
to incorporate interactivity and data reactivity into their graphics. This means that users can
actively engage with the visualizations and explore the data in a meaningful way.

In this guide, **we will explain step by step** how Graphane aims to simplify the process of
creating visualizations from data.

### Web Component

The Web Components provide **encapsulation**, allowing us to build reusable UIs that can be used in
different projects. By leveraging the Graphane web component, you can enhance your content with
visually compelling graphics and visualizations without requiring extensive code modifications or
specific framework dependencies.

Graphane is **based on**:

- [`<g-svg></g-svg>`](./components) the main component than include the SVG template.
- [`<g-data></g-data>`](./data) auxiliary components to load the data.
- [`<g-methods></g-methods>`](./methods) auxiliary components to add Javascript-based
  functionality.

### SVG Template

On the **declarative** approach, **the SVG format is enhanced with an attribute-based directive
system** that allows to generate visualizations in an intuitive way, focusing efforts on design and
data, avoiding the need for complex development. Any designer with a little programming knowledge
can make great programming can make great data-driven designs.

Graphane extends the standard SVG format with a set of directives that allow to generate the
graphics from the supplied data. Graphics from the supplied data. These directives are special
attributes that allow complex logic and dynamic rendering:

- [`g-bind`](./templating/binding) (or the shorthand `:`): dynamically bind values to attributes and
  styles.
- [`g-for`](./templating/lists): render the element block multiple times based on the data.
- [`g-if`](./templating/conditional): show an element conditionally.
- [`g-content`](./templating/content): update the element content.
- [`g-on`](./templating/events) (or the shorthand `@`): attach an event listener to the element.

### Javascript Library

On the **imperative** approach, when the template system is not enough, you can use the Graphane
library. The library API is very close to the SVG structure. It is straightforward to use. If you
know the SVG format, you know Graphane API. If you learn Graphane API, you learn the SVG format.

**Graphane Javascript Library strongly emphasizes performance optimization**, ensuring smooth
rendering and interactivity. The library utilizes modern web technologies to offload expensive
calculations and animations, resulting in a responsive and efficient graphing experience for end
users.

### Integration

Graphane is designed as a Web Component and a Javascript Library, making **it easy to integrate
and reuse within various web frameworks and environments**. Graphane microframework is designed
to have a lightweight footprint, enabling you to incorporate dynamic SVG functionality without
adding significant overhead to your projects.

### Extensibility

Graphane is highly extensible, allowing developers to **customize and extend its functionality
to suit their specific needs**. The framework provides a rich set of APIs and configuration options,
enabling you to fine-tune every aspect of your graphs and charts. Graphane empowers you with the
flexibility to create visually unique and engaging data visualizations.
