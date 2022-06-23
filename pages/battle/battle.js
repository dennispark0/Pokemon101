import updateTextbox from '../../utils.js';

const searchParams = new URLSearchParams(window.location.search);
const allyPokemon = searchParams.get('allyPokemon');
const rivalPokemon = searchParams.get('rivalPokemon');

const imageUrl = 'https://img.pokemondb.net/sprites/heartgold-soulsilver';

const allyPath = '/back-normal/';
const allyImg = document.getElementById('allyGraphic');
allyImg.src = imageUrl + allyPath + allyPokemon+'.png';
allyImg.alt = allyPokemon;

const enemyPath = '/normal/';
const enemyImg = document.getElementById('enemyGraphic');
enemyImg.src = imageUrl + enemyPath + rivalPokemon+'.png';
enemyImg.alt = rivalPokemon;

document.getElementById('allyLabel').innerHTML = allyPokemon;
document.getElementById('enemyLabel').innerHTML = rivalPokemon;

const maxHealth = 65;
let allyHealth = maxHealth;
let allyHealthBar = document.getElementById("allyHealthBar");
let enemyHealth = maxHealth;
let enemyHealthBar = document.getElementById("enemyHealthBar");
let action = 0;

let controls = document.getElementById('controls');
let dialogue = document.getElementById('dialogue');
function switchControls(isMyTurn){
  if(!isMyTurn){
    controls.style = "display:none;";
    dialogue.style = "";
  } else {
    dialogue.style = "display:none;";
    controls.style = "";
  }
}
switchControls(true);

function attack(attack) {
    action = 0;
    update();
}
document.getElementById('attack').onclick = attack;
document.getElementById('arrowButton').onclick = update;
function update(){
  if(action===0){
    switchControls(false);
    updateTextbox('text', allyPokemon+' used Pound!');
  } if(action===1){
    updateTextbox('text','Enemy '+rivalPokemon+' used Tackle!');
    
    enemyHealth = Math.max(enemyHealth - 10, 0);
    const healthRatio = (enemyHealth / maxHealth) * 100;

    enemyHealthBar.style.width = healthRatio + '%';
    if(healthRatio < 30){
      enemyHealthBar.style.backgroundColor = 'red';
    } else if(healthRatio < 50){
      enemyHealthBar.style.backgroundColor = 'gold';
    }

  } if(action===2){
    switchControls(true);

    allyHealth = Math.max(allyHealth - 10, 0);
    const healthRatio = (allyHealth / maxHealth) * 100;

    allyHealthBar.style.width = healthRatio + '%';
    if(healthRatio < 30){
      allyHealthBar.style.backgroundColor = 'red';
    } else if(healthRatio < 50){
      allyHealthBar.style.backgroundColor = 'gold';
    }
  } 
  action++;
  if(action > 2) action = 0;
}