const gulp = require("gulp"),
  chalk = require("chalk"),
  del = require("del"),
  base = require("./base");


/** base */
const _path = base.path;
const _port = base.client.port;
const _uri = base.client.uri;

module.exports = () => {
  delete([
    _path.bundles,
    _path.release
  ]);
};