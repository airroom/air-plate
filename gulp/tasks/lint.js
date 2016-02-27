'use strict';

import config from '../config.js';
import gulp from 'gulp';
import eslint from 'gulp-eslint';
import fs from 'fs';

gulp.task(lint);

function lint() {
  let lintStream;

  if (fs.existsSync('reports') === false) {
    fs.mkdir('reports');
  }

  lintStream = fs.createWriteStream('reports/lint.html', {
    defaultEncoding: 'utf8'
  });

  return gulp.src([config.scripts.src, `!${config.sourceDir}/js/vendor/**/*`])
  .pipe(eslint())
  .pipe(eslint.format('html', lintStream))
  .pipe(eslint.formatEach('stylish'))
  .pipe(eslint.failAfterError());
}
