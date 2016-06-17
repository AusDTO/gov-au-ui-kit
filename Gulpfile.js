var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano'),
    kss = require('kss'),
    scsslint = require('gulp-scss-lint'),
    autoprefixer = require('gulp-autoprefixer'),
    gitVersion = require('gulp-gitversion'),
    scssMerge = require('./lib/gulp-scss-merge.js'),
    uglify = require('gulp-uglify'),
    del = require('del')
    ;

var paths = {
    scssDir: './assets/sass/**/*.scss',
    scss: './assets/sass/ui-kit.scss',
    outputAssets: './build/latest',
    outputHTML: './build'
};

var options = {
  autoprefixer: {
    browsers: ['last 2 versions']
  }
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
                process.env.CIRCLE_TEST_REPORTS : paths.outputAssets))
        .pipe(scsslint.failReporter('E'))
});

gulp.task('ui-kit', function () {
    return gulp.src(paths.scss)
        .pipe(autoprefixer())
        .pipe(sass().on('error', sass.logError))
        .pipe(gitVersion())
        .pipe(gulp.dest(paths.outputAssets));
});
gulp.task('ui-kit.scssmerge', function() {
    return gulp.src(paths.scss)
        .pipe(scssMerge('_ui-kit.scss'))
        .pipe(gulp.dest(paths.outputAssets));
});
gulp.task('ui-kit.min', function () {
    return gulp.src(paths.scss)
        .pipe(autoprefixer())
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(gitVersion())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.outputAssets));
});
gulp.task('examples', function () {
    return gulp.src('examples/*')
        .pipe(gulp.dest(paths.outputHTML));
});
gulp.task('nginx', function () {
    return gulp.src('nginx.conf')
        .pipe(gulp.dest(paths.outputHTML));
});
gulp.task('htmlvalidate', function () {
    validator = require('gulp-html')
    return gulp.src(['build/*.html','build/**/*.html'])
        .pipe(validator({'verbose':true}));
});
gulp.task('styleguide', function () {
    return kss({
        source: 'assets/sass',
        css: '../latest/ui-kit.css',
        destination: paths.outputHTML+'/kss',
        homepage: '../../README.md',
        builder: 'kss-builder'
    });
});

gulp.task('clean', function(done) {
    del([paths.outputAssets,paths.outputHTML], done);
});

gulp.task('default', function () {
    gulp.start('ui-kit');
});

gulp.task('build', function () {
    gulp.start(['lint', 'ui-kit', 'examples', 'styleguide']);
});

gulp.task('build.prod', function () {
    gulp.start(['clean', 'lint', 'nginx', 'ui-kit', 'ui-kit.min', 'ui-kit.scssmerge', 'examples', 'styleguide', 'htmlvalidate']);
});

gulp.task('watch', function () {
    gulp.watch(paths.scssDir, ['ui-kit']);
});

gulp.task('watch.build', function () {
    gulp.watch(paths.scssDir, ['build']);
});
