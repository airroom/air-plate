'use strict';

import config from '../config.js';
import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import gulpIf from 'gulp-if';
import brfy from 'browserify';
import bs from 'browser-sync';
import watchify from 'watchify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import errorHandler from '../util/error-handler.js';
import bundleLogger from '../util/bundle-logger.js';

const BOOTSTRAP_UMD_FOLDER = './node_modules/bootstrap/dist/js/umd/';

const BROWSERIFY_TRANSFORMS = [
  {'name': 'babelify', 'options': { compact: false } },
  {'name': 'browserify-shim', 'options': {} },
  {'name': 'aliasify', 'options': {} },
  {'name': 'bulkify', 'options': {} },
  {'name': 'browserify-ngannotate', 'options': {} }
];

export default browserify;

function browserify() {
  let bundler = brfy({
    entries: config.scripts.browserify.entries,
    debug: !global.isProd,
    cache: {},
    packageCache: {},
    fullPaths: !global.isProd
  });

  BROWSERIFY_TRANSFORMS.forEach((transform) =>
    bundler.transform(transform.name, transform.options)
  );

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
      errorHandler.call(this, e);
    })
    .pipe(source(config.scripts.browserify.fileName))
    .pipe(buffer())
    .pipe(gulpIf(!global.isProd, sourcemaps.init({ loadMaps: true })))
    .pipe(gulpIf(!global.isProd, sourcemaps.write()))
    .pipe(gulpIf(global.isProd, uglify({ compress: { drop_console: true } })))
    .pipe(gulp.dest(config.scripts.dest))
    .pipe(bs.stream());
  }
}
