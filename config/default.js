const gulp = require("gulp"),
  path = require("path"),
  chalk = require("chalk"),
  connect = require("gulp-connect"),
  nodemon = require("gulp-nodemon"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  concat = require("gulp-concat"),
  minimist = require("minimist"),
  moment = require("moment"),
  base = require("./base");


/** base */
const _path = base.path;
const _port = base.client.port;
const _uri = base.client.uri;

module.exports = () => {
  // concat then scss & autoprefix
  const transform = () => {
    gulp.src(_path.sources + "**/*.scss")
      .pipe(concat("styles.css"))
      .pipe(sass().on("error", sass.logError))
      .pipe(autoprefixer())
      .pipe(gulp.dest(_path.bundles));
    gulp.src([_path.sources + "app.js", _path.sources + "**/*.js"])
      .pipe(concat("scripts.js"))
      .pipe(gulp.dest(_path.bundles));
  };
  transform();
  gulp.watch([
    _path.sources + "**/*.*"
  ], transform);
  // connect by JetBrains
  connect.server({
    root: _path.client,
    port: _port,
    livereload: {
      port: 35729
    }
  });
  const reload = [
    (_path.bundles + "**/*"),
    (_path.sources + "**/*"),
    (_path.client + "index.html")
  ];
  gulp.watch(reload, () => {
    gulp.src(reload)
      .pipe(connect.reload());
  });
  // nodemon for express server
  nodemon({
    script: (_path.server + "app.js"),
    watch: [(_path.server + "*.js")],
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