// grab our gulp packages

var gulp = require('gulp'),
	gutil = require('gulp-util'),
	// jshint = require('gulp-jshint'),
	stylus = require('gulp-stylus'),
	nodemon = require('gulp-nodemon');

// Configure the gulp task
gulp.task('jshint', function() {
	return gulp.src('client/js/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
	gulp.watch('client/js/**/*.js', ['jshint']);
});

// compile stylus to css
gulp.task('css', function() {
	return gulp.src('client/css/src/styles.styl')
	.pipe(stylus())
	.pipe(gulp.dest('client/css/lib'));
});

// Nodemon to start server
gulp.task('default', function() {
	nodemon({ script: 'server/src/app.js'
			, ext: 'html js'
			, ignore: ['ingnored.js']
			, tasks: ['jshint'] })
		.on('restart', function(){
			console.log('restarted!')
		})
})