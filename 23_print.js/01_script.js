// -------------------------Print Page---------------
// function printPage() {
//     // window.print(); // this will print whole page
//     var body = document.getElementById('body').innerHTML;
//     var data = document.getElementById('data').innerHTML;
//     document.getElementById('body').innerHTML = data;
//     window.print();
//     document.getElementById('body').innerHTML = body;
//     window.print(); 
// }

//  ---------------------------Number-validation-------------------------------
// document.getElementById('res').style.color = "red";
// function val(elem) {
//     // document.getElementById('res').innerText = elem.value   check the value is numerical or not
//     if(isNaN(elem.value)) {
//         // alert("yes it is not a number");
//         document.getElementById('res').innerText = "Please enter numbers only";
//     } else {
//         document.getElementById('res').innerText = "";
//     }

//     if(elem.value.length > 10) {
//         document.getElementById('res').innerText = "Please enter only ten digit";
//     } else {
//         document.getElementById('res').innerText = "";
//     }
  
// }

// --------------------Print table of user given number in js-------------------------
var num = prompt("plese enter a number", "");
for(var i = 1; i <=10; i++) {
    document.write("<div>");
    // document.write(num * i);
    document.write(num + "X" + i + "=" + num * i);
    document.write("<div/>");
}