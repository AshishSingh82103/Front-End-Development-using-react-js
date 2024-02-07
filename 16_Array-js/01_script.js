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
    document.write(i + "<br>")
}





















