var gulp = require('gulp')
var rename = require('gulp-rename')
var config = require("../config.json");
var es = require('event-stream');
var argv = require("yargs").argv;
var buildHTML = require("./util/buildVersion")
var replace = require('gulp-replace');
var gutil = require('gulp-util');
var jade = require('gulp-pug')

gulp.task('html', function() {

  var pkg = require("../../package.json")
  var version = buildHTML.replace(/{{ date }}/, new Date().toISOString())
  version = version.replace(/{{ version }}/, pkg.version.toString())
  version = version.replace(/{{ name }}/, pkg.description.toString())

  var local = gulp.src(config.html.src)
      .pipe(jade({
        pretty: true
      }))
      .pipe(argv.env === "production" ? gutil.noop() : replace(/<!-- build:version-->/g, version))
      .pipe(gulp.dest(config.html.dest));


  return es.concat(local);
});
