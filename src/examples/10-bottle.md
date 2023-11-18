---
outline: deep
---

# Half-full bottle

<g-composer data="n: 0.5" style="width: 100px">
  <svg viewBox="0 0 320 512">
    <defs>
      <linearGradient id="full" gradientTransform="rotate(90)">>
        <stop g-bind:offset="1 - n" stop-color="transparent"/>
        <stop g-bind:offset="1 - n" stop-color="blue"/>
      </linearGradient>
    </defs>
    <path d="M224 0V64H96V0H224zM32 151.7c0-15.6 9-29.8 23.2-36.5L96.3 96H223.7l41.1 19.3
             c14.1 6.6 23.2 20.8 23.2 36.5c0 14.4-7.5 27-18.9 34.1c11.5 8.8 18.9 22.6 18.9 38.2
             c0 16.7-8.5 31.4-21.5 40c12.9 8.6 21.5 23.3 21.5 40s-8.5 31.4-21.5 40
             c12.9 8.6 21.5 23.3 21.5 40s-8.5 31.4-21.5 40c12.9 8.6 21.5 23.3 21.5 40v48H32V464
             c0-16.7 8.5-31.4 21.5-40C40.5 415.4 32 400.7 32 384s8.5-31.4 21.5-40
             C40.5 335.4 32 320.7 32 304s8.5-31.4 21.5-40C40.5 255.4 32 240.7 32 224
             c0-15.6 7.4-29.4 18.9-38.2C39.5 178.7 32 166.1 32 151.7zM96 224
             v32H224V224H96zM224 352H96v32H224V352z"
      transform="scale(0.8, 0.8)translate(0,10)"
      fill="url(#full)" stroke="blue" stroke-width="20"/>
</svg>
</g-composer>
