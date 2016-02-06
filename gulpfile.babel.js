'use strict';

import gulp from 'gulp';
import requireDir from 'require-dir';

requireDir('./gulp/tasks');

gulp.task('dev', dev());

function dev() {
  return gulp.series(
    'clean:build',
    'browserify:watch'
  );
}
