'use strict';

import gulp from 'gulp';
import requireDir from 'require-dir';

const tasks = requireDir('./gulp/tasks');

global.isProd = process.env.NODE_ENV === 'production'; // Case you want to run an isolated task

gulp.task(dev);
gulp.task(build);
gulp.task('test', gulp.series(tasks.lint, tasks.views, tasks.unit));

function dev() {
  global.isProd = false;
  return gulp.series(
    tasks.clean,
    tasks.views,
    gulp.parallel(tasks.browserify, tasks.styles, tasks.images, tasks.fonts),
    gulp.parallel(tasks.watch, tasks['browser-sync'])
  ).apply(this, arguments);
}

function build() {
  global.isProd = true;
  return gulp.series(
    tasks.clean,
    tasks.views,
    gulp.parallel(tasks.browserify, tasks.styles, tasks.images, tasks.fonts)
  ).apply(this, arguments);
}
