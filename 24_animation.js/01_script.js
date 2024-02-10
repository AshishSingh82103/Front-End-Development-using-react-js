// -----------------Animation using javascript----------------------- 
function move() {
    var redElem = document.getElementById('red');
    var positionOfElement = 0;
    var animation = setInterval(animate, 5);
    function animate() {
        if(positionOfElement == 350) {
            clearInterval(animation)
        } else {
            positionOfElement++;
            redElem.style.top = positionOfElement + "px";
            redElem.style.left = positionOfElement + "px";
    }
        }
        

    
}
