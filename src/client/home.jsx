import React from "react";
import {Link} from "react-router-dom";

export const Home = () => {
    return(
        <>
            <h1>Welcome to the quizgame!</h1>
            <p>Press the button to start a new game.</p>
            <div><Link to={"/match"}>New game</Link></div>
        </>
    )
}
