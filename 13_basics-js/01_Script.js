// -------------Important function of practical implementation----------------
// write infomation to the browser console, good for the debubgging purpose
// console.log('Ashish');

// write directly to html page
// document.write('Ashish Singh');

//it is use to alert the user that something has happend.
// alert('welcome to wscube');

// opens up a Confirm/Cancel dialog and returns true/false depending on user click
// confirm('login to ws cube');

//Creates a dialouge for user input
// prompt("Hello","wscube");

// ----------Varibles in java script---------------
//-----variable declaration----------
var name;
//---variable intialization---------
name = 'Ashish';
//------variable use--------
// alert(name);

//--------Documents object method(Dom)-----------
// ----Catch element by id------------
 var X = document.getElementById("main").innerHTML;
//  console.log(X);
document.getElementById("main").innerHTML = "<h1>WsCube Tech<h1/>";

// -----------Catch element by class---------------
var C = document.getElementsByClassName("Class")[0].innerHTML;
// console.log(C);
alert(C);

document.getElementsByClassName("Class")[0].innerHTML = "<h1>Ashish Singh<h1/>";
document.getElementsByClassName("Class")[1].innerHTML = "<h1>Aditya singh<h1/>";

// -----------String Concatenation in java script---------------
var x = "Hello";
var y = " Everyone";
var z = x + y;
console.log(z);