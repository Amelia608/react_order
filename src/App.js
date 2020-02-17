import React, { Component } from "react";
import "./assets/css/App.css";
import Home from "./components/Home";
import Content from "./components/Content"
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Router>
                <div className="app">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/content/:aid" component={Content} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
