'use strict';

import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import gulpIf from 'gulp-if';
import browserify from 'browserify';
import bs from 'browser-sync';
import watchify from 'watchify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import handleError from '../util/handle-error.js';
import bundleLogger from '../util/bundle-logger.js';

const BROWSERIFY_TRANSFORMS = [
  {'name': 'babelify', 'options': {} },
  {'name': 'browserify-ngannotate', 'options': {} },
  {'name': 'bulkify', 'options': {} }
];

gulp.task('browserify', browserifyTask);

function browserifyTask() {
  let bundler = browserify({
    entries: ['./app/js/index.js'],
    debug: !global.isProd,
    cache: {},
    packageCache: {},
    fullPaths: !global.isProd
  });

  BROWSERIFY_TRANSFORMS.forEach((transform) => bundler.transform(transform.name, transform.options));

  if (!global.isProd) {
    bundler = watchify(bundler);

    bundler.on('update', function watchifyOnUpdate() {
      bundleLogger.start();
      rebundle();
      bundleLogger.end();
    });
  } else {
    bundler.plugin('bundle-collapser/plugin');
  }

  return rebundle();

  function rebundle() {
    return bundler.bundle()
    .on('error', function browserifyOnError(e) {
      e.plugin = 'browserify';
      handleError.call(this, e);
    })
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulpIf(!global.isProd, sourcemaps.init({ loadMaps: true })))
    .pipe(gulpIf(!global.isProd, sourcemaps.write()))
    .pipe(gulpIf(global.isProd, uglify({ compress: { drop_console: true } })))
    .pipe(gulp.dest('./build/js'))
    .pipe(bs.stream());
  }
}
