'use strict';

import gulp from 'gulp';
import requireDir from 'require-dir';

const tasks = requireDir('./gulp/tasks');

global.isProd = process.env.NODE_ENV === 'production'; // Case you want to run an isolated task

gulp.task(dev);
gulp.task(build);
gulp.task(test);
gulp.task('test:dev', testDev);

gulp.task('testingRev', (...args) => {
  global.isProd = true;
  return gulp.series(tasks.clean, tasks.fonts, tasks.styles, tasks.views).apply(this, args);
});

function dev(...args) {
  global.isProd = false;
  return gulp.series(
    tasks.clean,
    tasks.views,
    gulp.parallel(tasks.browserify, tasks.styles, tasks.images, tasks.fonts),
    gulp.parallel(tasks.watch, tasks['browser-sync'])
  ).apply(this, args);
}

function build(...args) {
  global.isProd = true;
  return gulp.series(
    tasks.clean,
    tasks.views,
    gulp.parallel(tasks.browserify, tasks.styles, tasks.images, tasks.fonts)
  ).apply(this, args);
}

function test(...args) {
  global.isTestDev = false;
  return gulp.series(tasks.lint, tasks.unit).apply(this, args);
}

function testDev(...args) {
  global.isTestDev = true;
  return gulp.series(tasks.unit).apply(this, args);
}
