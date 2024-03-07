// ******************** Button 1 **********************

function onButtonClick(){
    alert('index.html');
  }

  const button = document.querySelector('button');
  button.addEventListener('click', onButtonClick); 
// ********************* Button 2 *********************

function clickText() {
  document.getElementById("btn2").innerHTML = "index.html"
  }
// ******************** Button 3 **********************

function GFG_Fun() {
     
    var a = document.createElement('a');  // Create anchor element.
    // Create the text node for anchor element.
    var link = document.createTextNode("Link to Lectures");
     
    a.appendChild(link); // Append the text node to anchor element.
    a.title = "This is Link";  // Set the title.
    a.href = "https://www.youtube.com/watch?v=r0BaNV4rcxQ&list=PL8PbkIgNT5x3Vdgze1ySUWzip_F1EFosI";   // Set the href property.
    document.body.appendChild(a);  // Append the anchor element to the body.
}

// ******************** Button 4 **********************
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
  document.getElementById("btn4").innerHTML= dogArray;
}

// ******************** Button 5 **********************
const dogsMale = ["Boris", "Harley", "Max"];
function showAllMale(dogsMale) {
  document.getElementById("btn5").innerHTML= dogsMale;
}
// ******************** Button 6 **********************
// ******************** ForEach Does not work **********************
/*let text = "";
const fruits = ["Boris ", "Harley ", "Max "]; 
fruits.forEach(myFunction);
document.getElementById("demo").innerHTML = text;

function myFunction(item, index) {
  text += index + ": " + item +"<br>";
}*/
;
// ******************** Button 7 **********************
const dogsMale2 = ["Boris", "Harley", "Max"];
function showAllMale2(dogsMale2) {
  document.getElementById("btn7").innerHTML= dogsMale2;
}