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
let step = 0;
function next() {
  let name = document.getElementById('name');
  if(step==0) {
    let genderSelection = document.getElementById("gender-selection");
    genderSelection.classList.add("d-none");
    let nameSelection = document.getElementById("input-selection");
    nameSelection.classList.remove("d-none");
    document.getElementById('text').innerHTML = 'Tell me, what is your name?';
    step = 1;
  }
  else if (step==1 && name && name.value) {
    document.getElementById('text').innerHTML = "Your name is "+ name.value +"? A fine name that is! Now, this boy here… I believe he's your friend.";
    step = 2;
  } else {
    window.location.href = '../rival/rival.html';
  }
  console.log(step);
};