const gulp = require("gulp"),
  chalk = require("chalk"),
  connect = require("gulp-connect"),
  nodemon = require("gulp-nodemon"),
  sass = require("gulp-sass"),
  Concat = require("gulp-concat"),
  UglifyJS = require("gulp-uglify"),
  cleanCSS = require("gulp-clean-css"),
  minHtml = require("gulp-htmlmin"),
  zip = require("gulp-zip"),
  minimist = require('minimist'),
  moment = require("moment"),
  del = require("del");

/** gulp */
gulp.task("default", () => {
  // less & concat
  const source = "./sources/partials/";
  const target = "./sources/bundles";
  const combine = () => {
    gulp.src([source + "**/*.less"])
      .pipe(Concat("styles.css"))
      .pipe(Less())
      .pipe(gulp.dest(target));
    gulp.src([source + "app.js", source + "**/*.js"])
      .pipe(Concat("scripts.js"))
      .pipe(gulp.dest(target));
  };
  combine();
  gulp.watch([
    source + "**/*.less",
    source + "**/*.js",
    source + "app.js"
  ], combine);
  // live reload
  const reloadSource = [
    "./sources/index.html",
    "./sources/partials/**/*.html",
    "./sources/bundles/**/*"
  ];
  connect.server({
    root: "sources",
    port: 5008,
    livereload: true
  });
  gulp.watch(reloadSource, () => {
    gulp.src(reloadSource)
      .pipe(connect.reload());
  });
  // nodemon
  const server = "./mocks/server.js";
  nodemon({
    script: server,
    watch: ["./mocks/*.js"],
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