var gulp = require("gulp");
var argv = require("yargs").argv;

gulp.task('build', ['clean', 'bump'], function() {
  //gulp.start('html', 'sass', 'browserify', 'sprites', 'images', 'svg', 'data', 'fonts', 'audio', 'video');
  gulp.start('html', 'sass', 'browserify');
});
