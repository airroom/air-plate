'use strict';

import gulp from 'gulp';

gulp.task(watch);

function watch() {
  gulp.watch('./app/**/*.html', gulp.series('views'));
  gulp.watch('./app/styles/**/*.scss', gulp.series('styles'));
  gulp.watch('./app/images/**/*', gulp.series('images'));
}
