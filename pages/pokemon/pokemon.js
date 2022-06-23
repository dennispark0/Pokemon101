let trainerPicture = document.getElementById("trainer-picture");
let girlSrc = "../images/Girl_Trainer.png";
let boySrc = "../images/Boy_Trainer.png";

let genderSelected = "";
function setGender(gender) {
  genderSelected = gender;
  if (gender == "female") {
    trainerPicture.src = girlSrc;
  } else {
    trainerPicture.src = boySrc;
  }
}

let female = document.getElementById("female");
female.onclick = () => setGender("female");

let male = document.getElementById("male");
male.onclick = () => setGender("male");

let nameSelected = "";

let continueButton = document.getElementById("arrowButton");

continueButton.onclick = function () {
  if (nameSelected) {
  } else if (genderSelected) {
    let genderSelection = document.getElementById("gender-selection");
    genderSelection.classList.add("d-none");
    let nameSelection = document.getElementById("input-selection");
    nameSelection.classList.remove("d-none");
  }
};