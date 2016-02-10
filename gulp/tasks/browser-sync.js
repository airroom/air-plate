'use strict';

import gulp from 'gulp';
import bs from 'browser-sync';
import morgan from 'morgan';

gulp.task(browserSync);

function browserSync(cb) {
  bs.init({
    server: {
      baseDir: './build',
      middleware: morgan('dev')
    },
  }, cb);
}
