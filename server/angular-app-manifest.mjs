
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://rigbygoalkeeper-wq.github.io/RISO-WEB/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/RISO-WEB"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JKIW6YBK.js"
    ],
    "route": "/RISO-WEB/welcome"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QCU4W547.js"
    ],
    "route": "/RISO-WEB/que-es"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZCNPTED2.js"
    ],
    "route": "/RISO-WEB/galeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OH7TFWKL.js"
    ],
    "route": "/RISO-WEB/talleres"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VKM7U2OA.js"
    ],
    "route": "/RISO-WEB/contacto"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11353, hash: '37679bd98444ac7b86b8cf9e5923ad7f8c833a50d4c2e6fd3edb8e0fb29b496b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 11539, hash: 'cd59f425331c6cb66cb4be03ef4f1a9e3b9f164d4b94a977bfc3a4759eaf426c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 273, hash: 'c76358917c95af266a3dd1e547a304255c4704985720e8b50cde0b0a241789da', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'talleres/index.html': {size: 273, hash: 'c76358917c95af266a3dd1e547a304255c4704985720e8b50cde0b0a241789da', text: () => import('./assets-chunks/talleres_index_html.mjs').then(m => m.default)},
    'galeria/index.html': {size: 273, hash: 'c76358917c95af266a3dd1e547a304255c4704985720e8b50cde0b0a241789da', text: () => import('./assets-chunks/galeria_index_html.mjs').then(m => m.default)},
    'que-es/index.html': {size: 273, hash: 'c76358917c95af266a3dd1e547a304255c4704985720e8b50cde0b0a241789da', text: () => import('./assets-chunks/que-es_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 273, hash: 'c76358917c95af266a3dd1e547a304255c4704985720e8b50cde0b0a241789da', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'welcome/index.html': {size: 15172, hash: '1ac063b900e71cf728b55e84ca3db5e602c4bc18a459e41b7b3873eed889d802', text: () => import('./assets-chunks/welcome_index_html.mjs').then(m => m.default)},
    'styles-Q4YVLHWY.css': {size: 366, hash: 'zjfwzJ/ttXQ', text: () => import('./assets-chunks/styles-Q4YVLHWY_css.mjs').then(m => m.default)}
  },
};
