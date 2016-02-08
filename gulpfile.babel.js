'use strict';

import gulp from 'gulp';
import requireDir from 'require-dir';

requireDir('./gulp/tasks');

global.isProd = process.env.NODE_ENV === 'production'; // Case you want to run an isolated task

gulp.task('dev', devTask);
gulp.task('build', buildTask);

function devTask() {
  global.isProd = false;
  return gulp.series(
    'clean:build',
    'browserify'
  ).apply(this, arguments);
}

function buildTask() {
  global.isProd = true;
  return gulp.series(
    'clean:build',
    'browserify'
  ).apply(this, arguments);
}
