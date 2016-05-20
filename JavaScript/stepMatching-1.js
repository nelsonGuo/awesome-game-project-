//step matching for 3*3
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
                Restart1();
            }
        }
        else {
            alert("you lost");
            lifeDown();
            lose();
            Restart1();
        }
    }
    else {
        if(id == "grid-"+row+"-"+columnLeft || id == "grid-"+row+"-"+columnRight || id == "grid-"+rowUp+"-"+column) {
            if (sequence[numClick] == map[id]) {
                if(numClick + 1 < sequence.length) {
                    var s = document.getElementById(id);
                    s.style.opacity="0.5";//darken the color of square when stepping on
                    s.style.webkitBackdropFilter="brightness(50%)";
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
                    idRecord = id;
                    row = idRecord.substring(5, 6);
                    row = parseInt(row);
                    if (row == 2){
                        var z = document.getElementById(id);
                        z.style.opacity="0.5";//darken the color of square when stepping on
                        pushRock();
                        numClick++;
                        column = idRecord.substring(7, 8);
                        column = parseInt(column);
                        rowUp = row + 1;
                        columnLeft = column - 1;
                        columnRight = column + 1;
                        //alert("you won!!!");
                        lvl++;
                        if(lvl == 2) {
                            Level2();
                        } else if (lvl == 3) {
                            Level3();
                        } else {
                            Level4();
                        }

                    } else {
                        alert("you lost");//for test will delete in the future
                        lifeDown();
                        lose();
                        Restart1();
                    }

                } else {
                    alert("you lost");
                    lifeDown();
                    lose();
                    Restart1();
                }
            }
            else {
                alert("you lost");
                lifeDown();
                lose();
                Restart1();
            }
        }
        else {
            alert("you lost");
            lifeDown();
            lose();
            Restart1();
        }
    }
}