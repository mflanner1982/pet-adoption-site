
//-- ************************************************ -->
//----------------------- STACKOVERFLOW HELP OPEN ---------------------------------------//
"use strict";

function newEl(tag) {
  return document.createElement(tag)
}

function byId(id) {
  return document.getElementById(id)
}

window.addEventListener('load', onLoaded, false);

class dogT {
  constructor(name = null, gender = null, age = null, breed = null, link = null) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.breed = breed;
    this.link=link;
  }
}

let dogArray = [
  
    new dogT('Boris', 'Male', 'Senior', 'Labrador', 'Boris.html'),
    new dogT('Lucy', 'Female', 'Puppy', 'Golden Retriever', 'Lucy.html'),
    new dogT('Daisy', 'Female', 'Senior', 'Golden Retriever', 'Daisy.html'), 
    new dogT('Honey', 'Female', 'Puppy', 'Golden Retriever', 'Honey.html'), 
    new dogT('Harley', 'Male', 'Senior', 'Mastiff', 'Harley.html'), 
    new dogT('Dolly', 'Female', 'Puppy', 'Golden Retriever', 'Dolly.html'),
    new dogT('Max', 'Male', 'Senior', 'Golden Retriever', 'Max.html'), 
    new dogT('Birdie', 'Female', 'Senior', 'Pregnant Hog', 'Birdie.html') 
  ];


function onLoaded(evt) {
  byId('allBtn').addEventListener('click', showAll, false);
  byId('fBtn').addEventListener('click', showFemale, false);
  byId('mBtn').addEventListener('click', showMale, false);
 // byId('allMaleBtn').addEventListener('click', showMaleNames, false);
}

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

//----------------------- DOGS2CHOOSE BUTTONS OPEN ---------------------------------------//
var MaleArray = [
  "<a href='Boris.html'><img src='BorisGut.jpg' alt='marker.gif' style='width:20%'></a>", 
  "<a href='Harley.html'><img src='Harley Santa hat.jpg' alt='image.gif' style='width:20%'></a>",
  "<a href='Max.html'> <img src='Max.png' alt='image.gif' style='width:20%'></a>",
];

function showMalesFunction() {
  var x = document.getElementById("MalesBtn");
  if (x.style.display === "none") {
    x.style.display = "block"
    document.getElementById("MalesBtn").innerHTML = MaleArray; 
  } else {
    x.style.display = "none";
  } }
//---------------------------------------------------------//
var FemaleArray = [
  "<a href='Lucy.html'><img src='LucyPage.jpg' alt='image.gif' style='width:20%'></a>",
  "<a href='Daisy.html'><img src='DaisyBirthdayHat.jpeg' alt='image.gif' style='width:20%'></a>",
  "<a href='Honey.html'><img src='Honey.png' alt='image.gif' style='width:20%'></a>",
  "<a href='Dolly.html'><img src='Dolly.jpg' alt='image.gif' style='width:20%'></a>",
  "<a href='Birdie.html'> <img src= 'Birdie Girdie.jpg' alt='image.gif' style='width:20%'></a>"
];

function showFemalesFunction() {
  var x = document.getElementById("FemalesBtn");
  if (x.style.display === "none") {
    x.style.display = "block"
    document.getElementById("FemalesBtn").innerHTML = FemaleArray; 
  } else {
    x.style.display = "none";
  } }

//---------------------------------------------------------//
var PuppiesArray = [
  "<a href='Lucy.html'><img src='LucyPage.jpg' alt='image.gif' style='width:20%'></a>",
  "<a href='Honey.html'><img src='Honey.png' alt='image.gif' style='width:20%'></a>",
  "<a href='Dolly.html'><img src='Dolly.jpg' alt='image.gif' style='width:20%'></a>"
];

function showPuppiesFunction() {
  var x = document.getElementById("PuppiesBtn");
  if (x.style.display === "none") {
    x.style.display = "block"
    document.getElementById("PuppiesBtn").innerHTML = PuppiesArray; 
  } else {
    x.style.display = "none";
  } }

//---------------------------------------------------------//
var AdultArray = [
  "<a href='Boris.html'><img src='BorisGut.jpg' alt='marker.gif' style='width:20%'></a>", 
  "<a href='Daisy.html'><img src='DaisyBirthdayHat.jpeg' alt='image.gif' style='width:20%'></a>",
  "<a href='Harley.html'><img src='Harley Santa hat.jpg' alt='image.gif' style='width:20%'></a>",
  "<a href='Birdie.html'> <img src= 'Birdie Girdie.jpg' alt='image.gif' style='width:20%'></a>"
];

function showAdultFunction() {
  var x = document.getElementById("AdultBtn");
  if (x.style.display === "none") {
    x.style.display = "block"
    document.getElementById("AdultBtn").innerHTML = AdultArray; 
  } else {
    x.style.display = "none";
  } }

  //---------------------------------------------------------//
var SeniorArray = [
  "<a href='Max.html'> <img src='Max.png' alt='image.gif' style='width:20%'></a>"
];

function showSeniorFunction() {
  var x = document.getElementById("SeniorBtn");
  if (x.style.display === "none") {
    x.style.display = "block"
    document.getElementById("SeniorBtn").innerHTML = SeniorArray; 
  } else {
    x.style.display = "none";
  } }
  
//---------------------------------------------------------//
var SpecialNeedsArray = [
  "<a href='Dolly.html'><img src='Dolly.jpg' alt='image.gif' style='width:20%'></a>",
  "<a href='Max.html'> <img src='Max.png' alt='image.gif' style='width:20%'></a>"
]
function SpecialNeedsFunction() {
  var x = document.getElementById("SpecialNeedsBtn");
  if (x.style.display === "none") {
    x.style.display = "block"
    document.getElementById("SpecialNeedsBtn").innerHTML = SpecialNeedsArray; 
  } else {
    x.style.display = "none";
  } }
//----------------------- DOGS2CHOOSE BUTTONS CLOSE ---------------------------------------//


