//life or timer to 0 it will popup a input board for the leaderboard.
function lose () {
        if ( life==0 ||timeGame<=0) {
                clearInterval(clock);
                openPopup();
        }
        
}
