---
outline: deep
---

# Attribute Class

## `g-bind`

You can be used `g-bind`, or the shorthand `:`, with the `class` attribute to dynamically bind CSS
classes to an element. You can bind a single class or an array of classes.

```html {19}
<g-composer>
  <template>
    <style>
      .regular {
        fill : green;
      }
      .warning {
        fill : blue;
      }
      .error {
        fill : red;
      }
    </style>
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

<g-composer svg-src="../../../svg/circles.class.svg" data-src="../../../data/class.csv"></g-composer>`

## API


By the Graphane SVG API, you can use the `.classList` object and its methods:

- `.classList.contains( class )` - returns true if the list contains the given class, otherwise
  false.
- `.classList.add( class )` - adds the specified class.
- `.classList.remove( class )` - removes the specified class.
- `.classList.replace( oldClass, newClass)` - replaces oldClass with newClass.
- `.classList.toggle( class )` - removes class from if it exists or adds class if it doesn't.

```js{2-3,5}
$.svg.querySelector('rect')
     .classList.add('rectangle')
     .classList.add('regular');
$.svg.querySelector('text').x(10).y(100).content('Alarm')
     .classList.add('message');
```

