const randomZueira = {
  controller: RandomZueiraCtrl,
  template: '{{ randomZueira.sentence }}',
};

/* @ngInject */
function RandomZueiraCtrl() {

}

export default {
  name: 'randomZueira',
  def: randomZueira,
};
