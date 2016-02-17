import SETTINGS from '../settings.js';

export default {
  name: 'App',
  fn: App
};

/*@ngInject*/
function App($state) {

  const app = {
    state: {
      title: function title() {
        let t = $state.current.data && $state.current.data.title
                ? $state.current.data.title
                : SETTINGS.DEFAULT_TITLE;

        return `${t}${SETTINGS.TITLE_SUFFIX}`;
      },
      description: function description() {
        return $state.current.data && $state.current.data.description
               ? $state.current.data.description
               : SETTINGS.DEFAULT_DESCRIPTION;
      }
    }
  };

  return app;
}
