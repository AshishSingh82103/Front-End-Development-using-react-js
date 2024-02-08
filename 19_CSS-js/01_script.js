// --------------CSS using by java scrpit--------------------------
function modify() {
    // alert("Ashish");
    // var a = document.getElementById('main');
    // console.log(a);
    document.getElementById('main').style.fontSize = "100px";
    document.getElementById('main').style.color = "yellow";
    document.getElementById('main').style.fontFamily = "verdana";
}

function unmodify() {
    document.getElementById('main').style.fontSize = "50px";
    document.getElementById('main').style.color = "red";
    document.getElementById('main').style.fontFamily = "";

}

// ---------- Open and close a new window using javascript window dom |open() and close()--------- 
var win;
var win2;
function openWin() {
    // win = window.open("https://www.wscubetech.com");
    win = window.open("https://www.wscubetech.com", "height = 500px", "width = 500px");
    win2 = window.open();
}
function closeWin() {
    win.close();
    win2.close();
}