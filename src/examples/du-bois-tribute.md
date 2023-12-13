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
group,occupation,percentage
Negroes,"Agriculture, Fisheries and Mining",62
Negroes,"Manufacturing and Mechanical Industries",5
Negroes,"Domestic and Personal Service",28
Negroes,"Professions",0.5
Negroes,"Trade and Transportation",4.5
Whites,"Agriculture, Fisheries and Mining",64
Whites,"Manufacturing and Mechanical Industries",13.5
Whites,"Domestic and Personal Service",5.5
Whites,"Professions",4
Whites,"Trade and Transportation",13
```

## first group

<g-composer id="color">
  <svg viewBox="0 0 500 500" width="500"
       style="font-family: monospace">
    <filter id="filter">
			<feTurbulence result="noise-lg"
				type="fractalNoise" baseFrequency=".04" numOctaves="1" seed="1458" />
			<feComposite result="BaseGraphic"
				in="SourceGraphic" in2="noise-lg"
				operator="arithmetic" k1="0.5" k2="0.6" k4="-.07" />
			<feComposite
				operator="arithmetic" k1="-0.8" k2="0.8" k3="1.4" />
		</filter>
    <defs g-for="(group, x) of data.$distinct('group')">
      <text 
        x="250"
        g-bind:y="x ? 480 : 30"
        text-anchor="middle"
        g-content="group.toUpperCase()"></text>
      <defs g-for="(record, n, all) of data.filter(r => r.group === group)">
        <path
          stroke="#c0c0c0"
          stroke-width="1"
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
        <text
          g-bind:x="$.polar2cartesian( 250, 
                                    250, 
                                    200,
                                    120 * record.value - (120 * data.$sum(all.filter((r,x) => x < n), 'value')) -60,
                                  ).x"
          g-bind:y="$.polar2cartesian( 250, 
                                    250, 
                                    200,
                                    120 * record.value - (120 * data.$sum(all.filter((r,x) => x < n), 'value')) -60,
                                  ).y"
          g-content="Math.round(record.value * 1000) / 10"></text>
        <text g-content="record.sector"></text>
        -->
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