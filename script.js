const botaoCarta = document.querySelector('#criar-carta');
const p = document.querySelector('#carta-gerada');
const input = document.querySelector('#carta-texto');
// const classesArray = ['newspaper',
//   'magazine1',
//   'magazine2',
//   'medium',
//   'big',
//   'reallybig',
//   'rotateleft',
//   'rotateright',
//   'skewleft',
//   'skewright'];
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const skew = ['skewleft', 'skewright'];

const contador = document.querySelector('#carta-contador');

// Requisito 16
function aleatorio(parametros) {
  return Math.floor(Math.random() * parametros);
}

// Requisito 18
function conta() {
  const texto = input.value;
  const palavras = texto.split(' ');
  const comprimento = palavras.length;
  contador.innerHTML = comprimento;
}

// Requisito 4/5
function gerarCarta() {
  const texto = input.value;
  const palavras = texto.split(' ');
  p.innerHTML = '';
  for (let i = 0; i < palavras.length; i += 1) {
    const frase = document.createElement('span');
    frase.style.display = 'inline-block';
    frase.innerText = palavras[i];
    frase.classList.add(estilo[aleatorio(3)]);
    frase.classList.add(tamanho[aleatorio(3)]);
    frase.classList.add(rotacao[aleatorio(2)]);
    frase.classList.add(skew[aleatorio(2)]);
    p.appendChild(frase);
  }
  if (input.value === ' ' || !input.value) {
    p.innerText = 'Por favor, digite o conteúdo da carta.';
  }
  conta();
}
botaoCarta.addEventListener('click', gerarCarta);

// Requisito 17
// Consultando o PR do aluno Gabriel Pondaco ficou claro o pq do resultado negativo anteriormente. Na verdade, meu erro foi de interpretação do enunciado. Estava gerando apenas uma classe aleatória para cada elemento da carta, quando na verdade deveria estar gerando 4 classes aleatórias para o mesmo elemento. Fiz a correção na função gerarCarta e com isso o requisito 17 ficou bem mais claro.
function mudaCor(e) {
  const x = aleatorio(3);
  const y = aleatorio(3);
  const z = aleatorio(2);
  const w = aleatorio(2);
  e.target.className = `${skew[w]} ${rotacao[z]} ${estilo[x]} ${tamanho[y]}`;
}

p.addEventListener('click', mudaCor);
