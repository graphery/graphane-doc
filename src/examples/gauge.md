---
outline: deep
---

# Gauge

<g-composer data="value: 30" id="gauge-example">
  <svg viewBox="0 0 250 250">
    <circle cx="125" cy="125" r="124" stroke="#000" stroke-width="2" fill="none"/>
    <defs g-for="n of 100">
      <line g-bind:x1="$.polar2cartesian(125, 125, n % 5 ? 115 : 110, 135 - (n * 2.7)).x"
            g-bind:y1="$.polar2cartesian(125, 125, n % 5 ? 115 : 110, 135 - (n * 2.7)).y"
            g-bind:x2="$.polar2cartesian(125, 125, 120, 135 - (n * 2.7)).x"
            g-bind:y2="$.polar2cartesian(125, 125, 120, 135 - (n * 2.7)).y"
            stroke="#000"
            stroke-width="n % 5 ? 2 : 1"
      />
    </defs> 
    <g fill="#000" stroke="#555" stroke-width="1">
      <polygon transform="rotate(-135,125,125)"
               g-bind:transform="$$.dynamic([$$(),
                {rotate: [-135 + (value * 2.7), 125, 125]}])"
               points="125,30,130,125,125,150,120,125"/>
    </g>
  </svg>
  <g-script type="plugin" src="https://cdn.graphery.online/graphane/0.1.0-alpha.5/plugins/shapes.js"></g-script>
</g-composer>

<p>
<label>value:
  <input type="range" value="30" min="0" max="100" 
         oninput="document.querySelector('g-composer').data.value = Number(this.value)">
</label></p>

<g-editor href="#gauge-example"></g-editor>

