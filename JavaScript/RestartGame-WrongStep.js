/**
 * Created by 宋与珩 on 2016-05-17.
 */
//restart this level if play go to the wrong step.
function wrongStep() {
    for (var i = 2; i >= 0; i--) {
        for (var j = 2; j >= 0; j--) {
            var c = document.getElementById("grid-" + i + "-" + j);
            c.style.opacity = "1";
            numClick = 0;
        }
    }
}