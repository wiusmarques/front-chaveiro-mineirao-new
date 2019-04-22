var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var fs = require('fs');
var nunjucks = require('gulp-nunjucks-html');
var inject = require('gulp-inject-string');
var image = require('gulp-image');
var debug = require('gulp-debug');

//Register pages to copy files CSS and JS to HTML page


gulp.task('connect', function () {
    connect.server({
        root: 'dist',
        livereload: true
    });
});

// Task to copy HTML files [src -> dist]
gulp.task('nunjucks', function () {
    return gulp.src('src/templates/*.html')
        .pipe(nunjucks({
            searchPaths: ['src/templates']
        }))
        .pipe(gulp.dest('dist/pages'))
        .pipe(connect.reload());

});

gulp.task('sass', function () {
    return gulp.src("src/assets/scss/*.scss")
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(gulp.dest("dist/assets/css"))
        .pipe(connect.reload());
});

gulp.task('sass-common', function () {
    return gulp.src("src/assets/scss/common/*.scss")
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(concat('common.min.css'))
        .pipe(gulp.dest("dist/assets/css/common/"))
        .pipe(connect.reload());
});

gulp.task('image', function () {
    return gulp.src('src/assets/img/*')
        .pipe(image())
        .pipe(gulp.dest('dist/assets/img'));
});

gulp.task('watch', function () {
    gulp.watch('src/templates/**/*.html', gulp.series(['nunjucks']));
    gulp.watch('src/assets/**/*.scss', gulp.series(['sass', 'sass-common']));
});

gulp.task('server', gulp.parallel(['watch', 'connect']));

//Task primary
gulp.task('default', gulp.series(['nunjucks', 'sass', 'sass-common', 'image','server']));