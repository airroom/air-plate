'use strict';

export default (() => {
  let config = {};

  config.sourceDir = './app';
  config.destDir = './build';

  config.styles = {
    src: `${config.sourceDir}/styles/**/*.scss`,
    dest: `${config.destDir}/css/`,
    sassIncludePaths: []
  };

  config.scripts = {
    src: `${config.sourceDir}/js/**/*.js`,
    dest: `${config.destDir}/js/`,
    browserify: {
      entries: [`${config.sourceDir}/js/index.js`],
      fileName: 'app.js'
    },
  };

  config.fonts = {
    src: `${config.sourceDir}/fonts/**/*`,
    dest: `${config.destDir}/fonts/`,
  };

  config.images = {
    src: `${config.sourceDir}/images/**/*`,
    dest: `${config.destDir}/images/`,
  };

  config.views = {
    index: `${config.sourceDir}/index.html`,
    angular: {
      src: `${config.sourceDir}/views/**/*.html`,
      dest: `${config.sourceDir}/js/`
    }
  };

  return config;
})();
