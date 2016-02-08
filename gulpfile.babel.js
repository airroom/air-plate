'use strict';

import gulp from 'gulp';
import requireDir from 'require-dir';

requireDir('./gulp/tasks');

gulp.task('dev', dev());
gulp.task('build', build());

function dev() {
  return gulp.series(
    'clean:build',
    'browserify:watch'
  );
}

function build() {
  return gulp.series(
    'clean:build',
    'browserify:build'
  );
}
