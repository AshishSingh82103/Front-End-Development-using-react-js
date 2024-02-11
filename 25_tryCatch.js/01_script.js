// -----------------Try and catch error----------------------
function test() {
    try {
        // alertf('Hello');
        // var number = 5;
        // var x = number.toUpperCase();
        // alert(x)
        var number = 'WsCube Tech';
        var x = number.toUpperCase();
        document.getElementById('res').innerText = x;

    }
    catch(err) {
        document.getElementById('res').innerText = err;
    }
}

// -----------------------Try catch and throw-------------------------
var num = document.getElementById('num');
function test1() {
    var data = num.value;
    try {
        if (isNaN(data)) {
            throw "This is not a number";
        } else {
            if(data < 5 ||  data > 10) {
                throw "Number is out of range";
            } else {
                throw "";
            }
        }
    } catch (errorMessage) {
        document.getElementById('result').innerText = errorMessage;
        
    }   

}

// --------------------Try catch and finally---------------------------
var num1 = document.getElementById('num1');
function test2() {
    var data = num1.value;
    try {
        if (isNaN(data)) {
            throw "This is not a number";
        } else {
            if(data < 5 ||  data > 10) {
                throw "Number is out of range";
            } else {
                throw "";
            }
        }
    } catch (errorMessage1) {
        document.getElementById('result-1').innerText = errorMessage1;
        
    }   
    finally {
        num1.value = "";
    }

}
