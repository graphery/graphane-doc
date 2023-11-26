---
outline: deep
---

# Clock

<g-composer>
  <svg viewBox="0 0 250 250" g-on:init="init">
    <circle cx="125" cy="125" r="124" stroke="#000" stroke-width="2" fill="none"/>
    <defs g-for="n of 60">
      <line g-bind:x1="$.polar2cartesian(125, 125, n % 5 ? 115 : 110, n * 6).x"
            g-bind:y1="$.polar2cartesian(125, 125, n % 5 ? 115 : 110, n * 6).y"
            g-bind:x2="$.polar2cartesian(125, 125, 120, n * 6).x"
            g-bind:y2="$.polar2cartesian(125, 125, 120, n * 6).y"
            stroke="#000"
            stroke-width="n % 5 ? 2 : 1"
      />
    </defs> 
    <defs g-for="n of 12">
      <text g-bind:x="$.polar2cartesian(125, 127, 95, (n + 1) * 30).x"
            g-bind:y="$.polar2cartesian(125, 127, 95, (n + 1) * 30).y"
            g-content="n + 1"
            font-size="18"
            font-family="sans-serif"
            alignment-baseline="middle"
            text-anchor="middle"></text>
    </defs>
    <g fill="#000" stroke="#555" stroke-width="1">
      <polygon g-bind:transform="$$.rotate(date.getSeconds() * 6, 125, 125)" 
               points="125,20,129,125,125,145,124,125"/>
      <polygon g-bind:transform="$$.rotate(date.getMinutes() * 6, 125, 125)"
               points="125,30,130,125,125,150,120,125"/>
      <polygon g-bind:transform="$$.rotate((date.getHours() % 12 * 30) + (date.getMinutes() * 0.5), 125, 125)"
               points="125,60,130,125,125,160,120,125"/>
    </g>
  </svg>
  <g-script type="plugin" src="https://cdn.graphery.online/graphane/0.1.0-alpha.5/plugins/shapes.js"></g-script>
  <g-script type="methods">
    function init() {
      setInterval(() => $.data.date = new Date(), 1000);
    }
  </g-script>
  <g-script type="data">{
    date: new Date()
  }</g-script>
</g-composer>
