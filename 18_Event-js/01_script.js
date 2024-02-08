// ----------------Event--------------------
// ---------GetElementsBYName--------------
function getName() {
    var uName = document.getElementsByName('u_name')[0].value;
    // console.log(uName);
    document.getElementsByName('u_name')[0].value = "";
    document.getElementsByTagName('h1')[0].innerHTML = uName;
}

// -----------Set interval method in java script------------------
function test () {
    setInterval(function(){
        alert("hello");

    }, 2500)
}

// ----------Set timeout method in java script----------------------
function test1() {
    setTimeout(function() {
        alert("Hello");

    },2000)
}
// ------------------Clear Timeout--------------------------------
var globalVariable;
function start() {
    globalVariable = setTimeout(function() {
        document.write("<h1>WsCube Tech<h1/>")

    },5000)
}
function stop() {
    clearTimeout(globalVariable);
    alert("Timeout stopped")
}

// ----------------------ClearInterval-----------------------
var my = setInterval(count, 1000);
var c = 0;
function count() {
    document.getElementById('h1').innerText = c;
    c++;
}
function stop() {
    clearInterval(my);
}

// -----------Digital clock using java script-----------------------------
function showTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var second = date.getSeconds();
    var session = "PM";
    
    hours < 10 ? "0" + hours : hours;
    if(hours > 12) {
        hours = hours - 12;
    }
    minutes < 10 ? "0" + minutes : minutes;
    second < 10 ? "0" + second : second;

    if(hours >= 12) {
        session = "AM";
    }

    var time = hours + ":" + minutes + ":" + second + ":" + session;
    document.getElementsByTagName('h1')[0].innerText = time;
    setTimeout(showTime, 1000);
}