export default function updateTextbox(id,message){
    let textbox = document.getElementById(id);
    if(textbox){
      textbox.innerHTML = message;
    }
  }