'use strict';

import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import browserify from 'browserify';
import watchify from 'watchify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import showError from '../util/show-error.js';
import bundleLogger from '../util/bundle-logger.js';

const BROWSERIFY_TRANSFORMS = [
  {'name': 'babelify', 'options': {} },
  {'name': 'browserify-ngannotate', 'options': {} },
  {'name': 'bulkify', 'options': {} }
];

gulp.task('browserify:watch', browserifyWatch);

function browserifyWatch() {
  let bundler = browserify({
    entries: ['./app/js/index.js'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  });
  bundler = watchify(bundler);

  BROWSERIFY_TRANSFORMS.forEach((transform) => bundler.transform(transform.name, transform.options));

  bundler.on('update', function watchifyUpdate() {
    bundleLogger.start();
    rebundle();
    bundleLogger.end();
  });

  return rebundle();

  function rebundle() {
    return bundler
    .bundle()
    .on('error', showError)
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/js'));
  }
}
