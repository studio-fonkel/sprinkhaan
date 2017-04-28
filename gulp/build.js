'use strict';

var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('build', ['css'], function () {

    exec('jspm bundle app/js/app.js dist/build.js --minify', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    });

    gulp.src('./app/*.html')
    .pipe(gulp.dest('./dist'));

    gulp.src('./app/jspm.config.js')
    .pipe(gulp.dest('./dist'));

    gulp.src(['./app/es6-shim.js', './app/shims_for_IE.js'])
    .pipe(gulp.dest('./dist'));


    gulp.src('./app/lib/*')
    .pipe(gulp.dest('./dist/lib'));
    gulp.src('./app/css/*')
    .pipe(gulp.dest('./dist/css'));
});
