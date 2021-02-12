const quiz = [
  {
    question:'2020年に最も売れた漫画とはどれでしょう?',
    answers: ['ジョジョの奇妙な冒険','鬼滅の刃','呪術廻戦','ワンピース'],
    correct: '鬼滅の刃'
  }, {
    question:'2020年10月13日に改名した欅坂46の新しいグループ名とは？',
    answers: ['山坂46','緑坂46','櫻坂46','花坂46'],
    correct: '櫻坂46'
  }, {
    question:'2020年に就任した総理大臣とは?',
    answers: ['安倍晋三','麻生太郎','吉田茂','菅義偉'],
    correct: '菅義偉'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const correct = '鬼滅の刃';

const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz ();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解!');
    score++;
  } else {
    window.alert('不正解!');
  }

  quizIndex++;

  if(quizIndex < quizLength) {
    //問題数がまだあれば上記を実行
    setupQuiz();
  } else {
    //問題数がもう無ければ下記を実行
    window.alert('終了!あなたの正解数は' + score +'/' + quizLength + 'です！ ');
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}