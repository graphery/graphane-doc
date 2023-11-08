---
outline: deep
---

# Methods content

- **Content**: a Javascript code with functions.

Only the function defined with `function` are included as methods. Variables, constant and other 
elements can be included in the content, but are not used in the template directly.

In the methods you can access to the component with the `$`, for example, `$.data` or `$.svg`.

## Example

```html
<g-composer data="message: 'hello world'">
  <svg viewBox="0 0 100 100">
    <rect x="1" y="1" width="98" height="98" stroke="black" stroke-width="2" fill="white"
          style="cursor: pointer"
          g-on:click="showMessage"/>
    <text x="20" y="52" style="cursor: pointer"
          g-on:click="showMessage">click me</text>
  </svg>
  <script type="methods">
  function showMessage () {
    alert($.data.message);
  }
  </script>
</g-composer>
```

<g-composer data="message: 'hello world'">
  <svg viewBox="0 0 100 100">
    <rect x="1" y="1" width="98" height="98" stroke="black" stroke-width="2" fill="white"
          style="cursor: pointer"
          g-on:click="showMessage"/>
    <text x="20" y="52" style="cursor: pointer"
          g-on:click="showMessage">click me</text>
  </svg>
  <g-script type="methods">
  function showMessage () {
    alert($.data.message);
  }
  </g-script>
</g-composer>
