//---------------------------------------------------------//
var MaleArray = [
  "<a href='Boris.html'><img src='BorisGut.jpg' alt='marker.gif' style='width:20%'></a>", 
  "<a href='Harley.html'><img src='Harley Santa hat.jpg' alt='image.gif' style='width:20%'></a>",
  "<a href='Max.html'> <img src='Max.png' alt='image.gif' style='width:20%'></a>",
];

var x = document.getElementById("MalesBtn");

function showMalesFunction() {
  var x = document.getElementById("MalesBtn");
  if (x.style.display === "none") {
    x.style.display = "block"
    x.innerHTML = MaleArray; 
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
    x.innerHTML = FemaleArray; 
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
    x.innerHTML = PuppiesArray; 
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
    x.innerHTML = AdultArray; 
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
    x.innerHTML = SeniorArray; 
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
    x.innerHTML = SpecialNeedsArray; 
  } else {
    x.style.display = "none";
  } }
//----------------------- DOGS2CHOOSE BUTTONS CLOSE ---------------------------------------//


