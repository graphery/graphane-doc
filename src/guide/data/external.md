---
outline: deep
---

# Load data

In production environments or when accessing remote servers, the `<script type="data">`
with the `src` attribute makes it very easy to indicate the source of the data. By utilizing these
attributes, you can seamlessly incorporate external data into their visualization.

```html {10}
<g-template>
  <svg viewBox="0 0 100 100">
    <defs g-for="value of data">
      <circle g-bind:cx="value.x"
              g-bind:cy="value.y"
              g-bind:r="value.radix"
              g-bind:fill="value.color"/>
    </defs>
  </svg>
  <script type="data" src="/data/circles.csv"></script>
</g-template>
```

<g-template>
  <svg viewBox="0 0 100 100">
    <defs g-for="value of data">
      <circle g-bind:cx="value.x"
              g-bind:cy="value.y"
              g-bind:r="value.radix"
              g-bind:fill="value.color"/>
    </defs>
  </svg>
  <g-script type="data" src="/data/circles.csv"></g-script>
</g-template>


To streamline the process further, it is even possible to forego the explicit use of the `script`
tag. Instead, designer and developers can directly include the `data-src` properties within
the `g-template` component itself, simplifying the overall structure of the code.

```html {3}
<g-template 
  svg-src="/svg/circles.svg" 
  data-src="/data/circles.csv">
</g-template>
```


