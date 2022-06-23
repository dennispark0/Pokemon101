let genderSelected = '';
let trainerPicture = document.getElementById('trainer-picture');
let girlSrc = '../../images/Girl_Trainer.png';
let boySrc = '../../images/Boy_Trainer.png';

function setGender(gender) {
    genderSelected = gender;
    if(gender=='female'){
        trainerPicture.src = girlSrc;
    } else {
        trainerPicture.src = boySrc;
    }
}

let female = document.getElementById('female');
female.onclick = () => setGender('female');

let male = document.getElementById('male');
male.onclick = () => setGender('male');

let continueButton = document.getElementById('arrowButton');
continueButton.onclick = function() {
    if(genderSelected){
        sessionStorage.setItem('pokemonTrainerGender', genderSelected);
        window.location.href = '../pokemon/pokemon.html';
    }
}