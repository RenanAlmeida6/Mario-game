const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOverMessage = document.querySelector('.game-over-message');
const clouds = document.querySelector('.clouds');
const placar = document.querySelector('.placar');
const start = document.querySelector('.start');
const divStartPlacar = document.querySelector('.divStartPlacar');
const reload = document.querySelector('.reload');
const divMenu = document.querySelector('.divMenu');
const menuButton = document.querySelector('.menuButton');
const divOpcoes = document.querySelector('.divOpcoes');

var interval
var somaPlacar = 0;

document.body.onkeyup = function (e) {
  if (e.key == " " ||
    e.code == "Space" ||
    e.keyCode == 32
  ) {
    document.getElementById('JumpSong').play();

    mario.classList.add('jump');
    setTimeout(() => {
      mario.classList.remove('jump');
    }, 710);
  }

}

function Start() {
  pipe.style.display = "block";
  mario.style.display = "block";
  start.style.display = "none";
  placar.style.display = "block";
  divStartPlacar.style.marginTop = "0px";
  divMenu.style.display = "none";

  interval = setInterval(Caunter, 1000)

  document.getElementById('song').innerHTML = '<audio id="JumpSong" src="./Musics/ring.mp3" type="audio/mpeg">';
  document.getElementById('Musica-Fundo').play();
}
function Caunter() {
  somaPlacar = somaPlacar + 1;
  placar.textContent = (somaPlacar).toString();
}

function Reload() {
  window.location.reload();
}

const loop = setInterval(() => {


  const pipePosition = pipe.offsetLeft;
  const marioPositon = +window.getComputedStyle(mario).bottom.replace('px', '')

  if (pipePosition <= 120 && pipePosition > 0 && marioPositon < 80) {
    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none'
    mario.style.bottom = `${marioPositon}px`

    mario.src = './imagens/game-over.png'
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'

    gameOverMessage.style.display = 'inline'
    reload.style.display = "block";

    clearInterval(interval)
    clearInterval(loop)
    document.getElementById('DieSong').play();
    document.getElementById('JumpSong').remove()
    document.getElementById('Musica-Fundo').remove()
  }

}, 10)

document.addEventListener('keydown', jump);