---
outline: deep
---

# Half-full bottle

<g-composer data="n: 0.4" style="width: 100px">
  <svg viewBox="0 0 70 70" width="200">
    <defs>
      <linearGradient id="full" gradientTransform="rotate(90)">>
        <stop g-bind:offset="1 - n" stop-color="transparent"/>
        <stop g-bind:offset="1 - n" stop-color="blue"/>
      </linearGradient>
    </defs>
    <path d="M27.1,26c-0.2-6.9,16.9-6.9,16.7,0c0,0.7,0,31.8,0,32.4H27.1c0,0,0,0,0-31.9Z"
          stroke="#000000"
          fill="url(#full)"/>
    <rect x="31.5" y="15.5" width="8" height="6"
          stroke="#000000" 
          fill="#ffffff"/>
</svg>
</g-composer>

<p>
<input type="range" min="0" max="1" step="0.01" value="0.4" 
  oninput="document.querySelector('g-composer').data.n = Number(this.value)">
</p>
