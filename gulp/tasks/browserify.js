'use strict';

import config from '../config.js';
import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import gulpIf from 'gulp-if';
import rev from 'gulp-rev';
import rename from 'gulp-rename';
import brfy from 'browserify';
import bs from 'browser-sync';
import watchify from 'watchify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import errorHandler from '../util/error-handler.js';
import bundleLogger from '../util/bundle-logger.js';

export default browserify;

function browserify() {
  let bundler = brfy({
    entries: config.browserify.entries,
    debug: !global.isProd,
    cache: {},
    packageCache: {},
    fullPaths: !global.isProd,
  });

  config.browserify.transforms.forEach((transform) =>
    bundler.transform(transform.name, transform.options)
  );

  if (!global.isProd) {
    bundler = watchify(bundler);

    bundler.on('update', () => {
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
      errorHandler.call(this, e);
    })
    .pipe(source(config.browserify.fileName))
    .pipe(buffer())
    .pipe(gulpIf(!global.isProd, sourcemaps.init({ loadMaps: true })))
    .pipe(gulpIf(!global.isProd, sourcemaps.write()))
    .pipe(gulpIf(global.isProd, uglify({ compress: { drop_console: true } })))
    .pipe(gulpIf(global.isProd, rev()))
    .pipe(gulp.dest(config.scripts.dest))
    .pipe(gulpIf(global.isProd, rename((path) => path.dirname = '/js/' )))
    .pipe(gulpIf(global.isProd, rev.manifest({ merge: true })))
    .pipe(gulpIf(global.isProd, gulp.dest('.')))
    .pipe(bs.stream());
  }
}
