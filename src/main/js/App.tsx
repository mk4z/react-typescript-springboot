import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Top from "./page/Top";
import Hello from "./page/Hello";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Top}/>
                <Route path="/hello" component={Hello}/>
                <Route render={() => <h4>not found...</h4>}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;
