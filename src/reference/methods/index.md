---
outline: deep
---

# Methods

`script type="methods"` and `methods-src` attribute are specifically designed to insert methods into
the `g-composer` component.

```html
<g-composer>
  <script type="methods">
    function message() {
      alert('hello world');
    }
  </script>
</g-composer>
```

### Content

Component content.

- [content](content.md) - the source code with the Javascript functions.


### Attribute

Component attribute.

- [src](src.md) - the path to the external resource with the Javascript 
object with the methods.


## Property

Component property:

- [`.methods`](property.md) - object of `g-composer`with all functions defined as methods.



