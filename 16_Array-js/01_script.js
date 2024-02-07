// ---------------------Array in java-Script--------------
// -------1st method to declare array---------
var cars = []; //declration
cars = ["car0", "car1", "car2", "car3"];
//[0, 1, 2, 3]
cars[4] = "car4";
document.write(cars[4]);

// -------------------------Second method to declare the array-------------------------
var cars = new Array();
cars = ["car0", "car1", "car2", "car3"];
document.write(cars[2]);

// ----------------------------Looping statement in java script-------------------------
// --------------For-loop--------------
for(var count = 0; count <= 10; count++) {
    document.write(count + "<br>");
}
document.write("Loop Ended" + "<br>");

// -----------reverse counting-----------
for(var count = 10; count >= 1; count--) {
    document.write(count + "<br>");
}
document.write("Loop Ended <br>");

// --------------------------------------While-Loop-------------------------------
var count = 0;
while (count <=10) {
    document.write(count + " Wscube Tech <br>");
    count++;  
}
document.write("Loop Ended <br>");

// -----------reverse counting-----------
var count = 10;
while (count >= 0) {
    document.write(count + " Wscube Tech <br>");
    count--;  
}
document.write("Loop Ended <br>");

// -----------------------------------For-each loop-------------------------------
 var cars = ["car1", "car2", "car3", "car4", "car5"];

 cars.forEach(car);

 function car(item, index, array) {
    // document.write(index + " " + item + "<br>");
    array[index] = item + '6';
 }
 cars.forEach(after);
 function after(item, index) {
    document.write(index + " " + item + "<br>")
 }

//  --------------Continue Statement-------------------
for(var i = 0; i <= 10; i++) {
    if(i % 2 == 0) {
        continue;
    }
    document.write(i + "<br>")
}
document.write("Loop Ended <br>");


// --------------Break Statement-------------------------
for(var i = 0; i <= 10; i++) {
    if(i == 5) {
        break;
    }
    document.write(i + "<br>")
}
document.write("Loop Ended <br>");


// --------------------------Switch Case in java-script----------------
var i = 5;
switch(i)
{
    case 1:
    document.write("i is equals to 1");
    break;

    case 2:
    document.write("i is equals to 2");
    break;

    case 3:
    document.write("i is equals to 3");
    break;

    case 4:
    document.write("i is equals to 4");
    break;

    case 5:
    document.write("i is equals to 5");
    break;

    default:
    document.write("i is greater than to 5");
    break;
}
document.write(" <br> Out of switch");

// --------------Important method of array------------------------
var arr = ["Mango", "Orange", "Apple", "Pinapple", "Banana"];

// alert(Array.isArray(arr)); //true
var flag = Array.isArray(arr);
document.write("<h1>" + flag + "<h1/>");
// -----------Checked  the variable is array or not => Array.isArray()---------
var arre;
var flag1 = Array.isArray(arre);
document.write("<h1>" + flag1 + "<h1/>");

// --------------------To print the data of array =>valueOf()------------
var fruits = ["Mango", "Orange", "Apple", "Pinapple", "Banana"];
var arr1 = fruits.valueOf();
document.write("<h1>" + arr1 + "<h1/>");

// ------------combine elements of array into a single string and return the string =>join("")---------
var fruits = ["Mango", "Orange", "Apple", "Pinapple", "Banana"];
var arr1 = fruits.join("!");
document.write("<h1>" + arr1 + "<h1/>");

// --------------Join serval array into one array =>concat()------------------
var fruits = ["Mango", "Orange", "Apple", "Pinapple", "Banana"];
var vegitables = ["Potato", "Ladyfinger", "Peas", "Bringle", "Raddish"];
var shop = fruits.concat(vegitables);
document.write("<h1>" + shop + "<h1/>");

// -------------Return the primitive value of the specified object => indexOf()-----------
var fruits = ["Mango", "Orange", "Apple", "Pinapple", "Banana"];
var vegitables = ["Potato", "Ladyfinger", "Peas", "Bringle", "Raddish"];
var shop = fruits.concat(vegitables);
var index = vegitables.indexOf("Apple");
document.write("<h1>" + index + "<h1/>");

// --------------Remove the last element of an array => pop();------------
var fruits = ["Mango", "Orange", "Apple", "Pinapple", "Banana"];
var demo = fruits;
document.getElementById('res').innerText = demo;
function pop() {
    demo.pop();
    document.getElementById('res').innerText = demo;
}

// ----------------------Add a new element at the end =>push();------------------ 
var fruits = ["Mango", "Orange", "Apple", "Pinapple", "Banana"];
var demo = fruits;
document.getElementById('res').innerText = demo;
function push() {
    // demo.push("Raddish");
    // document.getElementById('res').innerText = demo;

    // ---------from user to tkae input-------------
    var x = prompt("Please enter a fruit", "");
    demo.push(x);
    document.getElementById('res').innerText = demo;
}

// -----------Pulls a copy of a portion of an array into a new array => slice();----------
var fruits = ["Mango", "Orange", "Apple", "Pinapple", "Banana"];
var demo = fruits;
function slice() {
    // var x = demo.slice(2);
    var x = demo.slice(1, 2);
    document.getElementById('res').innerText = x;
}

// ---------------Sort element in desending order =>reverse();-------------------
var fruits = ["Mango", "Orange", "Apple", "Pinapple", "Banana"];
var demo = fruits;
function reverse() {
    var x = demo.reverse();
    document.getElementById('res').innerText = x;

}

// -----------Remove the first element of an array => shift();------------------
var fruits = ["Mango", "Orange", "Apple", "Pinapple", "Banana"];
var demo = fruits;
function shift() {
    var x = demo.shift();
    document.getElementById('res').innerText = x;

}













































