---
outline: deep
---

# Embebed data

The `script type="methods"` tag allow loading functions into the Graphane template component. You
can include functions in the code, and these functions are available into the template.

```html {13-25}
<g-composer>
  <svg viewBox="0 0 100 100" id="svg">
    <g @click="change" style="cursor: pointer;">
      <circle id="run"
              cx="50"
              cy="50"
              r="50"
              fill="red"/>
      <text x="36"
            y="53">click</text>
    </g>
  </svg>
  <script type="methods">
    const circle = $.svg.querySelector('circle');
    const text   = $.svg.querySelector('text');
    function change() {
      if (text.content() === 'click') {
        circle.fill('green');
        text.content('ok').x(44);
      } else {
        circle.fill('red');
        text.content('click').x(36);
      }
    }
  </script>
</g-composer>
```

<g-composer>
  <svg viewBox="0 0 100 100" id="svg">
    <g g-on:click="change" style="cursor: pointer;">
      <circle id="run"
              cx="50"
              cy="50"
              r="50"
              fill="red"/>
      <text x="36" 
            y="53">click</text>
    </g>
  </svg>
  <g-script type="methods">
    const circle = $.svg.querySelector('circle');
    const text   = $.svg.querySelector('text');
    function change() {
      if (text.content() === 'click') {
        circle.fill('green');
        text.content('ok').x(44);
      } else {
        circle.fill('red');
        text.content('click').x(36);
      }
    }
  </g-script>
</g-composer>

In this example, we define a `change()` function and use the function in the template as handler for
the event `click`. When the user clicks, the label is changed.

Only the named functions are translated to the template environment. Constants, variables, 
arrow function or anonymous functions are not linked to the template.

Into the methods code `$` is a reference to the Graphane template component. As a result, you
can access to the [$.svg](svg-access.md) element or the [$.data](./$.data.md) object.

::: warning 
In some environments the `<script type="methods"></script>` has conflicts. In these
cases, you can use alternatively `<g-script type="methods"></g-script>`.

```html
  <g-script type="methods">
    const text = $.svg.querySelector('text');
    function change() {
      if (text.content() === 'click') {
        text.content('ok').x(44);
      } else {
        text.content('click').x(36);
      }
    }
  </g-script>
```
:::

