
var gulp = require('gulp'),
		sass = require('gulp-sass'),
		postcss = require("gulp-postcss")
		autoprefixer = require("autoprefixer"),
		cssnano = require("cssnano"),
		sourcemaps = require("gulp-sourcemaps"),
		browserSync = require("browser-sync").create(),
		sassdoc = require("sassdoc");

// Put this after including our dependencies
var paths = {
	styles: {
		// By using styles/**/*.sass we're telling gulp to check all folders for any sass file
		src: "assets/sass/**/*.scss",
		// Compiled files will end up in whichever folder it's found in (partials are not compiled)
		dest: "assets/css"
	}
	// Easily add additional paths
	// ,html: {
	//  src: '...',
	//  dest: '...'
	// }
};

// Define tasks after requiring dependencies
function style() {
	return gulp
		.src(paths.styles.src)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.on("error", sass.logError)
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(paths.styles.dest))
		// Add browsersync stream pipe after compilation
		.pipe(browserSync.stream())
		.pipe(sassdoc());
}
exports.style = style;

function reload() {
	browserSync.reload();
}

function go() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	gulp.watch(paths.styles.src, style);
	gulp.watch("index.html", reload);
}
// Don't forget to expose the task!
exports.go = go;
