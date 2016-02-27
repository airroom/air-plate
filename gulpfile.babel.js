'use strict';

import gulp from 'gulp';
import requireDir from 'require-dir';

requireDir('./gulp/tasks');

global.isProd = process.env.NODE_ENV === 'production'; // Case you want to run an isolated task

gulp.task(dev);
gulp.task(build);
gulp.task('test', gulp.series('lint', 'unit'));

function dev() {
  global.isProd = false;
  return gulp.series(
    'clean',
    'views',
    gulp.parallel('browserify', 'styles', 'images', 'fonts'),
    gulp.parallel('watch', 'browserSync')
  ).apply(this, arguments);
}

function build() {
  global.isProd = true;
  return gulp.series(
    'clean',
    'views',
    gulp.parallel('browserify', 'styles', 'images', 'fonts')
  ).apply(this, arguments);
}
