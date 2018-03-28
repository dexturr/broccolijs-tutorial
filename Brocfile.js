const Funnel = require("broccoli-funnel");
const Merge = require("broccoli-merge-trees");

const appRoot = "app";

// Copy HTML file from app root to destination
const html = new Funnel(appRoot, {
  files: ["index.html"],
  annotation: "Index file",
});

// Copy JS file into assets
const js = new Funnel(appRoot, {
  files: ["app.js"],
  destDir: "/assets",
  annotation: "JS files",
});

// Copy CSS file into assets
const css = new Funnel(appRoot, {
  srcDir: "styles",
  files: ["app.css"],
  destDir: "/assets",
  annotation: "CSS files",
});

// Copy public files into destination
const public = new Funnel('public', {
  annotation: "Public files",
});

module.exports = new Merge([html, js, css, public]);
