var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano'),
    kss = require('kss'),
    sourcemaps = require('gulp-sourcemaps'),
    scsslint = require('gulp-scss-lint');

var paths = {
    scss: './assets/sass/style.scss',
    output: './build/'
};

gulp.task('lint', function () {
    return gulp.src(['./assets/sass/**/*.scss', '!./assets/sass/vendor/**/*.scss'])
        .pipe(scsslint({
            'config': '.scss-lint.yml',
            'reporterOutputFormat': 'Checkstyle',
            'filePipeOutput': 'scssReport.xml'
        }))
        .pipe(gulp.dest(
            (typeof process.env.CIRCLE_TEST_REPORTS != 'undefined') ?
                process.env.CIRCLE_TEST_REPORTS : paths.output))
        .pipe(scsslint.failReporter('E'))
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
gulp.task('examples', function () {
    return gulp.src('examples/*').pipe(gulp.dest(paths.output + "/examples"));
});
gulp.task('styleguide', function () {
    return kss({
        source: 'assets/sass',
        css: 'style.css',
        destination: paths.output,
        homepage: '../../README.md',
        builder: 'kss-builder'
    });
});

gulp.task('default', function () {
    gulp.start('styles');
});

gulp.task('build', function () {
    gulp.start(['lint', 'styles', 'styles.min', 'examples', 'styleguide']);
});

gulp.task('watch', function () {
    gulp.watch(paths.scss, ['styles']);
});

gulp.task('build.watch', function () {
    gulp.watch(paths.scss, ['build']);
});
