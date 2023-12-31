---
outline: deep
---

# Human Evolution

<g-composer>
  <svg style="width: 610px; height: 540px;" viewBox="0 0 610 540">
    <text y="25" x="0" style="font-family: sans-serif; font-size: 14px">million of years</text>
    <defs g-for="(value, idx) of scale('from', 'to', 7)">
      <text style="font-family: sans-serif; font-size: 16px" text-anchor="middle" y="50"
            g-content="value" g-bind:x="(idx * 100) +  5"></text>
      <line stroke-width="1" stroke="#C0C0C0"
            y1="60" y2="600" g-bind:x1="(idx * 100) + 5" g-bind:x2="(idx * 100) + 5"/>
    </defs>
    <defs g-for="(value, idx) of data">
      <text style="font-family: sans-serif; font-size: 18px" 
            text-anchor="end" dominant-baseline="middle"
            g-bind:x="((value.from * 600) / (max('to') - min('from'))) + 600"
            g-bind:y="(idx * 80) + 100"
            g-content="value.name"></text>
      <line stroke-width="50" stroke="#00D800"
            g-bind:x1="((value.from * 600) / (max('to') - min('from'))) + 605" 
            g-bind:x2="((value.to * 600) / (max('to') - min('from'))) + 605"
            g-bind:y1="(idx * 80) + 100" g-bind:y2="(idx * 80) + 100"/>
      <image g-bind:x="((value.from * 600) / (max('to') - min('from'))) + 610"
           g-bind:y="(idx * 80) + 85"
           g-bind:href="value.icon" 
           width="40" height="40"/>
    </defs>
  </svg>
  <g-script type="data">[
    {"name": "Homo habilis",          "from": -2.3,  "to": -1.65, "icon": "https://upload.wikimedia.org/wikipedia/commons/6/6c/Homo_habilis.svg"}, 
    {"name": "Homo ergaster",         "from": -1.9,  "to": -1.4,  "icon": "https://upload.wikimedia.org/wikipedia/commons/4/45/Homo_ergaster.svg"},
    {"name": "Homo erectus",          "from": -1.9,  "to": -0.2,  "icon": "https://upload.wikimedia.org/wikipedia/commons/a/af/Homo_erectus.svg"},
    {"name": "Homo heidelbergensis",  "from": -0.7,  "to": -0.3},
    {"name": "Homo neanderthalensis", "from": -0.23, "to": -0.04},
    {"name": "Homo sapiens",          "from": -0.3,  "to": 0}
  ]</g-script>
  <g-script type="methods">
    function min (prop) {
      return Math.floor(Math.min(...$.data.map(r => r[prop])));
    }
    function max (prop) {
      return Math.ceil(Math.max(...$.data.map(r => r[prop])));
    }
    function scale (prop1, prop2, steps) {
      const from   = $.methods.min(prop1);
      const to     = $.methods.max(prop2);
      const step   = (to - from) / (steps - 1);
      const values = Array(steps).fill(0);
      for (let n in values) {
         values[n] = from + (step * n);
      }
      return values;
    }
  </g-script>
</g-composer>

```html
<g-composer>
  <svg style="width: 610px; height: 540px;" viewBox="0 0 610 540">
    <text y="25" x="0" style="font-family: sans-serif; font-size: 14px">million of years</text>
    <defs g-for="(value, idx) of scale('from', 'to', 7)">
      <text style="font-family: sans-serif; font-size: 16px" text-anchor="middle" y="50"
            g-content="value" g-bind:x="(idx * 100) +  5"></text>
      <line stroke-width="1" stroke="#C0C0C0"
            y1="60" y2="600" g-bind:x1="(idx * 100) + 5" g-bind:x2="(idx * 100) + 5"/>
    </defs>
    <defs g-for="(value, idx) of data">
      <text style="font-family: sans-serif; font-size: 18px"
            text-anchor="end" dominant-baseline="middle"
            g-bind:x="((value.from * 600) / (max('to') - min('from'))) + 600"
            g-bind:y="(idx * 80) + 100"
            g-content="value.name"></text>
      <line stroke-width="50" stroke="#00D800"
            g-bind:x1="((value.from * 600) / (max('to') - min('from'))) + 605"
            g-bind:x2="((value.to * 600) / (max('to') - min('from'))) + 605"
            g-bind:y1="(idx * 80) + 100" g-bind:y2="(idx * 80) + 100"/>
      <image g-bind:x="((value.from * 600) / (max('to') - min('from'))) + 610"
             g-bind:y="(idx * 80) + 85"
             g-bind:href="value.icon"
             width="40" height="40"/>
    </defs>
  </svg>
  <script type="data">[
    {"name": "Homo habilis",          "from": -2.3,  "to": -1.65, "icon": "https://upload.wikimedia.org/wikipedia/commons/6/6c/Homo_habilis.svg"},
    {"name": "Homo ergaster",         "from": -1.9,  "to": -1.4,  "icon": "https://upload.wikimedia.org/wikipedia/commons/4/45/Homo_ergaster.svg"},
    {"name": "Homo erectus",          "from": -1.9,  "to": -0.2,  "icon": "https://upload.wikimedia.org/wikipedia/commons/a/af/Homo_erectus.svg"},
    {"name": "Homo heidelbergensis",  "from": -0.7,  "to": -0.3},
    {"name": "Homo neanderthalensis", "from": -0.23, "to": -0.04},
    {"name": "Homo sapiens",          "from": -0.3,  "to": 0}
  ]</script>
  <script type="methods">
    function min (prop) {
      return Math.floor(Math.min(...$.data.map(r => r[prop])));
    }
    function max (prop) {
      return Math.ceil(Math.max(...$.data.map(r => r[prop])));
    }
    function scale (prop1, prop2, steps) {
      const from   = $.methods.min(prop1);
      const to     = $.methods.max(prop2);
      const step   = (to - from) / (steps - 1);
      const values = Array(steps).fill(0);
      for (let n in values) {
        values[n] = from + (step * n);
      }
      return values;
    }
  </script>
</g-composer>
```