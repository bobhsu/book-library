"use strict";

var perrier = require('perrier');
var _ = require("lodash");
var path = require("path");

function initBookLibraryConfig(opts) {
    var BookLibraryConfig = {};
    var config = perrier.create({
        rootPath: opts.rootPath,
        globalFields: {
            NODE_ENV: opts.env,
            ROOT_DIR: path.join(opts.rootPath, "..")
        },
        monitor: function (err, fileName) {
            if (err) {
                throw new Error("can not load config file " + fileName, err);
            }
            console.log("load config successfully: " + fileName);
        }
    });
    config.merge(
        'base.json',
        opts.env + '.json'
    );
    _.assign(BookLibraryConfig, config);
    return BookLibraryConfig;
}

var config = initBookLibraryConfig({
    rootPath: path.join(__dirname, "..", 'config'),
    env: process.env.NODE_ENV || 'dev'
});

module.exports = config;