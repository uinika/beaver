const gulp = require("gulp"),
  del = require("del"),
  _default = require("./config/default"),
  _clean = require("./config/clean"),
  _build = require("./config/build"),
  _release = require("./config/release");


gulp.task("default", () => {
  _default();
});

gulp.task("build", () => {
  _build();
});

gulp.task("release", ["build"], () => {
  _release();
});

gulp.task("clean", () => {
  _clean();
});