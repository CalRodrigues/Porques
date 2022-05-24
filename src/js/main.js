window.addEventListener('scroll', mostrarBackToTop)

mostrarBackToTop()

function mostrarBackToTop() {
  if (scrollY > 100) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

const perguntas = [
  {
    numero: 'Questão 01',
    questao: 'Maria foi embora rápido _____ estava atrasada.',
    a: 'Porque',
    b: 'Por que',
    c: 'Porquê',
    d: 'Por quê',
    correta: 'a'
  },

  {
    numero: 'Questão 02',
    questao: 'Maria foi embora rápido _____ estava atrasada.',
    a: 'Porque',
    b: 'Por que',
    c: 'Porquê',
    d: 'Por quê',
    correta: 'c'
  },

  {
    numero: 'Questão 03',
    questao: 'Maria foi embora rápido _____ estava atrasada.',
    a: 'Porque',
    b: 'Por que',
    c: 'Porquê',
    d: 'Por quê',
    correta: 'b'
  },

  {
    numero: 'Questão 04',
    questao: 'Maria foi embora rápido _____ estava atrasada.',
    a: 'Porque',
    b: 'Por que',
    c: 'Porquê',
    d: 'Por quê',
    correta: 'd'
  },

  {
    numero: 'Questão 05',
    questao: 'Maria foi embora rápido _____ estava atrasada.',
    a: 'Porque',
    b: 'Por que',
    c: 'Porquê',
    d: 'Por quê',
    correta: 'd'
  },

  {
    numero: 'Questão 06',
    questao: 'Maria foi embora rápido _____ estava atrasada.',
    a: 'Porque',
    b: 'Por que',
    c: 'Porquê',
    d: 'Por quê',
    correta: 'a'
  },

  {
    numero: 'Questão 07',
    questao: 'Maria foi embora rápido _____ estava atrasada.',
    a: 'Porque',
    b: 'Por que',
    c: 'Porquê',
    d: 'Por quê',
    correta: 'b'
  },

  {
    numero: 'Questão 08',
    questao: 'Maria foi embora rápido _____ estava atrasada.',
    a: 'Porque',
    b: 'Por que',
    c: 'Porquê',
    d: 'Por quê',
    correta: 'c'
  },

  {
    numero: 'Questão 09',
    questao: 'Maria foi embora rápido _____ estava atrasada.',
    a: 'Porque',
    b: 'Por que',
    c: 'Porquê',
    d: 'Por quê',
    correta: 'c'
  },

  {
    numero: 'Questão 10',
    questao: 'Maria foi embora rápido _____ estava atrasada.',
    a: 'Porque',
    b: 'Por que',
    c: 'Porquê',
    d: 'Por quê',
    correta: 'a'
  }
];

const quiz = document.getElementById('quiz')
const numero = document.getElementById('numero')
const pergunta = document.getElementById('pergunta')
const opcoesEls = document.querySelectorAll('.alternativa')

