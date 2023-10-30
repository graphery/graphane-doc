---
outline: deep
---

# Otto Neurath tribute

This example pays homage to the great sociologist, philosopher and data visualizer
[Otto Neurath](https://en.wikipedia.org/wiki/Otto_Neurath). He was the creator of Isotype (International System of Typographic Picture 
Education) describe in his book 
[International Picture Language](https://archive.org/details/internationalpic00neur/).

## Men

### one figure

The first step is to create the man's figure into a simple SVG.

<g-composer>
  <svg viewBox="0 0 400 270">
    <path d="M14,30L14,49L4,49L4,30C2,29,1,28,1,27L1,11C1,10,1,9,3,9L7,9L6.3,3
             C6,-1,11,-1,11.7,3L11,9L15,9C17,8.9,17,10,17,11L17,27C17,28,16,29,14,30Z"/>
  </svg>
</g-composer>

```html
<g-composer>
  <svg viewBox="0 0 400 270">
    <path d="M14,30L14,49L4,49L4,30C2,29,1,28,1,27L1,11C1,10,1,9,3,9L7,9L6.3,3
             C6,-1,11,-1,11.7,3L11,9L15,9C17,8.9,17,10,17,11L17,27C17,28,16,29,14,30Z"/>
  </svg>
</g-composer>
```

### one hundred figures

Now, we can use `g-for` directive to create 100 shapes (5 rows with 20 shapes per row). To place 
each shape we use `g-bind:` directive on the `transform` attribute and move it to its position.

<g-composer id="all">
  <svg viewBox="0 0 400 270">
    <defs g-for="y of 5">
      <defs g-for="x of 20">
      <path g-bind:transform="translate(x * 20, y * 55)"
            d="M14,30L14,49L4,49L4,30C2,29,1,28,1,27L1,11C1,10,1,9,3,9L7,9L6.3,3
               C6,-1,11,-1,11.7,3L11,9L15,9C17,8.9,17,10,17,11L17,27C17,28,16,29,14,30Z"/>
      </defs>
    </defs>
  </svg>
</g-composer>

```html
<g-composer>
  <svg viewBox="0 0 400 270">
    <defs g-for="y of 5">
      <defs g-for="x of 20">
        <path g-bind:transform="translate(x * 20, y * 55)"
              d="M14,30L14,49L4,49L4,30C2,29,1,28,1,27L1,11C1,10,1,9,3,9L7,9L6.3,3
               C6,-1,11,-1,11.7,3L11,9L15,9C17,8.9,17,10,17,11L17,27C17,28,16,29,14,30Z"/>
      </defs>
    </defs>
  </svg>
</g-composer>
```

### Conditional show

We can use `g-if` directive for define how many figures are displayed. With the `data` attribute
of `g-composer` componente we create a simple object with a `value` property.

<g-composer data="{value: 50}" id="show">
  <svg viewBox="0 0 400 270">
    <defs g-for="y of 5">
      <defs g-for="x of 20">
      <path g-if="((y * 20) + x < value)"
            g-bind:transform="translate(x * 20, y * 55)"
            d="M14,30L14,49L4,49L4,30C2,29,1,28,1,27L1,11C1,10,1,9,3,9L7,9L6.3,3
               C6,-1,11,-1,11.7,3L11,9L15,9C17,8.9,17,10,17,11L17,27C17,28,16,29,14,30Z"/>
      </defs>
    </defs>
  </svg>
</g-composer>

<label>Update the value:
  <input type="range" min="0" max="100" value="50"
         oninput="document.querySelector('g-composer#show').data.value = this.value"/>
</label>

```html
<g-composer data="{value: 50}" id="show">
  <svg viewBox="0 0 400 270">
    <defs g-for="y of 5">
      <defs g-for="x of 20">
        <path g-if="((y * 20) + x < value)"
              g-bind:transform="translate(x * 20, y * 55)"
              d="M14,30L14,49L4,49L4,30C2,29,1,28,1,27L1,11C1,10,1,9,3,9L7,9L6.3,3
               C6,-1,11,-1,11.7,3L11,9L15,9C17,8.9,17,10,17,11L17,27C17,28,16,29,14,30Z"/>
      </defs>
    </defs>
  </svg>
</g-composer>
```
```html
<label>Update the value: 
  <input type="range" min="0" max="100" value="50"
         oninput="document.querySelector('g-composer#show').data.value = this.value"/>
</label>
```

### Conditional color

Alternatively we can change the color for each figure by the value. In this case, we use 
`g-bind` on `style` attribute, against `g-if`.

<g-composer data="{value: 50}" id="color">
  <svg viewBox="0 0 400 270">
    <defs g-for="y of 5">
      <defs g-for="x of 20">
        <path g-bind:style="{fill: ((y * 20) + x < value) ? '' : 'grey'}"
              g-bind:transform="translate(x * 20, y * 55)"
              d="M14,30L14,49L4,49L4,30C2,29,1,28,1,27L1,11C1,10,1,9,3,9L7,9L6.3,3
                 C6,-1,11,-1,11.7,3L11,9L15,9C17,8.9,17,10,17,11L17,27C17,28,16,29,14,30Z"/>
      </defs>
    </defs>
  </svg>
</g-composer>

<label>Update the value: 
  <input type="range" min="0" max="100" value="50"
       oninput="document.querySelector('g-composer#color').data.value = this.value"/>
</label>

```html
<g-composer data="{value: 50}">
  <svg viewBox="0 0 400 270">
    <defs g-for="y of 5">
      <defs g-for="x of 20">
        <path :style="{fill: ((y * 20) + x < value) ? '' : 'grey'}"
              :transform="translate(x * 20, y * 55)"
              d="M14,30L14,49L4,49L4,30C2,29,1,28,1,27L1,11C1,10,1,9,3,9L7,9L6.3,3
                   C6,-1,11,-1,11.7,3L11,9L15,9C17,8.9,17,10,17,11L17,27C17,28,16,29,14,30Z"/>
      </defs>
    </defs>
  </svg>
</g-composer>
```
```html
<label>Update the value:
  <input type="range" min="0" max="100" value="50"
         oninput="document.querySelector('g-composer#color').data.value = this.value"/>
</label>
```