---
outline: deep
---

# Process

<g-composer>
  <svg g-bind:viewBox="`0 0 ${(data.length) * 170 + 30} 500`"
       style="height: 500px;">
    <defs g-for="(value, idx) of data">
      <g g-bind:transform="$$.translate(idx * 170)">
        <circle cx="100" cy="250" r="60" 
                g-bind:style="{fill: value.color}"/>
        <text x="100" y="250" text-anchor="middle" dominant-baseline="middle" 
              style="font-size: 42px; fill: white" 
              g-content="value.key"></text>
        <g g-if="!(idx % 2)">
          <path d="M0,165L0,0L200,0L200,165C140,100,60,100,0,165Z" style="fill:#f1f1f1;"/>
          <path d="M200,250A100,100,0,0,0,0,250L30,250A70,70,0,0,1,170,250Z"
                g-bind:style="{fill: value.color}"/>
          <text x="100" y="60" text-anchor="middle" style="font-size: 26px; fill:#000;" 
                g-content="value.title"></text>
          <text x="100" y="84" text-anchor="middle" style="font-size: 16px; fill:#000;" 
                g-content="value.subtitle"></text>
        </g>
        <g g-if="idx % 2">
          <path d="M0,335L0,500L200,500L200,335C140,400,60,400,0,335Z" style="fill:#f1f1f1;"/>
          <path d="M0,250A100,100,0,0,0,200,250L170,250A70,70,0,0,1,30,250Z"
                g-bind:style="{fill: value.color}"/>
          <text x="100" y="430" text-anchor="middle" style="font-size: 26px; fill:#000;" 
                g-content="value.title"></text>
          <text x="100" y="454" text-anchor="middle" style="font-size: 16px; fill:#000;" 
                g-content="value.subtitle"></text>
        </g>
      </g>
    </defs>
  </svg>
  <g-script type="data" src="../data/process.csv"></g-script>
</g-composer>

```html
<g-composer>
  <svg g-bind:viewBox="`0 0 ${(data.length) * 170 + 30} 500`"
       style="height: 500px;">
    <defs g-for="(value, idx) of data">
      <g g-bind:transform="$$.translate(idx * 170)">
        <circle cx="100" cy="250" r="60" 
                g-bind:style="{fill: value.color}"/>
        <text x="100" y="250" text-anchor="middle" dominant-baseline="middle" 
              style="font-size: 42px; fill: white" 
              g-content="value.key"></text>
        <g g-if="!(idx % 2)">
          <path d="M0,165L0,0L200,0L200,165C140,100,60,100,0,165Z" style="fill:#f1f1f1;"/>
          <path d="M200,250A100,100,0,0,0,0,250L30,250A70,70,0,0,1,170,250Z"
                g-bind:style="{fill: value.color}"/>
          <text x="100" y="60" text-anchor="middle" style="font-size: 26px" 
                g-content="value.title"></text>
          <text x="100" y="84" text-anchor="middle" style="font-size: 16px" 
                g-content="value.subtitle"></text>
        </g>
        <g g-if="idx % 2">
          <path d="M0,335L0,500L200,500L200,335C140,400,60,400,0,335Z" style="fill:#f1f1f1;"/>
          <path d="M0,250A100,100,0,0,0,200,250L170,250A70,70,0,0,1,30,250Z"
                g-bind:style="{fill: value.color}"/>
          <text x="100" y="430" text-anchor="middle" style="font-size: 26px" 
                g-content="value.title"></text>
          <text x="100" y="454" text-anchor="middle" style="font-size: 16px" 
                g-content="value.subtitle"></text>
        </g>
      </g>
    </defs>
  </svg>
  <script type="data">
    "key";"title";"subtitle";"color"
    "01";"Analysis";"understand the problem";"#515AA8"
    "02";"Alternatives";"describe solutions";"#08909F"
    "03";"Decision";"select the best";"#13A0C0"
    "04";"Implement";"run the project";"#41BB95"
    "05";"Evaluate";"measure the result";"#89C540"
  </script>
</g-composer>
```