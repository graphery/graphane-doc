import { defineConfig }      from 'vitepress';
import { BUNDLED_LANGUAGES } from 'shiki'

// Include `cs` as alias for csharp
const html   = BUNDLED_LANGUAGES.find(lang => lang.id === 'html')
html.aliases = html.aliases || [];
html.aliases.push('svg');

const fullReloadAlways = {
  handleHotUpdate ({server}) {
    server.ws.send({type : "full-reload"});
    return [];
  },
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title       : ' ',
  description : "version 0.0.1 (alpha)",
  vite        : {
    plugins : [fullReloadAlways],
  },
  vue         : {
    template : {
      compilerOptions : {
        isCustomElement : (tag) => tag.startsWith('g-')
      }
    }
  },
  head        : [
    ['link', {rel : 'icon', href : '/img/logo/g.svg'}],
    ['script', {
      src  : 'http://localhost:63342/Graphane/src/svg/component/src/gsvg.js',
      type : 'module'
    }],
    // ['script', {src : 'https://cdn.Graphane.online/svg/2.0.0.beta.4/component/gsvg.js'}],
  ],
  // https://vitepress.dev/reference/default-theme-config
  themeConfig : {
    logo        : '/img/logo/graphane.svg',
    search      : {
      provider : 'local'
    }
  }
});
