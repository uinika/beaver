const Gulp = require("gulp"),
      Connect = require("gulp-connect"),
      Nodemon = require("gulp-nodemon"),
      Less = require("gulp-less"),
      Concat = require("gulp-concat"),
      UglifyJS = require("gulp-uglify"),
      MinifyCSS = require("gulp-clean-css"),
      MinHtml = require("gulp-htmlmin"),
      Replace = require("gulp-replace"),
      Compress = require("gulp-zip"),
      Moment = require("moment"),
      Delete = require("del");

/** gulp */
Gulp.task("default", () => {
  // less & concat
  const source = "./contents/";
  const target = "./bundles/";
  const combine = () => {
    Gulp.src([source + "**/*.less"])
      .pipe(Concat("styles.min.css"))
      .pipe(Less())
      .pipe(MinifyCSS({compatibility: "ie8"}))
      .pipe(Gulp.dest(target));
    Gulp.src([source + "app.js", source + "**/*.js"])
      .pipe(Concat("scripts.min.js"))
      .pipe(UglifyJS())
      .pipe(Gulp.dest(target));
  };
  combine();
  Gulp.watch([
    source + "**/*.less",
    source + "**/*.js",
    source + "app.js"
  ], combine);
  // live reload
  const reloadSource = [
    "./index.html",
    "./contents/**/*.html",
    "./bundles/**/*"
  ];
  Connect.server({
    root: "./",
    port: 5555,
    livereload: true
  });
  Gulp.watch(reloadSource, () => {
    Gulp.src(reloadSource)
      .pipe(Connect.reload());
  });
});

/** gulp clean */
Gulp.task("clean", () => {
  Delete([
    "./bundles/**/*"
  ]);
});
