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