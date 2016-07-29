module.exports = function() {
  var client = 'client',
    clientApp = './client/app',
    dist = 'www',
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
      //client + "/app/**/*.html",
      client + "/css/*.css",
      client + "/lib/ionic/js/ionic.bundle.js",
      client + "/lib/ionic/css/ionic.css",
      client + "/lib/ionic/fonts/*",
      client + "/img/**/*"
    ],
    less: [],
    sass: [
      "./scss/ionic.app.scss"
    ],
    js: [
      clientApp + "/**/*.module.js",
      clientApp + "/**/*.js",
      '!' + clientApp + "/**/*.spec.js"
    ],
    templates: [
      client + "/app/**/*.html"
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
      client + "/lib",
      docs + "/jade",
      docs + "/layout.html",
      landing + "/jade",
      landing + "/bower_components",
      "readme.md"
    ]
  };

  return config;
}
