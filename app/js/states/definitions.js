export default {
  home: {
    url: '/',
    templateUrl: 'home.html',
    data: {
      title: 'Air Plate',
      description: 'Boierplate de apps Angular.js 1.x, Bootstrap 4, Browserify e Gulp 4',
    },
  },

  answer: {
    url: '/resposta',
    templateUrl: 'answer.html',
    resolve: {
      answer: function theAnswerResolve() {
        return 42;
      },
    },
    controller: 'TheAnswerCtrl as theAnswer',
    data: {
      title: 'A Resposta para a vida, o universo e tudo mais é ...',
      description: 'Olha, só não fique chateado.',
    },
  },
};
