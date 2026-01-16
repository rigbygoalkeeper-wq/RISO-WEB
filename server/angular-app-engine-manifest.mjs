
export default {
  basePath: 'https://rigbygoalkeeper-wq.github.io/RISO-WEB',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
