/**
 * Created by 宋与珩 on 2016-05-17.
 */
function stepMatching(id) {
    if(numClick == 0) {
        if (id == "grid-0-0" || id == "grid-0-1" || id == "grid-0-2"|| id == "grid-0-3" ) {
            if (sequence[numClick] == map[id]) {
                var c = document.getElementById(id);
                c.style.opacity="0.5"; //darken the color of square when stepping on
                c.style.webkitBackdropFilter="brightness(50%)";
                pushRock();
                idRecord = id;
                numClick++;
                row = idRecord.substring(5,6);
                column = idRecord.substring(7,8);
                row = parseInt(row);
                column = parseInt(column);
                rowUp = row + 1;
                columnLeft = column - 1;
                columnRight = column + 1;
            }
            else {
                alert("you lost");
                lifeDown();
                lose();
                wrongStep();
            }
        }
        else {
            alert("you lost");
            lifeDown();
            lose();
            wrongStep();
        }
    }
    else {
        if(id == "grid-"+row+"-"+columnLeft || id == "grid-"+row+"-"+columnRight || id == "grid-"+rowUp+"-"+column) {
            if (sequence[numClick] == map[id]) {
                if(numClick + 1 < sequence.length) {
                    var c = document.getElementById(id);
                    c.style.opacity="0.5";//darken the color of square when stepping on
                    c.style.webkitBackdropFilter="brightness(50%)";
                    pushRock();
                    idRecord = id;
                    numClick++;
                    row = idRecord.substring(5, 6);
                    column = idRecord.substring(7, 8);
                    row = parseInt(row);
                    column = parseInt(column);
                    rowUp = row + 1;
                    columnLeft = column - 1;
                    columnRight = column + 1;
                }
                else if (numClick + 1 == sequence.length) {
                    if (row+1 == Math.sqrt(gridCount)-1){
                        var c = document.getElementById(id);
                        c.style.opacity="0.5";//darken the color of square when stepping on
                        pushRock();
                        idRecord = id;
                        numClick++;
                        row = idRecord.substring(5, 6);
                        column = idRecord.substring(7, 8);
                        row = parseInt(row);
                        column = parseInt(column);
                        rowUp = row + 1;
                        columnLeft = column - 1;
                        columnRight = column + 1;
                        alert("you won!!!");
                        //lvlUp();
                        Level34();
                    } else {
                        alert("you lost");
                        lifeDown();
                        lose();
                        wrongStep();
                    }

                } else {
                    alert("you lost");
                    lifeDown();
                    lose();
                    wrongStep();
                }
            }
            else {
                alert("you lost");
                lifeDown();
                lose();
                wrongStep();
            }
        }
        else {
            alert("you lost");
            lifeDown();
            lose();
            wrongStep();
        }
    }
}