function a() {
    let b1 = document.querySelector('[aria-label="Game Board 1"]').children;
    let b2 = document.querySelector('[aria-label="Game Board 2"]').children;
    let b3 = document.querySelector('[aria-label="Game Board 3"]').children;
    let b4 = document.querySelector('[aria-label="Game Board 4"]').children;

    let characters = ["🟥", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];

    let g1 = 0;
    let g2 = 0;
    let g3 = 0;
    let g4 = 0;

    let b1s = "";
    let b2s = "";
    let b3s = "";
    let b4s = "";
    let lines = "Daily Quordle #" + Math.round((new Date(new Date).setHours(0, 0, 0, 0) - new Date(2022,0,24,0,0,0,0)) / 86400000) + "\n";
    let words = ""
    
    for (let i = 0; i < b1.length; i++) {
        if (b1[i].attributes["aria-label"].nodeValue.indexOf(" is correct") >= 0)
            g1 = i + 1;
        if (b2[i].attributes["aria-label"].nodeValue.indexOf(" is correct") >= 0)
            g2 = i + 1;
        if (b3[i].attributes["aria-label"].nodeValue.indexOf(" is correct") >= 0)
            g3 = i + 1;
        if (b4[i].attributes["aria-label"].nodeValue.indexOf(" is correct") >= 0)
            g4 = i + 1;
    }

    let wordsFirst = Math.max(g1 == 0 ? 10 : g1, g2 == 0 ? 10 : g2) >= Math.max(g3 == 0 ? 10 : g3, g4 == 0 ? 10 : g4);

    for (let i = 0; i < b1.length; i++) {
        if (b1[i].attributes["aria-label"].nodeValue.indexOf(" is correct") >= 0)
            g1 = i + 1;
        if (b2[i].attributes["aria-label"].nodeValue.indexOf(" is correct") >= 0)
            g2 = i + 1;
        if (b1[i].attributes["aria-label"].nodeValue.indexOf("Answer already guessed correctly on row ") < 0 ||
            b2[i].attributes["aria-label"].nodeValue.indexOf("Answer already guessed correctly on row ") < 0) {

            let word = "";

            for (let j = 0; j < 5; j++) {
                //bg-box-correct
                //dark:bg-gray-700
                //bg-box-diff
                let t1s = b1[i].attributes["aria-label"].nodeValue.indexOf("Answer already guessed correctly on row ") < 0 ? "⬜" : "⬛";
                let t2s = b2[i].attributes["aria-label"].nodeValue.indexOf("Answer already guessed correctly on row ") < 0 ? "⬜" : "⬛";
                if (b1[i].children[j].children[0].innerText.length > 0)
                    word += b1[i].children[j].children[0].innerText;
                else
                    word += b2[i].children[j].children[0].innerText;
                for (let k = 0; k < b1[i].children[j].classList.length; k++) {
                    if (b1[i].children[j].classList[k] === "bg-box-correct")
                        t1s = "🟩";
                    else if (b1[i].children[j].classList[k] === "bg-box-diff")
                        t1s = "🟨";

                    if (b2[i].children[j].classList[k] === "bg-box-correct")
                        t2s = "🟩";
                    else if (b2[i].children[j].classList[k] === "bg-box-diff")
                        t2s = "🟨";
                }
                b1s += t1s;
                b2s += t2s;
            }

            if (wordsFirst) {
                words += b1s + " " + b2s + " ||`" + word + "`||\n";
            } else {
                words += b1s + " " + b2s + "\n";
            }
            b1s = "";
            b2s = "";
        }
    }

    words += "\n";
    
    for (let i = 0; i < b3.length; i++) {
        if (b3[i].attributes["aria-label"].nodeValue.indexOf(" is correct") >= 0)
            g3 = i + 1;
        if (b4[i].attributes["aria-label"].nodeValue.indexOf(" is correct") >= 0)
            g4 = i + 1;
        if (b3[i].attributes["aria-label"].nodeValue.indexOf("Answer already guessed correctly on row ") < 0 ||
            b4[i].attributes["aria-label"].nodeValue.indexOf("Answer already guessed correctly on row ") < 0) {

            let word = "";

            for (let j = 0; j < 5; j++) {
                let t3s = b3[i].attributes["aria-label"].nodeValue.indexOf("Answer already guessed correctly on row ") < 0 ? "⬜" : "⬛";
                let t4s = b4[i].attributes["aria-label"].nodeValue.indexOf("Answer already guessed correctly on row ") < 0 ? "⬜" : "⬛";
                if (b3[i].children[j].children[0].innerText.length > 0)
                    word += b3[i].children[j].children[0].innerText;
                else
                    word += b4[i].children[j].children[0].innerText;
                for (let k = 0; k < b3[i].children[j].classList.length; k++) {
                    if (b3[i].children[j].classList[k] === "bg-box-correct")
                        t3s = "🟩";
                    else if (b3[i].children[j].classList[k] === "bg-box-diff")
                        t3s = "🟨";

                    if (b4[i].children[j].classList[k] === "bg-box-correct")
                        t4s = "🟩";
                    else if (b4[i].children[j].classList[k] === "bg-box-diff")
                        t4s = "🟨";
                }
                b3s += t3s;
                b4s += t4s;
            }

            if (wordsFirst) {
                words += b3s + " " + b4s + "\n";
            } else {
                words += b3s + " " + b4s + " ||`" + word + "`||\n";
            }
            b3s = "";
            b4s = "";
        }
    }

    lines += characters[g1] + " " + characters[g2] + "\n" + characters[g3] + " " + characters[g4] + "\n\n" + words;

    navigator.clipboard.writeText(lines);
};
a();
