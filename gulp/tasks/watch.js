'use strict';

import gulp from 'gulp';

gulp.task(watch);

function watch() {
  gulp.watch('./app/**/*.html', gulp.series('views'));
}
