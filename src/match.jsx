import React from "react";

import {getRandomQuizzes} from "./quizzes.js"


export class Match extends React.Component{

    constructor(props) {
        super(props);
        this.state = {quiz: getRandomQuizzes(1)[0]}
    }

    handleClick = (correct) => {
        if (correct){
            alert("Correct!");
            this.setState({quiz: getRandomQuizzes(1)[0]})
        }
        else {
            alert("Wrong answer")
        }
    }

    renderAnswerTag(answer, correct){
        return <div className='answer' onClick={() => this.handleClick(correct)}>{answer}</div>
    }


    render() {
        const quiz = this.state.quiz;

        return(
            <>
                <div class='container'>
                    <p className='question'>{quiz.question}</p>
                    {this.renderAnswerTag(quiz.answers[0], quiz.indexOfCorrect === 0)}

                    {this.renderAnswerTag(quiz.answers[1], quiz.indexOfCorrect === 1)}
                    {this.renderAnswerTag(quiz.answers[2], quiz.indexOfCorrect === 2)}
                    {this.renderAnswerTag(quiz.answers[3], quiz.indexOfCorrect === 3)}
                </div>


            </>
        )
    }
}