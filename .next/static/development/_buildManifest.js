self.__BUILD_MANIFEST = {
  __rewrites: {
    beforeFiles: [],
    afterFiles: [
      { source: '\u002Fpublic\u002Fterms.html', destination: '\u002Fpages\u002Fapi\u002Fhtml.js' },
    ],
    fallback: [],
  },
  '/': ['static\u002Fchunks\u002Fpages\u002Findex.js'],
  '/_error': ['static\u002Fchunks\u002Fpages\u002F_error.js'],
  '/ghostPlugins': ['static\u002Fchunks\u002Fpages\u002FghostPlugins.js'],
  sortedPages: ['\u002F', '\u002F_app', '\u002F_error', '\u002FghostPlugins'],
}
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()
