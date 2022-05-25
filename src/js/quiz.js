const perguntas = [
  {
    numero: 'Questão 01',
    questao: 'Maria foi embora rápido _____estava atrasada.',
    a: 'Porque',
    b: 'Por que',
    c: 'Porquê',
    d: 'Por quê',
    correta: 'a'
  },

  {
    numero: 'Questão 02',
    questao: 'Pedro perguntou a Tiago _____ ele estava feliz.',
    a: 'Porque',
    b: 'Por que',
    c: 'Porquê',
    d: 'Por quê',
    correta: 'c'
  },

  {
    numero: 'Questão 03',
    questao: '_____ o céu é azul?',
    a: 'Porque',
    b: 'Por que',
    c: 'Porquê',
    d: 'Por quê',
    correta: 'b'
  },

  {
    numero: 'Questão 04',
    questao: 'Joana venha ver algo. _____ Perguntou Joana',
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
]

const quiz = document.getElementById('quiz')
const numero = document.getElementById('numero')
const questao = document.getElementById('questao')
const opcoesEls = document.querySelectorAll('.alternativa')
const a_text = document.getElementById('a_texto')
const b_text = document.getElementById('b_texto')
const c_text = document.getElementById('c_texto')
const d_text = document.getElementById('d_texto')
const submit = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  respostaDeselecionada()

  const currentQuizData = perguntas[currentQuiz]

  numero.innerHTML = currentQuizData.numero
  questao.innerHTML = currentQuizData.questao
  a_text.innerHTML = currentQuizData.a
  b_text.innerHTML = currentQuizData.b
  c_text.innerHTML = currentQuizData.c
  d_text.innerHTML = currentQuizData.d
}

function respostaDeselecionada() {
  opcoesEls.forEach(opcoesEls => (opcoesEls.checked = false))
}

function respostaSelecionada() {
  let pergunta

  opcoesEls.forEach(opcoesEls => {
    if (opcoesEls.checked) {
      pergunta = opcoesEls.id
    }
  })
  return pergunta
}

submit.addEventListener('click', () => {
  const pergunta = respostaSelecionada()

  if (pergunta) {
    if (pergunta === perguntas[currentQuiz].correta) {
      score++
    }

    currentQuiz++

    if (currentQuiz < perguntas.length) {
      loadQuiz()
    } else {
      if (score == 1) {
        numero.innerHTML = 'Resultado'
        questao.innerHTML = `Você acertou ${score} pergunta.`
        document.getElementById('quiz-list').style.display = 'none'
        submit.style.display = 'none'
      } else {
        numero.innerHTML = 'Resultado'
        questao.innerHTML = `Você acertou ${score} perguntas.`
        document.getElementById('quiz-list').style.display = 'none'
        submit.style.display = 'none'
      }
    }
  }
})
