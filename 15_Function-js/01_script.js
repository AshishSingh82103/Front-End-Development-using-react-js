// --------------Calling user defined function on click event---------------------------
function greet() {
    // alert("Yes");
    // var name = document.getElementById('name').value;
    // alert(name);
    var string = "Hello " + name;
    // document.getElementsByClassName('greet')[0].innerHTML = string;

}

// -----------------------Simple Calculator using java script--------------
function cal() {
    var option1 = document.getElementById('first').value;
    var option2 = document.getElementById('second').value;
    var ope = document.getElementById('ope').value;
    //just cehcked for the value getting we use alert
    // alert(option1);
    // alert(option2);
    // alert(ope);
    if(ope == '+') {
        var result = parseInt(option1) + parseInt(option2)
    }
    if(ope == '-') {
        var result = parseInt(option1) - parseInt(option2)
    }
    if(ope == '*') {
        var result = parseInt(option1) * parseInt(option2)
    }
    if(ope == '/') {
        var result = parseInt(option1) / parseInt(option2)
    }
    // alert(result);
    document.getElementById('result').value = result;
}

// -------How to get data using prompt function---------------
var result = prompt("Enter your Name!", "");
document.write(result);
function call() {
   var result1 = prompt("Enter your Name!", "");
   document.getElementById('result').innerHTML = result1;
}

// ------------------Condtional statement in java script----------------
// if(condtion) {

// }else {

// }
var age = 17;
if (age >=18) {
    // alert("Yes you can vote");
    document.write("<h1>Yes you can vote 1</h1>");
}
 else {
    document.write("<h1>Yes you cannot vote 1</h1>");
 }


//  if(condition) {

//  } else if (condition) {

//  } else {

//  }
var age = 17;
if(age >= 18) {
    document.write("<h1>Yes you can vote 2</h1>");
} else if (age == 17) {
    document.write("<h1>Please wait one more year<h1/>");
} else {
    document.write("<h1>Yes you cannot vote 2</h1>");

}