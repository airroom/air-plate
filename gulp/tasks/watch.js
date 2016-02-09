'use strict';

import gulp from 'gulp';

gulp.task(watch);

function watch() {
  gulp.watch('./app/views/**/*.html', gulp.series('views'));
}
