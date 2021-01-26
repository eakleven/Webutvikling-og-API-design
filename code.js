let gameFinished = true;
let answearPosition = 0;
let currentQuiz = 0;

const positions = [0, 1, 2, 3];

let quizzes = [
    {
        question: "Hvem er statsminister nå?",
        ans_01: "Erna",
        ans_02: "Jens",
        ans_03: "Trygve",
        ans_04: "Erik",
        indexOfCorrect: 1
    },
    {
        question: "Hvilken årstid er det?",
        ans_01: "Sommer",
        ans_02: "Høst",
        ans_03: "Vinter",
        ans_04: "Vår",
        indexOfCorrect: 3
    }
]


function newGame(){
    let index = Math.floor(Math.random() * quizzes.length);
    if(index === currentQuiz){
        index = (index + 1) % quizzes.length;
    }
    const quiz = quizzes[index];
    currentQuiz = index;
    displayQuiz(quiz);

}

function displayQuiz(quiz){
    const question = document.getElementById("question")
    question.innerHTML=quiz.question;
    let answears = "<p>Her kommer alternativene: </p>" ;
    answears += clickAnswear(quiz.ans_01, quiz.indexOfCorrect === 1);
    answears += clickAnswear(quiz.ans_02, quiz.indexOfCorrect === 2);
    answears += clickAnswear(quiz.ans_03, quiz.indexOfCorrect === 3);
    answears += clickAnswear(quiz.ans_04, quiz.indexOfCorrect === 4);

    const alternatives = document.getElementById("alternatives");
    alternatives.innerHTML = answears


}

function clickAnswear(answear, correct){

    let onclick;
    if (correct){
        onclick = "alert('Riktig!'); newGame()"
    }

    const html = "<div class='answear' onclick=\""+onclick+"\">" + answear + "</div>"
    return html
}


