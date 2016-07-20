module.exports = function() {
  var client = 'www',
    clientApp = 'www/app',
    dist = 'dist',
    tmp = '.tmp',
    docs = 'documnetation',
    landing = 'landing';

  var config = {
    client: client,
    dist: dist,
    tmp: tmp,
    index: client + "/index.html",
    alljs: [
      client + "/app/**/*.js"
    ],
    assets: [
      client + "/app/**/*.html",
      client + "/css/*.css",
      client + "/templates/*.html",
      client + "/lib/ionic/js/ionic.bundle.js",
      client + "/lib/ionic/css/ionic.css",
      client + "/lib/ionic/fonts/*",
      client + "/img/**/*"
    ],
    less: [],
    sass: [
      "scss/ionic.app.scss"
    ],
    js: [
      clientApp + "/**/*.module.js",
      clientApp + "/**/*.js",
      '!' + clientApp + "/**/*.spec.js"
    ],
    docs: docs,
    docsJade: [
      docs + "/jade/index.jade",
      docs + "/jade/faqs.jade",
      docs + "/jade/layout.jade"
    ],
    allToClean: [
      tmp,
      ".DS_Store",
      ".sass-cache",
      "node_modules",
      ".git",
      client + "/bower_components",
      docs + "/jade",
      docs + "/layout.html",
      landing + "/jade",
      landing + "/bower_components",
      "readme.md"
    ]
  };

  return config;
}
