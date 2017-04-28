'use strict';

var gulp = require('gulp');
var requireDir = require('require-dir');
var browserSync = require('browser-sync').create();

process.setMaxListeners(0);

global.paths = {
    'html': './app/**/*.html',
    'scss': './app/scss/**/*.scss',
    'css': './app/css',
    'js': ['./app/**/*.js', '!./app/lib'],
    'src': './app'
};

global.browserSync = browserSync;

requireDir('./gulp', { recurse: false });
gulp.task('default', ['serve']);