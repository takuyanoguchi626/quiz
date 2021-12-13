
const quiz =[
  {
    question:"三角形の内角の和は？",
    answers: [
    "120°",
    "140°",
    "180°",
    "360°",
    ],
    correct:"180°",
  },
  {
    question:"2019年における世界の人口は約何人？",
    answers: [
    "62億人",
    "77億人",
    "81億人",
    "1000億人",
    ],
    correct:"77億人"},
  {
    question:"日本の最西端の島の名前は？",
    answers: [
    "与那国島",
    "南鳥島",
    "沖ノ鳥島",
    "淡路島",
    ],
    correct:"与那国島"}
];

const quizLength = quiz.length;
let quizIndex =0;
let score =0;


const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let index = 0;
  while (index < buttonLength){
    $button[index].textContent = quiz[quizIndex].answers[index];
    index++;
  }
};

setupQuiz();

const clickHandler = (e) => {
  if(e.target.textContent === quiz[quizIndex].correct) {
      window.alert("正解");
      score++;
     }else{
       window.alert("不正解");
      }

  quizIndex++;
  if (quizIndex < quizLength){
    setupQuiz();
  }else{
    window.alert("終了です。あなたの点数は"+ score +"/"+ quizLength+"です！");
  }
};

let takuya = 0;
while(takuya < buttonLength){
  $button[takuya].addEventListener("click",(e) => {
   clickHandler(e);
  });
  takuya++;
}




