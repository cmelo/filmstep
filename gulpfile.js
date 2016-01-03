
var gulp         = require('gulp');
var concat       = require('gulp-concat');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var watch        = require('gulp-watch');
var replace      = require('gulp-replace');


gulp.task('default', ['bower', 'main', 'bower_css', 'css']);

gulp.task('watch', function () {
	watch('./js/**/*.js', function () {
		gulp.start('main');
	});
});

gulp.task('bower', function () {
	gulp
		.src([
			'bower_components/html5shiv/dist/html5shiv.min.js',
		])
		.pipe(sourcemaps.init())
		.pipe(concat('bower.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./build/js'))
	;

});

gulp.task('bower_css', function () {
	gulp
		.src([
			// './bower_components/Ionicons/css/ionicons.min.css',
			'./bower_components/roboto-fontface/css/roboto-fontface.css',
		])
		.pipe(sourcemaps.init())
		.pipe(concat('bower.css'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./build/css'))
	;

	// gulp.src('./bower_components/Ionicons/fonts/*').pipe(gulp.dest('./build/fonts'));
	gulp.src('./bower_components/roboto-fontface/fonts/**').pipe(gulp.dest('./build/fonts'));

});

gulp.task('main', function () {
	gulp
		.src('./js/**/*.js')
		.pipe(sourcemaps.init())
			.pipe(concat('main.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./build/js'))
	;
});

gulp.task('css', function () {

	gulp.src('./css/style.scss')
		.pipe(sourcemaps.init())
			.pipe(sass())
			.pipe(autoprefixer({
				browsers: ['last 2 versions'],
				cascade: false
			}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./build/css'))
	;

});
