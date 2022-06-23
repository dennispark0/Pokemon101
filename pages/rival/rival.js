import updateTextbox from '../../utils.js';
let continueButton = document.getElementById('arrowButton');
function setName(event){
    updateTextbox('text',`So his name is ${event.target.innerText}?`);
    continueButton.removeAttribute('disabled');
}
let names = document.getElementsByTagName('button');
for(let i =0;i<names.length;i++){
    names[i].addEventListener('click',setName);
}

continueButton.onclick = function() {
        window.location.href = '../pokemon/pokemon.html';
}