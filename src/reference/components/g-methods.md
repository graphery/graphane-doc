---
outline: deep
---

# `<g-methods></g-methods>`

`g-methods` web component is specifically designed to insert methods into the `g-svg` component. The
Javascript Object with the methods may be embedded within the content of the component or linked as
an external resource.

```html
<g-svg>
  <g-methods>{
    show() {
      alert('hello world');
    },
    message() {
      this.methods.show();
    }
  }</g-methods>
</g-svg>
```

### Attributes

Component attribute.

- [src](g-methods.attribute.src.md) - the path to the external resource with the Javascript 
object with the methods.

### Content

Component content.

- [content](g-methods.content.md) - the source code with the Javascript object with the methods.



