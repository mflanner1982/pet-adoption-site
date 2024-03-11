"use strict";

// ******************** Button 1 **********************
function hello(){               //function definition 
  alert("HELLO Button 1 Works!");//popup window    
}

// ********************* Button 2 *********************
function clickText() {
document.getElementById("btn2").innerHTML = "Message pops up with button.  Button # 2 works!"
}

// ******************** Button 3 **********************
function GFG_Fun() {
var a = document.createElement('a');  // Create anchor element.
// Create the text node for anchor element.
var link = document.createTextNode("Link to Lectures.  Button Works!");
a.appendChild(link); // Append the text node to anchor element.
a.title = "This is Link";  // Set the title.
a.href = "https://www.youtube.com/watch?v=r0BaNV4rcxQ&list=PL8PbkIgNT5x3Vdgze1ySUWzip_F1EFosI";   // Set the href property.
document.body.appendChild(a);  // Append the anchor element to the body.
}

// ******************* Button 4 ***************** //
const dogsMale4 = [" Boris", " Harley", " Max"];

function ShowAllMale4() {
document.getElementById("btn4").innerHTML= dogsMale4;
} 
// ******************** Button 5 ****************** //
// *** Button JS code for button 5 is in HTML *** //

// ******************** Button 6 **********************
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

function showAll(dogArray) {
document.getElementById("btn6").innerHTML= dogArray;
};

// ******************** Button 7 *********************

//---------------------------------------------------------//
//---------------------------------------------------------//

function ToggleButtonFunction() {
var x = document.getElementById("ToggleBtn");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}
}
        //-------------------------------------//
function myFunction() {
var x = document.getElementById("myDIV");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}
}

//-------------------------------------//
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
//---------------------------------------------------------//
