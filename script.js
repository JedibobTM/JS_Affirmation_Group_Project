onReady();

function onReady() {
  console.log('Javascript is working!');
}

function makeFire(){
  console.log('Confirming makeFire function works');
  let fire = document.getElementById("icyHot");
  fire.innerHTML += "<span onclick = 'extinguishFire(event)'>🔥</span>";
}

function extinguishFire(event){
  console.log("You want to extinguish the fire");
  event.target.remove();
}

function iceIceBaby(){
  let ice = document.getElementById("icyHot");
  ice.innerHTML += "<span onclick = 'meltMeltBaby(event)'>❄️</span>"
}

function meltMeltBaby(event){
  console.log("Vanilla Ice is super disappointed!!");
  event.target.remove();
}


function handleSubmit(event){

  event.preventDefault();

  let tableBody = document.getElementById("tableBody");
  let affirmationText = document.getElementById("affirmationText").value;
  let affirmationAuthor = document.getElementById("affirmationAuthor").value;

  console.log("Expecting custom text",affirmationText);
  console.log("Expecting custom author text",affirmationAuthor);
  
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