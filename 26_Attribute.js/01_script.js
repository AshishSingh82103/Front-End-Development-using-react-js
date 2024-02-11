// -----------------------GetAttribute method ---------------------------
// function test() {
//     var cls = document.getElementById('test').getAttribute("class");
//     document.getElementById('res').innerText = cls;
// }


// -------------------------setAttributes method-----------------------
// var test  = document.getElementById('test');
// function testing() {
//     var cls = test.getAttribute("class");
//     // document.getElementById('res').innerText = cls;
//     if(cls === "red") {
//         test.setAttribute("class", "blue");
//     } else {
//         test.setAttribute("class", "red");
//     }
// }

// -----------------------Show and hide password toggle button using js--------------------------
var password = document.getElementById('password');
function toggle(elem) {
    var type = password.getAttribute('type');
    if( type === 'password') {
        password.setAttribute('type', 'text');
        elem.innerText = "Hide Password";
    } else {
        password.setAttribute('type', 'password');
        elem.innerText = "Show Password";
    }
    
}