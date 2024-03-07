console.log("Inside jsdom.css!");
hello();
// ---------------------------------------------------------------------------

$(function(){

  $("#button1").on("click", function(){
     //URL: "https://api.openbrewerydb.org/breweries";//no query string
     
     var url = "https://Users/maureenflannery/Desktop/PetAdoptionWebsiteCopy-main/Dog2Choose.html"
    $.ajax(
      {
        url: url,
        type: "Get",
        success: function(data)
        {
          $("#results").text("");
          console.log(data);
          $.each(data,function(i,item){//parse items inside data array
            var para = $("<p></p>");
            para.text(this.age +" "+ this.gender  +" "+ this.name);
            $("#results").append(para);
         });                 }         });       }); 
// ---------------------------------------------------------------------------





document.onload = function(){
    //All JS DOM code should go inside this function
    //Any function can be written outside this area        
}

function hello()
{
    console.log("hello");
}

// ************* if else function open ***************** //
function usernameFunction(){
if (uname == "Maureen" && psw == "test") {
  console.log("Hi, Buddy!");
} else {
  console.log("Try again, dummy");
}
}
// ************* if else function closed ***************** //
// ************* Modal Login JS open ***************** //
// Get the modal//

var modal = document.getElementById('id01');
 
window.onclick = function(event) {
  if (event.target == modal) {
     modal.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it //
// ************* Modal Login JS close ***************** //


//-- *********** Change Message Button ************* -->
function myFunction() {
  document.getElementById("demo").innerHTML = "Button is working"; 
}
//-- ************************************************ -->

  "use strict";

function newEl(tag) {
  return document.createElement(tag)
}

function byId(id) {
  return document.getElementById(id)
}

// **** Functions for Dog Filters ***** //

function DogFilters()
  if(checkbox.checked == true){
    document.getElementById("demo").innerHTML = "Button is working";   
  }


//window.addEventListener('load', onLoaded, false);

class dogT {
  constructor(name = null, gender = null, age = null, breed = null, link = null) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.breed = breed;
    this.link = link;
  }
}

const dogArray = [
  
  new dogT('Boris', 'Male', 'Senior', 'Labrador', 'Boris.html'),
  new dogT('Lucy', 'Female', 'Puppy', 'Golden Retriever', 'Lucy.html'),
  new dogT('Daisy', 'Female', 'Senior', 'Golden Retriever', 'Daisy.html'), 
  new dogT('Honey', 'Female', 'Puppy', 'Golden Retriever', 'Honey.html'), 
  new dogT('Harley', 'Male', 'Senior', 'Labrador', 'Haryley.html'), 
  new dogT('Dolly', 'Female', 'Puppy', 'Golden Retriever', 'Dolly.html'),
  new dogT('Max', 'Male', 'Senior', 'Golden Retriever', 'Max.html'), 
  new dogT('Birdie', 'Female', 'Senior', 'Pregnant Hog', 'Birdie.html') 
];

// ******************************************



// ******************************************


//function onLoaded(evt) {
 // byId('allBtn').addEventListener('click', showAll, false);
  //byId('fBtn').addEventListener('click', showFemale, false);
  //byId('mBtn').addEventListener('click', showMale, false);
//}
function showAll(evt) {
  showDogArray(dogArray);
}

function showMale(evt) {
  let inputArray = dogArray.filter((curDog) => curDog.gender == 'Male');
  showDogArray(inputArray);
}

function showFemale(evt) {
  let inputArray = dogArray.filter((curDog) => curDog.gender == 'Female');
  showDogArray(inputArray);
}

function showDogArray(inputArray) {
  let tgt = byId('output');
  tgt.innerHTML = '';

  inputArray.forEach(
    curDog => {
      let container = newEl('div');

      let keys = Object.keys(curDog);
      keys.forEach(
        curKey => {
          let div = newEl('div');
          div.textContent = curDog[curKey];
          container.appendChild(div);
        }
      );
      tgt.appendChild(container);
    }
  )
}