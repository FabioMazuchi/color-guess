const p = document.querySelector('#rgb-color');
const divBalls = document.querySelector('.cores');
const pAnswer = document.querySelector('#answer');
const btnReset = document.querySelector('#reset-game');
const pScore = document.querySelector('#score');
let score = Number(pScore.innerHTML);

const geraRgb = () => {
  const r = Math.trunc(Math.random() * 255);
  const g = Math.trunc(Math.random() * 255);
  const b = Math.trunc(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

pAnswer.innerHTML = 'Escolha uma cor';

const getCorOnBalls = () => {
  const balls = divBalls.children;
  const aleatorio = Math.trunc(Math.random() * balls.length);

  p.innerHTML = balls[aleatorio].style.backgroundColor;
};

const checkAcerto = ({ target }) => {
  const resp = target.style.backgroundColor;
  const cor = p.innerHTML;

  if (cor === resp) {
    pAnswer.innerHTML = 'Acertou!';
    score += 3;
    pScore.innerHTML = score;
  } else {
    pAnswer.innerHTML = 'Errou! Tente novamente!';
  }
};

const addCoresOnBalls = () => {
  const balls = divBalls.children;

  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = geraRgb();
    balls[i].addEventListener('click', checkAcerto);
  }
};

const resetar = () => {
  console.log('resetando');
  addCoresOnBalls();
  getCorOnBalls();
  pAnswer.innerHTML = 'Escolha uma cor';
};

btnReset.addEventListener('click', resetar);

addCoresOnBalls();
getCorOnBalls();
