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
  title       : 'graphane',
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
    ['link', {rel : 'icon', href : '/img/logo/g.svg'}]
  ],
  // https://vitepress.dev/reference/default-theme-config
  themeConfig : {
    logo      : '/img/logo/graphane.svg',
    siteTitle : false,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 <a href="https://www.graphery.com/"> ' +
                 '<img src="img/logo/graphery.svg" alt="graphery" width="120"></a>'
    },
    search    : {
      provider : 'local'
    }
  }
});
