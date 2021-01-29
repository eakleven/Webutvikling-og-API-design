
import {getRandomQuizzes} from "./quizzes.js"




function displayQuiz(quiz){
    const question = document.getElementById("question")
    question.innerHTML=quiz.question;
    let answers = "<p>Her kommer alternativene: </p>" ;
    answers += clickAnswer(quiz.answers[0], quiz.indexOfCorrect === 1);
    answers += clickAnswer(quiz.answers[1], quiz.indexOfCorrect === 2);
    answers += clickAnswer(quiz.answers[2], quiz.indexOfCorrect === 3);
    answers += clickAnswer(quiz.answers[3], quiz.indexOfCorrect === 4);

    const alternatives = document.getElementById("alternatives");
    alternatives.innerHTML = answers


}

function clickAnswer(answer, correct){

    let onclick;
    if (correct){
        onclick = "alert('Riktig!'); EntryPoint.displayNewQuiz();";
    }

    const html = "<div class='answer' onclick=\""+onclick+"\">" + answer + "</div>"
    return html
}

export function displayNewQuiz(){
    const quiz = getRandomQuizzes(3)[0];
    console.log(quiz)

    displayQuiz(quiz)
}