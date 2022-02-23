function a(e) {
    var won = e.gameStatus === "WIN",
        day = Math.round((new Date(new Date).setHours(0, 0, 0, 0) - new Date(2021,5,19,0,0,0,0)) / 86400000);

    discord = "Wordle " + day + " " + (e.gameStatus === "WIN" ? e.rowIndex : "X") + "/6";
    if (e.hardMode)
        discord += "*";
    discord += "\n\n";

    var guesses = "";
    var i = 0;
    return e.evaluations.forEach((function(word) {
        if (word) {
            word.forEach((function(letter) {
                if (letter) {
                    switch (letter) {
                        case "correct": guesses += window.localStorage["nyt-wordle-cbmode"] === 'true' ? "🟧" : "🟩"; break;
                        case "present": guesses += window.localStorage["nyt-wordle-cbmode"] === 'true' ? "🟦" : "🟨"; break;
                        case "absent": guesses += window.localStorage["nyt-wordle-darkmode"] === 'true' ? "⬛" : "⬜"; break;
                    }
                }
            }));

            guesses += " ||`" + e.boardState[i].toUpperCase() + "`||\n";
        }
        i++;
    })), { text: discord + guesses.trimEnd() };
};
navigator.clipboard.writeText(a(JSON.parse(window.localStorage['nyt-wordle-state'])).text);
