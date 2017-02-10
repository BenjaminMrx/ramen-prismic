var gulp = require("gulp");
var config = require("../config.json");
var watch = require('gulp-watch')
var argv     = require("yargs").argv;

argv.watch = true;

gulp.task('watch', ["build", "serve"], function() {


  watch(config.sass.path + '/**/*', function () {
    gulp.start('sass')
  })

  watch(config.html.src, function () {
    gulp.start('html')
  })
});
