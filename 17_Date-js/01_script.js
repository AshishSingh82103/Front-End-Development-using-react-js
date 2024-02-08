// ---------------List of method =>Date()-----------------
var date = new Date();
function getDate() {
    document.getElementById('res').innerText = date;
}

// -----------------Year => getFullYear()----------------
var date = new Date();
function year() {
    document.getElementById('res').innerText = date.getFullYear();
}

// -----------------Month => getMonth()----------------
var date = new Date();
function month() {
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    document.getElementById('res').innerText = month[date.getMonth()];
}

 // -----------------Hours => getHours()----------------
 var date = new Date();
 function hour() {
    document.getElementById('res').innerText = date.getHours();
 }

  // -----------------today date => getDate()----------------
 var date = new Date();
 function todate() {
    document.getElementById('res').innerText = date.getDate();
 }
