import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Home} from "./home"
import {Match} from "./match";


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/match" component={Match}/>
                    </Switch>
            </div>
        </BrowserRouter>
    );
}
ReactDom.render(<App />, document.getElementById("root"));