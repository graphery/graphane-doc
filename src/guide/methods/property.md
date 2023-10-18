---
outline: deep
---

# `.methods` property

You can access and manipulate, externally to the component, the functions included into
the `.methods` property of the `g-template`.

```html
<g-template>
  <svg viewBox="0 0 100 100">
    <rect x="5" y="5" width="90" height="90" fill="red"/>
  </svg>
  <script type="methods">
    function change() {
      const rect = $.svg.querySelector('rect');
      if (rect.fill() === 'red') {
        rect.fill('green');
      } else {
        rect.fill('red');
      }
    }
  </script>
</g-template>
```

```html {4}
<button id="load">click here to load</button>
<script>
  document.querySelector('#load').addEventListener('click', () => {
    document.querySelector('g-template').methods.change();
  });
</script>
```

<g-template>
  <svg viewBox="0 0 100 100">
    <rect x="5" y="5" width="90" height="90" fill="red"/>
  </svg>
  <g-script type="methods">
    function change() {
      const rect = $.svg.querySelector('rect');
      if (rect.fill() === 'red') {
        rect.fill('green');
      } else {
        rect.fill('red');
      }
    }
  </g-script>
</g-template>

<button onclick="document.querySelector('g-template').methods.change()">click here to 
change</button>

You can update, add or remove methods. When a change occurs in the `.methods` object, the SVG
graphic will be automatically updated with the new data, keeping the view up-to-date at all times.

