const gulp = require("gulp"),
  path = require("path"),
  chalk = require("chalk"),
  connect = require("gulp-connect"),
  nodemon = require("gulp-nodemon"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  concat = require("gulp-concat"),
  uglifyJS = require("gulp-uglify"),
  cleanCSS = require("gulp-clean-css"),
  minHtml = require("gulp-htmlmin"),
  zip = require("gulp-zip"),
  minimist = require('minimist'),
  moment = require("moment"),
  del = require("del"),
  base = require("./base");


/** path */
const _base = __dirname;
const _client = "../client/";
const _server = "../server/";
const _build = "../build/";
const _release = "../release/";
const _bundles = "../client/bundles/";
const _sources = "../client/sources/";

/**  */

const _port = base.client.port;
const _uri = base.client.uri;

exports.default = () => {
  // concat then scss & autoprefix
  const transform = () => {
    gulp.src(_sources + "**/*.scss")
      .pipe(concat("styles.css"))
      .pipe(sass().on("error", sass.logError))
      .pipe(autoprefixer())
      .pipe(gulp.dest(_bundles));
    gulp.src([_sources + "app.js", _sources + "**/*.js"])
      .pipe(concat("scripts.js"))
      .pipe(gulp.dest(_bundles));
  };
  transform();
  gulp.watch([
    _sources + "**/*.*"
  ], transform);
  // connect by JetBrains
  connect.server({
    root: _client,
    port: _port,
    livereload: true
  });
  const reload = [
    (_bundles + "**/*"),
    (_sources + "**/*"),
    (_client + "index.html")
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
  console.info(
    chalk.yellow.bgBlue("jetbrains-connect-server started on http://localhost:" + _port + _uri)
  );
};

exports.build = () => {
  console.info("build");
};

exports.release = () => {
  console.info("release");
};