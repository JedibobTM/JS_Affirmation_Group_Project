onReady();

function onReady() {
  console.log('Javascript is working!');
}

function makeFire(){
  let fire = document.getElementById("icyHot")
  fire.innerHTML += "🔥"
}

function iceIceBaby(){
  let ice = document.getElementById("icyHot")
  ice.innerHTML += "❄️"
}


function handleSubmit(event){

  event.preventDefault();

  let tableBody = document.getElementById("tableBody")

  let affirmationText = document.getElementById("affirmationText").value

  let affirmationAuthor = document.getElementById("affirmationAuthor").value

  tableBody.innerHTML += 
  ` 
  <tr>
    <td>${affirmationText}</td>
    <td>${affirmationAuthor}</td>
    <td><button onclick="deleteAffirmation(event)">❌</button></td>
  </tr>
  `
  document.getElementById('affirmationText').value = "";
  document.getElementById('affirmationAuthor').value = "";

}

function deleteAffirmation(event){

  console.log("So, you want to delete?"); 
  
  event.target.parentElement.parentElement.remove();

}