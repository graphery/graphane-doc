---
outline: deep
---

# Comparison

<g-composer id="example">
  <svg viewBox="0 0 500 600">
    <text x="250" y="50" text-anchor="middle" font-size="30">CEOs in Fortune 500 companies</text>
    <path 
      g-bind:style="{fill: $.config.colors[0]}"
      g-bind:d="$$.barArc(250, 280, (180 * data[0].value / 2) + 20, 180 * data[0].value, 180, -135)"/>
    <path 
      g-bind:style="{fill: $.config.colors[1]}"
      g-bind:d="$$.barArc(250, 280, (180 * data[1].value / 2) + 20 , 180 * data[1].value, 180, 45)"/>
    <line x1="250" y1="300" x2="250" y2="550" stroke="black" stroke-width="2" stroke-dasharray="10"/>
    <g g-bind:stroke="$.config.colors[0]">
      <text x="220" y="530" text-anchor="end" font-size="30"><tspan g-content="data[0].label"></tspan></text>
      <text x="220" y="570" text-anchor="end" font-size="30"><tspan g-content="data[0].value * 100"></tspan>%</text>
    </g>
    <g g-bind:stroke="$.config.colors[1]">
      <text x="270" y="530" text-anchor="start" font-size="30"><tspan g-content="data[1].label"></tspan></text>
      <text x="270" y="570" text-anchor="start" font-size="30"><tspan g-content="data[1].value * 100"></tspan>%</text>
    </g>
  </svg>
  <g-script type="plugin" src="https://cdn.graphery.online/graphane/0.1.0-alpha/plugins/shapes.js"></g-script>
  <g-script type="data">[
    {"label": "man", "value": 0.9},
    {"label": "woman", "value": 0.1}
  ]</g-script>
  <g-script type="config">{
    colors: ['#629d23', '#5E239D'] 
  }</g-script>
</g-composer>

<g-editor href="#example"></g-editor>