import React from "react";

import {getRandomQuizzes} from "./quizzes.js";


export class Match extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            match: null
        }
    }

    componentDidMount() {
        this.startNewMatch();
    }

    startNewMatch = () => {
        const quizzes = getRandomQuizzes(3);

        this.setState({
            match: {
                victory: false,
                defeat: false,
                quizzes: quizzes,
                currentIndex: 0,
                numberOfQuizzes: quizzes.length
            }
        });
    };



    handleClick = (correct) => {
        if (correct){
            if (this.state.match.currentIndex === (this.state.match.numberOfQuizzes - 1)) {
                this.setState({match: {victory: true}});
            } else {
                this.setState(prev => ({
                    match: {
                        currentIndex: prev.match.currentIndex + 1,
                        quizzes: prev.match.quizzes,
                        numberOfQuizzes: prev.match.numberOfQuizzes
                    }
                }))
            }

        } else {
            this.setState({match: {defeat: true}})
        }

    }

    renderAnswerTag(answer, correct){
        return <div className='answer' onClick={() => this.handleClick(correct)}>{answer}</div>
    }


    render() {
        if (!this.state.match){
            return <h2>loading</h2>;
        }

        if (this.state.match.victory){
            return(
                <div>
                    <h2>You won!</h2>
                    <button onClick={this.startNewMatch}>Start new match</button>
                </div>
            )
        }

        if (this.state.match.defeat){
            return (
                <div>
                    <h2>You lost!</h2>
                    <button onClick={this.startNewMatch}>Start new match</button>

                </div>
            )
        }

        const match = this.state.match;
        const count = "" + (match.currentIndex + 1) + "/" +  match.numberOfQuizzes;
        const quiz = match.quizzes[match.currentIndex];

        return(
            <>
                <div class='container'>
                    <p className='question'>Question number {count}: {quiz.question}</p>
                    {this.renderAnswerTag(quiz.answers[0], quiz.indexOfCorrect === 0)}

                    {this.renderAnswerTag(quiz.answers[1], quiz.indexOfCorrect === 1)}
                    {this.renderAnswerTag(quiz.answers[2], quiz.indexOfCorrect === 2)}
                    {this.renderAnswerTag(quiz.answers[3], quiz.indexOfCorrect === 3)}
                </div>


            </>
        )

    }
}
