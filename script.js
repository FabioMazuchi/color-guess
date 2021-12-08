const p = document.querySelector('#rgb-color');

const geraRgb = () => {
  const r = Math.trunc(Math.random() * 255);
  const g = Math.trunc(Math.random() * 255);
  const b = Math.trunc(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

p.innerHTML = geraRgb();

console.log(geraRgb());

// function gerarCores() {
//   const cores = {
//     c1: '',
//     c2: '',
//     c3: '',
//     c4: '',
//     c5: '',
//     c6: '',
//   };

//   for (const cor in cores) {
//     const r = Math.trunc(Math.random() * 255);
//     const g = Math.trunc(Math.random() * 255);
//     const b = Math.trunc(Math.random() * 255);

//     cores[cor] = 'rgb(' + r + ', ' + g + ', ' + b + ')';
//   }

//   const array = [cores.c1, cores.c2, cores.c3, cores.c4, cores.c5, cores.c6];
//   const circle = document.querySelectorAll('.ball');
//   const p = document.querySelector('#rgb-color');
//   const pResultado = document.querySelector('#answer');
//   const tamanho = array.length;
//   const corAleatoria = array[Math.trunc(Math.random() * array.length)];
//   const resultado = [];

//   pResultado.innerHTML = 'Escolha uma cor';
//   p.innerHTML = corAleatoria;

//   for (let i = 0; i < tamanho; i += 1) {
//     circle[i].style.backgroundColor = array[i];
//   }

//   resultado.push(circle);
//   resultado.push(corAleatoria);
//   return resultado;
// }

// function verificarCor() {
//   const results = gerarCores();
//   const circles = results[0];
//   const cor = results[1];
//   const pResultado = document.querySelector('#answer');
//   const pPlacar = document.querySelector('#score');
//   let score = 0;
//   const tamanho = results[0].length;

//   for (let i = 0; i < tamanho; i += 1) {
//     circles[i].addEventListener('click', function () {
//       if (circles[i].style.backgroundColor === cor) {
//         pResultado.innerHTML = 'Acertou!';
//         pPlacar.innerHTML = score += 3;
//       } else {
//         pResultado.innerHTML = 'Errou! Tente novamente!';
//       }
//     });
//   }
// }

// window.onload = function () {
//   gerarCores();
//   verificarCor();

//   const btnReset = document.querySelector('#reset-game');

//   btnReset.addEventListener('click', function () {
//     gerarCores();
//     // verificarCor();
//   });
// };
