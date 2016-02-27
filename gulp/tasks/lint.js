'use strict';

import config from '../config.js';
import gulp from 'gulp';
import eslint from 'gulp-eslint';
import fs from 'fs';

export default lint;

function lint() {
  let lintStream;

  if (fs.existsSync('reports') === false) {
    fs.mkdir('reports');
  }

  lintStream = fs.createWriteStream('reports/lint.html', {
    defaultEncoding: 'utf8'
  });

  return gulp.src([config.scripts.src,
    `!${config.sourceDir}/js/vendor/**/*`,
    `!${config.sourceDir}/js/templates.js`
  ])
  .pipe(eslint())
  .pipe(eslint.format('html', lintStream))
  .pipe(eslint.formatEach('stylish'))
  .pipe(eslint.failAfterError());
}
