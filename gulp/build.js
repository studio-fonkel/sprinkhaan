'use strict';

var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('build', ['css'], function () {

    exec('jspm bundle src/js/app.js dist/build.js --minify', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    });

    gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'));

    gulp.src('./src/jspm.config.js')
    .pipe(gulp.dest('./dist'));

    gulp.src(['./src/es6-shim.js', './src/shims_for_IE.js'])
    .pipe(gulp.dest('./dist'));


    gulp.src('./src/lib/*')
    .pipe(gulp.dest('./dist/lib'));
    gulp.src('./src/css/*')
    .pipe(gulp.dest('./dist/css'));
});
