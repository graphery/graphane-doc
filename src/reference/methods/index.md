---
outline: deep
---

# `script type="methods`

`script type="methods"` and `methods-src` attribute are specifically designed to insert methods into
the `g-template` component.

```html
<g-template>
  <script type="methods">
    function message() {
      alert('hello world');
    }
  </script>
</g-template>
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

- [`.methods`](property.md) - object of `g-template`with all functions defined as methods.



