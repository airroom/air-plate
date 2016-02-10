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

  return config;
})();
