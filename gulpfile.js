const gulp = require("gulp"),
  chalk = require("chalk"),
  connect = require("gulp-connect"),
  nodemon = require("gulp-nodemon"),
  sass = require("gulp-sass"),
  concat = require("gulp-concat"),
  uglifyJS = require("gulp-uglify"),
  cleanCSS = require("gulp-clean-css"),
  minHtml = require("gulp-htmlmin"),
  zip = require("gulp-zip"),
  minimist = require('minimist'),
  moment = require("moment"),
  del = require("del");

/** path */
const _base = __dirname;
const _client = "./client/";
const _server = "./server/";
const _build = "./build/";
const _release = "./release/";
const _bundles = "./client/bundles/";
const _sources = "./client/sources/";

/** gulp */
gulp.task("default", () => {
  // concat then scss
  const transform = () => {
    gulp.src('./sass/**/*.scss')
      .pipe(concat("styles.css"))
      .pipe(sass().on("error", sass.logError))
      .pipe(gulp.dest(_bundles));
    gulp.src([_sources + "app.js", _sources + "**/*.js"])
      .pipe(concat("scripts.js"))
      .pipe(gulp.dest(_bundles));
  };
  transform();
  gulp.watch([
    _sources + "**/*.scss",
    _sources + "**/*.js",
    _sources + "app.js"
  ], transform);
  // connect by JetBrains
  connect.server({
    root: _client,
    port: 9001,
    livereload: true
  });
  const reload = [
    _bundles, _sources
  ];
  gulp.watch(reload, () => {
    gulp.src(reload)
      .pipe(connect.reload());
  });
  // nodemon for express server
  nodemon({
    script: (_server + "app.js"),
    watch: [(_server + "*.js")],
  });
});

/** gulp build */
gulp.task("build", () => {

});

/** gulp release */
gulp.task("release", ["build"], () => {

});

/** gulp clean */
gulp.task("clean", () => {
  Delete([
    "./release/**/*", "./build/**/*"
  ]);
});