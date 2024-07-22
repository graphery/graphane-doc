---
outline: deep
---

# Load Configuration as External Resource

In production environments or when you want to share the configuration in serval components,
the `<script type="config">`with the `src` attribute makes it straightforward to indicate the source
of the functions.

```html{13}
<g-composer style="width:50%">
  <template>
    <svg g-bind:viewBox="[0, 0, $.config.width, $.config.height]">
      <defs g-for="(record, n) of data">
        <rect g-bind:x="n * ($.config.width / (data.length + 1))"
              g-bind:y="$.config.height - ($.config.height * record.value / data.$max('value'))"
              g-bind:height="$.config.height * record.value / data.$max('value')"
              g-bind:width="$.config.width / (data.length + 1)"
              g-bind:fill="$.config.colors[n]"/>
      </defs>
    </svg>
  </template>
  <script type="config" src="/config/general.json"></script>
  <script type="data">[
    {name: "A", value: 10},
    {name: "B", value: 32},
    {name: "C", value: 24},
    {name: "E", value: 5},
    {name: "F", value: 17},
  ]</script>
</g-composer>
```

<g-composer style="width:50%">
<svg g-bind:viewBox="[0, 0, $.config.width, $.config.height]">
  <defs g-for="(record, n) of data">
    <rect g-bind:x="n * ($.config.width / (data.length + 1))"
          g-bind:y="$.config.height - ($.config.height * record.value / data.$max('value'))"
          g-bind:height="$.config.height * record.value / data.$max('value')"
          g-bind:width="$.config.width / (data.length + 1)"
          g-bind:fill="$.config.colors[n]"/>
  </defs>
</svg>
<g-script type="config" src="../../../config/general.json"></g-script>
<g-script type="data">[
  {name: "A", value: 10},
  {name: "B", value: 32},
  {name: "C", value: 24},
  {name: "E", value: 5},
  {name: "F", value: 17},
]</g-script>
</g-composer>


It is possible to directly include the `config-src` properties within the `g-composer` component
itself, simplifying the overall code structure by eliminating the `script` tag.

```html {4}
<g-composer 
  svg-src="/svg/circle.svg" 
  methods-src="/methods/circle.js"
  config-src="/config/config.json">
</g-composer>
```

