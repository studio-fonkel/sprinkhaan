'use strict';

var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('build', ['css'], function () {

    exec('jspm bundle js/Sprinkhaan.js dist/sprinkhaan.min.js --minify', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    });

    exec('jspm bundle js/Sprinkhaan.js dist/sprinkhaan.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    });

});
