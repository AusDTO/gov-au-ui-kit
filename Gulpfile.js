var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano'),
    kss = require('kss'),
    sourcemaps = require('gulp-sourcemaps')
    sassLint = require('gulp-sass-lint');

var paths = {
    scss: './assets/sass/**/*.scss',
    output: './build/'
};

gulp.task('lint', function () {
    return gulp.src('./assets/sass/*.scss')
        .pipe(sassLint({
            options: {
                configFile: '.sass-lint.yml'
            }
        }))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
});

gulp.task('styles', function () {
    return gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.output));
});

gulp.task('styles.min', function () {
    return gulp.src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.output));
});
gulp.task('styleguide', function () {
    return kss({
        source: 'assets/sass',
        destination: paths.output,
        homepage: '../../README.md',
        builder: 'kss-builder'
    });
});

gulp.task('default',function(){
    gulp.start('styles');
});

gulp.task('build',function(){
    gulp.start(['lint', 'styles','styles.min','styleguide']);
});

gulp.task('watch',function() {
    gulp.watch(paths.scss,['styles']);
});

gulp.task('build.watch',function() {
    gulp.watch(paths.scss,['build']);
});