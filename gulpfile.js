// -----------------------------------------------------------------------------
// All Gulp Tasks
// -----------------------------------------------------------------------------

/**
 * Requires
 */
var gulp = require('gulp');
var postcss    = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var csslint = require('gulp-csslint');
var reporter = require("postcss-reporter");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

/**
 * SASS Task Option
 */
gulp.task('sass', function () {
    return gulp.src('static_dev/theme/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe( sourcemaps.init() )
        .pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
        //.pipe( sourcemaps.write('.') )
        .pipe( gulp.dest('static_dev/theme/css') );      
});

/**
 * PostCSS Task Option
 */
gulp.task('postcss', function () {
    return gulp.src('static_dev/theme/styles/postcss/*.css')
        .pipe( sourcemaps.init() )
        .pipe( postcss([ require('autoprefixer'), require('precss'), ]) )
        .pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
        //.pipe( sourcemaps.write('.') )
        .pipe( gulp.dest('static_dev/theme/css') );      
});

gulp.task('scripts', function() {
  return gulp.src('static_dev/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('static_dev/js/min'));
});

/**
 * Concatenate PostCSS and SASS builds
 */
gulp.task('concat', function() {
  return gulp.src(['static_dev/theme/css/main.min.css', 'static_dev/theme/css/postcss.min.css'])
    .pipe(concat('all.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('static_dev/theme/css'));
});

/**
 * Get CSS Stats
 */
gulp.task('cssstats', function() {
    var cssstats = require('postcss-cssstats');
    var postcss = require('gulp-postcss');
    return gulp
        .src('static_dev/theme/css/all.min.css')
        .pipe(
            postcss([
                cssstats(
                    function(stats) {
                        console.log(stats);
                    }
                )
            ])
        );
});

/**
 * Get CSS Issues Report
 */
gulp.task('report', function() {
  gulp.src('static_dev/theme/css/all.min.css')
    .pipe(csslint())
    .pipe(csslint.reporter());
});

/**
 * Watch files for changes
 */
gulp.task('watch-all', function(){
  gulp.watch(['static_dev/theme/styles/*.scss', 'static_dev/theme/styles/**/*.scss', 'static_dev/theme/styles/**/**/*.scss', 'static_dev/theme/styles/**/**/**/*.scss', 'static_dev/theme/styles/postcss/*.css',  'static_dev/js/*.js'], ['postcss','sass', 'scripts', 'concat']); 
});

gulp.task('watch-sass', function(){
  gulp.watch(['static_dev/theme/styles/*.scss', 'static_dev/theme/styles/**/*.scss', 'static_dev/theme/styles/**/**/*.scss', 'static_dev/theme/styles/**/**/**/*.scss'], ['sass', 'concat']); 
});

gulp.task('watch-postcss', function(){
  gulp.watch(['static_dev/theme/styles/postcss/*.css'], ['postcss','concat']); 
});
