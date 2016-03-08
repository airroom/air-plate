export default {
  name: 'TheAnswerCtrl',
  def: TheAnswerCtrl,
};

/* @ngInject */
function TheAnswerCtrl(answer) {
  const vm = this;
  vm.answer = answer;
}
