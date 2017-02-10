var gulp         = require('gulp');
var compass      = require('gulp-compass');
var prefix       = require('gulp-autoprefixer');
var cleanCSS     = require('gulp-clean-css');
var cmq          = require('gulp-combine-media-queries');
var gutil        = require('gulp-util');
var error 		 = require('./util/error');
var argv 		 = require("yargs").argv;
var server 		 = require("./server");
var config 		 = require("../config.json");

var env = argv.env != "production";


gulp.task('sass', function () {

	return gulp.src(config.sass.boot)
		.pipe(compass({
            css   : config.output.path+'/css',
            sass  : config.sass.path
        }))
        .on('error', error)
		.pipe(prefix("ie >= 8", "ff >= 3", "safari >= 4", "opera >= 12", "chrome >= 4"))
		.pipe(cmq())
		.pipe(env != "production" ? gutil.noop() : cleanCSS({ compatibility: '*' }))
		.pipe(gulp.dest(config.output.path+'/css'))
		.pipe(server.refresh());

});
