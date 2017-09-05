const gulp = require("gulp"),
  del = require("del"),
  common = require("./config/common");


/** gulp */
gulp.task("default", () => {
  common.default();
});

/** gulp build */
gulp.task("build", () => {
  common.build();
});

/** gulp release */
gulp.task("release", ["build"], () => {
  common.release();
});

/** gulp clean */
gulp.task("clean", () => {
  delete([_bundles, _release]);
});