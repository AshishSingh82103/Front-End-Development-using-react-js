// --------------------Airthmetic opreators-------------------

// ---------------Addition--------------
var x = 7;
var y = 8;
var z = x + y;
console.log(z);
document.getElementById('res').innerHTML = z;

// -----------Substraction-----------
var x = 90;
var y = 8;
var z = x - y;
console.log(z);
document.getElementById('res').innerHTML = z;

// ------------Multiplication--------------
var x = 7;
var y = 8;
var z = x * y;
console.log(z);
document.getElementById('res').innerHTML = z;

// -----------------Division---------------
var x = 17;
var y = 8;
var z = x / y;
console.log(z);
document.getElementById('res').innerHTML = z;


// -----------------Modulus---------------
var x = 17;
var y = 8;
var z = x % y;
console.log(z);
document.getElementById('res').innerHTML = z;

// --------------Increment-----------------
 var x = 23;
 x++;
 document.getElementById('res').innerHTML = x;

 // --------------De-crement-----------------
 var x = 23;
 x--;
 document.getElementById('res').innerHTML = x;

//  ----------------------------Comparision opretors-----------------------------

// --------------Equal-------------
var x = 17;
var y = 8;
var z = x == y;
console.log(z);
document.getElementById('res').innerHTML = z;

// --------------Not-Equal-------------
var x = 17;
var y = 8;
var z = x != y;
console.log(z);
document.getElementById('res').innerHTML = z;

// --------------Greater than-------------
var x = 17;
var y = 8;
var z = x > y;
console.log(z);
document.getElementById('res').innerHTML = z;

// --------------Less than-------------
var x = 17;
var y = 8;
var z = x < y;
console.log(z);
document.getElementById('res').innerHTML = z;

// --------------Greater than or equal to-------------
var x = 17;
var y = 8;
var z = x >= y;
console.log(z);
document.getElementById('res').innerHTML = z;

// --------------Greater than or equal to-------------
var x = 17;
var y = 8;
var z = x <= y;
console.log(z);
document.getElementById('res').innerHTML = z;

// ------------------------Logical and ternary operators-------------------------

// --------------&&(Logical-opreators)----------------
var x = 0 //true;
var y = 1 //true;
var z = x && y;
console.log(z);
document.getElementById('res').innerHTML = z;

// --------------||(Logical-opreators)----------------
var x = 0 //true;
var y = 1 //true;
var z = x || y;
console.log(z);
document.getElementById('res').innerHTML = z;

//------------Ternary opreators------------------
var x = 5;
var y = 6;
var z;
z = x > y ? "Yes" : "No";
document.getElementById('res').innerHTML = z;

// -----------------------------Assingment operators-------------------------

//------------------Simple assingment--------------
var a = 5;
var z = a;
console.log(z);
document.getElementById('res').innerHTML = z;

//------------------Add and assingment--------------
var x = 5;
var z = 6;
// z = z + a; z = 5 + 6 = 11;
 z += x;
console.log(z);
document.getElementById('res').innerHTML = z;

//------------------Subtract and assingment--------------
var x = 8;
var z = 6;
// z = z - a; z = 6 - 8 = -2;
 z -= x;
console.log(z);
document.getElementById('res').innerHTML = z;

//------------------Multiple and assingment--------------
var x = 8;
var z = 6;
// z = z * a; z = 6 * 8 = 48;
 z *= x;
console.log(z);
document.getElementById('res').innerHTML = z;

//------------------Devide and assingment--------------
var x = 8;
var z = 17;
// z = z / a; z = 17 / 8 = 2.125;
 z /= x;
console.log(z);
document.getElementById('res').innerHTML = z;

//------------------Devide and assingment--------------
var x = 8;
var z = 17;
// z = z % a; z = 17 % 8 = 1;
 z %= x;
console.log(z);
document.getElementById('res').innerHTML = z;



