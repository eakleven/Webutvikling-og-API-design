
let quizzes = [
    {
        question: "Hvem er statsminister nå?",
        answers: [
            "Erna",
            "Jens",
            "Trulte",
            "Erik"
        ],
        indexOfCorrect: 0
    },
    {
        question: "Hvilken årstid er det?",
        answers: [
            "Sommer",
            "Høst",
            "Vinter",
            "Vår"
        ],
        indexOfCorrect: 2
    },
    {
        question: "Hvilket tall er pi?",
        answers: [
            "4.12",
            "1.54353",
            "3.14",
            "Ingen vet"
        ],
        indexOfCorrect: 2
    },
    {
        question: "Hvor mange land er det i verden?",
        answers: [
            "208",
            "193",
            "365",
            "93"
        ],
        indexOfCorrect: 1
    },
    {
        question: "Hvilken farge får du hvis du blander rød og blå?",
        answers: [
            "Grønn",
            "Gul",
            "Svart",
            "Lilla"
        ],
        indexOfCorrect: 0
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


