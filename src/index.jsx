import React from "react";
import ReactDom from "react-dom";
import {Match} from "./match"


const App = () => {
    return (
        <React.Fragment>
            <Match/>
        </React.Fragment>
    )
}
ReactDom.render(<App />, document.getElementById("root"));