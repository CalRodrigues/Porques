const perguntas = [
  {
    numero: 'Questão 01',
    questao: 'Maria não foi à escola _____ estava chovendo.',
    a: 'Porque',
    b: 'Por que',
    c: 'Porquê',
    d: 'Por quê',
    correta: 'a'
  },

  {
    numero: 'Questão 02',
    questao: 'Estou tão feliz e não sei _____!',
    a: 'Porque',
    b: 'Por que',
    c: 'Porquê',
    d: 'Por quê',
    correta: 'd'
  },

  {
    numero: 'Questão 03',
    questao: 'Joana quis saber _____ Tiago estava triste.',
    a: 'Porque',
    b: 'Por que',
    c: 'Porquê',
    d: 'Por quê',
    correta: 'b'
  },

  // {
  //   numero: 'Questão 04',
  //   questao: 'Todos estavam olhando para cima e ninguém sabia o _____.',
  //   a: 'Porque',
  //   b: 'Por que',
  //   c: 'Porquê',
  //   d: 'Por quê',
  //   correta: 'c'
  // },

  // {
  //   numero: 'Questão 05',
  //   questao: '_____ estava cansado, não foi ao cinema.',
  //   a: 'Porque',
  //   b: 'Por que',
  //   c: 'Porquê',
  //   d: 'Por quê',
  //   correta: 'a'
  // },

  // {
  //   numero: 'Questão 06',
  //   questao: 'A professora queria saber o _____ de ninguém ter feito a lição de casa.',
  //   a: 'Porque',
  //   b: 'Por que',
  //   c: 'Porquê',
  //   d: 'Por quê',
  //   correta: 'c'
  // },

  // {
  //   numero: 'Questão 07',
  //   questao: '_____ não posso sair com meus amigos?',
  //   a: 'Porque',
  //   b: 'Por que',
  //   c: 'Porquê',
  //   d: 'Por quê',
  //   correta: 'b'
  // },

  // {
  //   numero: 'Questão 08',
  //   questao: 'Pedro foi embora e nem disse _____.',
  //   a: 'Porque',
  //   b: 'Por que',
  //   c: 'Porquê',
  //   d: 'Por quê',
  //   correta: 'd'
  // },

  // {
  //   numero: 'Questão 09',
  //   questao: 'Acabei comprando a outra televisão _____ era a mais barata.',
  //   a: 'Porque',
  //   b: 'Por que',
  //   c: 'Porquê',
  //   d: 'Por quê',
  //   correta: 'a'
  // },

  // {
  //   numero: 'Questão 10',
  //   questao: 'Mateus não entende o _____ de tudo isto.',
  //   a: 'Porque',
  //   b: 'Por que',
  //   c: 'Porquê',
  //   d: 'Por quê',
  //   correta: 'c'
  // }
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
const quiz_list = document.getElementById('quiz-list')

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

function estilosQuiz() {
  numero.innerHTML = 'Resultado'

  numero.style.marginBottom = '8rem'
  questao.style.marginBottom = '12rem'
  questao.style.fontSize = '6rem'

  quiz_list.style.display = 'none'
  submit.style.display = 'none'
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
        estilosQuiz()
        questao.innerHTML = `Você acertou ${score} pergunta. <br> Reveja o material...`
      } else if (score >= 2 && score <= 5) {
        estilosQuiz()
        questao.innerHTML = `Você acertou ${score} perguntas. <br> Você pode fazer melhor...` 
      } else if (score >= 6 && score == 10) {
        estilosQuiz()
        questao.innerHTML = `Você acertou ${score} perguntas. <br> Parabéns!!!`
      }
    }
  }
})
