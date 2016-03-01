import sentences from './random-zueira-sentences.json';

const randomZueira = {
  isolate: true,
  controller: RandomZueiraCtrl,
  template: '{{ $ctrl.sentence }}',
};

/* @ngInject */
function RandomZueiraCtrl() {
  const vm = this;
  const randomNumber = Math.floor(Math.random() * sentences.length);
  vm.sentence = sentences[randomNumber];
}

export default {
  name: 'randomZueira',
  def: randomZueira,
};
