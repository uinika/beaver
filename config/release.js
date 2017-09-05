const gulp = require("gulp"),
  path = require("path"),
  chalk = require("chalk"),
  zip = require("gulp-zip"),
  minimist = require('minimist'),
  moment = require("moment"),
  base = require("./base");


/** base */
const _path = base.path;
const _port = base.client.port;
const _uri = base.client.uri;

module.exports = () => {
  console.info("release");
};