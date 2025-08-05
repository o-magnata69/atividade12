console.log('Olá mundo!');

// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);

novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';

// Criando uma saudação animada
let mensagem = document.createElement('h2');
mensagem.innerText = 'Seja bem-vindo ao meu site! 💻✨';
mensagem.style.color = '#fff';
mensagem.style.backgroundColor = '#31bbcdff';
mensagem.style.padding = '20px';
mensagem.style.borderRadius = '10px';
mensagem.style.textAlign = 'center';
mensagem.style.boxShadow = '0 0 20px rgba(0,0,0,0.3)';
mensagem.style.transition = 'transform 0.5s';
mensagem.onmouseover = () => mensagem.style.transform = 'scale(1.1)';
mensagem.onmouseout = () => mensagem.style.transform = 'scale(1)';

document.body.appendChild(mensagem);

// Criando o elemento que vai mostrar as horas
let relogio = document.createElement('h3');
relogio.style.fontSize = '2em';
relogio.style.color = 'white';
relogio.style.backgroundColor = '#6a5acd';
relogio.style.padding = '15px';
relogio.style.borderRadius = '8px';
relogio.style.textAlign = 'center';
relogio.style.marginTop = '20px';
relogio.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';

document.body.appendChild(relogio);

// Função que atualiza o relógio a cada segundo
function atualizarRelogio() {
  const agora = new Date();
  const horas = agora.getHours().toString().padStart(2, '0');
  const minutos = agora.getMinutes().toString().padStart(2, '0');
  const segundos = agora.getSeconds().toString().padStart(2, '0');
  relogio.innerText = `Horário atual: ${horas}:${minutos}:${segundos}`;
}

// Atualiza o relógio imediatamente e depois a cada segundo
atualizarRelogio();
setInterval(atualizarRelogio, 1000);
