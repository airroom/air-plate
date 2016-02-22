'use strict';

const BOOTSTRAP_UMD_FOLDER = '/node_modules/bootstrap/dist/js/umd/';

module.exports = {
  replacements: {
    'bootstrap/(\\w+)': `${process.cwd()}${BOOTSTRAP_UMD_FOLDER}$1.js`
  }
};
