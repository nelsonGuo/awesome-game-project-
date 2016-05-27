//life or timer to 0 it will popup a input board for the leaderboard.
function quiting() {
        quite = true;
        lose();
}

function lose () {
        if ( life==0 ||timeGame<=0 || timeGame == 0 || quite == true) {
                clearInterval(clock);
                document.cookie="timerRank"+"="+timerRank+";";

                document.cookie="level"+"="+lvl+";";

                $.getScript("playerName.php");
                openPopup();

        }
        
}
