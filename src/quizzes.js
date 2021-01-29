
let quizzes = [
    {
        question: "Hvem er statsminister nå?",
        answers: [
            "Erna",
            "Jens",
            "Trygve",
            "Erik"
        ],
        indexOfCorrect: 1
    },
    {
        question: "Hvilken årstid er det?",
        answers: [
            "Sommer",
            "Høst",
            "Vinter",
            "Vår"
        ],
        indexOfCorrect: 3
    },
    {
        question: "Hvilken farge får du hvis du blander rød og blå?",
        answers: [
            "Grønn",
            "Gul",
            "Svart",
            "Lilla"
        ],
        indexOfCorrect: 1
    }
]

export function getRandomQuizzes (numberOfQuizzes) {

    if (numberOfQuizzes<1){
        throw "Invalid number of requested quizzes " + n;
     }

    if (numberOfQuizzes > quizzes.length){
        throw "Too many quizzes";
    }

    const selection = Array(numberOfQuizzes);
    console.log("Selection er: " + selection)

    let i = 0;

    while (i < numberOfQuizzes){
        const k = Math.floor(quizzes.length * Math.random());
        if (selection.includes(k)) {
            continue;
        }
        selection[i] = k;
        i++
    }
    console.log(selection)
    return Array.from(selection).map(e => quizzes[e])

}


