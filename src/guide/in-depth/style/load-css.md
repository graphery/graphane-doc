---
outline: deep
---

# Load External CSS

You can define load an external CSS file in the template with
a `<link rel="stylesheet" href="file.css">` tag.

```html {3}
<g-composer>
  <template>
    <link rel="stylesheet" href="/style.css">
    <svg viewBox="0 0 100 100">
      <defs g-for="value of data">
        <circle :cx="value.x"
                :cy="value.y"
                :r="value.radix"
                :class="value.class"/>
      </defs>
    </svg>
    <script type="data">
      "x";"y";"radix";"class"
      20;20;20;"regular"
      45;45;30;"warning"
      80;80;10;"error"
    </script>
  </template>
</g-composer>
```

<g-composer svg-src="../../../svg/circles.class.svg" data-src="../../../data/class.csv"></g-composer>


