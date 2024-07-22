---
outline: deep
---

# Embebed configuration

Graphane allow defining the data visualization configuration into `<script type="config">` with
formats CSV, JSON and JSON5. 

```html{13-19}
<g-composer style="width: 50%">
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
  <g-script type="config">
  {
    height: 100,
    width : 100,
    colors: ['#638475', '#7fb069', '#d36135',  '#ece4b7', '#e6aa68']
  }
  </g-script>
  <g-script type="data">[
    {name: "A", value: 10},
    {name: "B", value: 32},
    {name: "C", value: 24},
    {name: "E", value: 5},
    {name: "F", value: 17},
  ]</g-script>
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
<g-script type="config">
{
  height: 100,
  width : 200,
  colors: ['#638475', '#7fb069', '#d36135',  '#ece4b7', '#e6aa68']
}
</g-script>
<g-script type="data">[
  {name: "A", value: 10},
  {name: "B", value: 32},
  {name: "C", value: 24},
  {name: "E", value: 5},
  {name: "F", value: 17},
]</g-script>
</g-composer>