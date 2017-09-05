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
  base = require("./base");


/** base */
const _path = base.path;
const _port = base.client.port;
const _uri = base.client.uri;

module.exports = () => {
  console.info("build");
};