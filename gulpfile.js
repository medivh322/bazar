const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

function style(){
	return gulp.src('./app/sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./app/css'))
		.pipe(browserSync.stream());
}

function autoprefix(){
	return gulp.src('./app/css/*.css')
		.pipe(autoprefixer({
			grid: 'autoplace',
			cascade: false,
		}))
		.pipe(gulp.dest(function(file){
			return file.base;
		}));
}

function watch(){
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch('./app/sass/*.scss', gulp.series(style, autoprefix));
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('./app/js/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
