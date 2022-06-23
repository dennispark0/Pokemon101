let trainerPicture = document.getElementById("trainer-picture");
let girlSrc = "../../../images/Girl_Trainer.png";
let boySrc = "../../../images/Boy_Trainer.png";

let gender = "female";
function setGender(_gender) {
  gender = _gender;
  if (gender == "female") {
    trainerPicture.src = girlSrc;
  } else {
    trainerPicture.src = boySrc;
  }
}

function next() {
  let name = document.getElementById('name');
  console.log(name,name.value);
  if (name && name.value) {
    window.location.href = '../rival/rival.html';
  } else {
    let genderSelection = document.getElementById("gender-selection");
    genderSelection.classList.add("d-none");
    let nameSelection = document.getElementById("input-selection");
    nameSelection.classList.remove("d-none");
  }
};