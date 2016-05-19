/**
 * Created by 宋与珩 on 2016-05-17.
 */
//restart this level if play go to the wrong step.
function Restart1() {
    for (var i = 2; i >= 0; i--) {
        for (var j = 2; j >= 0; j--) {
            var c = document.getElementById("grid-" + i + "-" + j);
            c.style.opacity = "1";
            numClick = 0;
        }
    }
}

function Restart2() {
    for (var i = 3; i >= 0; i--) {
        for (var j = 3; j >= 0; j--) {
            var c = document.getElementById("2grid-" + i + "-" + j);
            c.style.opacity = "1";
            numClick = 0;
        }
    }
}
