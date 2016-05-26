//restart for 3*3 level
function Restart1() {

    for (var i = 2; i >= 0; i--) {
        for (var j = 2; j >= 0; j--) {
            var c = document.getElementById("grid-" + i + "-" + j);
            c.style.opacity = "1";
            numClick = 0;
        }
    }

}
//restart for 4*4 level
function Restart2() {
        for (var i = 3; i >= 0; i--) {
            for (var j = 3; j >= 0; j--) {
                var c = document.getElementById("2grid-" + i + "-" + j);
                c.style.opacity = "1";
                numClick = 0;
            }
        }
}

//First, add a red border when the play walk to the wrong step, then after 2seconds, clear that border
function  clearBorder(id) {
    var z = document.getElementById(id);
    z.style.border = "5px red solid";//darken the color of square when stepping on
    setTimeout(function () {
        z.style.border = "none";
    }, 2000);
}