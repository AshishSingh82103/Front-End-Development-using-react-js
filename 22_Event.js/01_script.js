// -------------------AddEventListner-----------------
var i = 0;
// document.getElementById('btn').addEventListener("click",function() {
//     document.getElementById('counter').innerText = i;
//     i++;
// })
document.getElementById('btn').addEventListener("click", counter);
function counter() {
    document.getElementById('counter').innerText = i;
    i++;
}

document.getElementById('btn').addEventListener("mouseenter", function() {
    document.getElementById('counter').style.background = "yellow";
})

//------------other method-----------
document.getElementById('btn').addEventListener("mouseenter", colorChange);
function colorChange() {
    document.getElementById('counter').style.color = "red";
}

document.getElementById('btn').addEventListener("mouseleave", function() {
    document.getElementById('counter').style.color = "black";
})

//-----------------------RemoveEventListner---------------------
function stop() {
    document.getElementById('btn').removeEventListener("click", counter);
}
