---
outline: deep
---

# W. E. B. Du Bois tribute

This example pays homage to the famed sociologist, civil rights activist, and data visualizer
[W. E. B. Du Bois](https://en.wikipedia.org/wiki/W._E._B._Du_Bois). His pioneering team of black 
sociologists created data visualizations that explained institutionalized racism to the world 
showed in 1900 Paris Exposition the upcoming exhibit, which was called 
[American Negro](https://www.smithsonianmag.com/history/first-time-together-and-color-book-displays-web-du-bois-visionary-infographics-180970826/). You can see a modern point of view about the Du Bois work in 
[The Du Boisian Visualization Toolkit](https://www.dignityanddebt.org/projects/du-boisian-resources/).

## Data

```csv
"group";"sector";"value";
"negroes";"agriculture";0.62;
"negroes";"domestic";0.28;
"negroes";"manufacturing";0.05;
"negroes";"transportation";0.045;
"negroes";"professions";0.005;
"whites";"agriculture";0.64;
"whites";"domestic";0.055;
"whites";"manufacturing";0.135;
"whites";"transportation";0.13;
"whites";"professions";0.04;
```

## first group

<g-composer id="color">
  <svg viewBox="0 0 500 500" width="500">
    <defs g-for="(group, x) of data.$distinct('group')">
      <text 
        x="250"
        g-bind:y="x ? 480 : 20"
        text-anchor="middle"
        g-content="group"></text>
      <defs g-for="(record, n, all) of data.filter(r => r.group === group)">
        <path
          stroke="none"
          filter="url(#filter)"
          g-bind:transform="x ? $$.rotate(180,250,250) : ''"
          g-bind:fill="$.config.colors[n]"
          g-bind:check="group + ' ' + record.sector"
          g-bind:d="$$.circleSlice( 250, 
                                    250, 
                                    200,
                                    120 * record.value,
                                    (120 * data.$sum(all.filter((r,x) => x < n), 'value')) -60,
                                  )"></path>
        <!--
        <text g-content="data.$sum(all.filter((r,x) => x < n), 'value')"></text>
        <text g-content="record.sector"></text>
        <text g-content="record.value * 100"></text>-->
      </defs>
    </defs>
  </svg>
  <g-script type="plugin" src="http://localhost:63342/graphane/src/plugins/shapes.js"></g-script>
  <g-script type="data" src="../data/du-bois-tribute.data.csv"></g-script>
  <g-script type="config">
    {
      colors: ['#cd143c','#ffd700','#4682b4','#d2b38c','#654321']
    }
  </g-script>
</g-composer>

```html
<g-composer id="color">
  <svg viewBox="0 0 500 500" width="500">
    <defs g-for="(group, x) of data.$distinct('group')">
      <text
        x="250"
        g-bind:y="x ? 480 : 20"
        text-anchor="middle"
        g-content="group"></text>
      <defs g-for="(record, n, all) of data.filter(r => r.group === group)">
        <path
          stroke="none"
          filter="url(#filter)"
          g-bind:transform="x ? $$.rotate(180,250,250) : ''"
          g-bind:fill="$.config.colors[n]"
          g-bind:check="group + ' ' + record.sector"
          g-bind:d="$$.circleSlice( 250, 
                                    250, 
                                    200,
                                    120 * record.value,
                                    (120 * data.$sum(all.filter((r,x) => x < n), 'value')) -60,
                                  )"></path>
      </defs>
    </defs>
  </svg>
  <g-script type="plugin" src="http://localhost:63342/graphane/src/plugins/shapes.js"></g-script>
  <g-script type="data" src="../data/du-bois-tribute.data.csv"></g-script>
  <g-script type="config">
    {
    colors: ['#cd143c','#ffd700','#4682b4','#d2b38c','#654321']
    }
  </g-script>
</g-composer>
```