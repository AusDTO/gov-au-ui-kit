var gulp = require('gulp'),
    sass = require('gulp-sass');

var paths = {
    scss: './assets/sass/*.scss'
};

gulp.task('styles', function () {
    return gulp.src(paths.scss)
        .pipe(sass())
        .pipe(gulp.dest('./build/'));
});

gulp.task('default',function(){
    gulp.start('styles');
});