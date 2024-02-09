// -------------------------Print Page---------------
function printPage() {
    // window.print(); // this will print whole page
    var body = document.getElementById('body').innerHTML;
    var data = document.getElementById('data').innerHTML;
    document.getElementById('body').innerHTML = data;
    window.print();
    document.getElementById('body').innerHTML = body;
    window.print(); 
}

//  ---------------------------Number-validation-------------------------------