import './App.css';

import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Sorts from './components/Sorts';
import GameOfLife from './components/game-of-life/GameOfLife';
import Nav from './components/Nav';

export default class App extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="app">
                <Router>
                    <Nav {...this.props}></Nav>
                    <Switch>
                        <Route exact path="/">
                            <Sorts {...this.props}></Sorts>
                        </Route>
                        <Route exact path="/game-of-life">
                            <GameOfLife {...this.props}></GameOfLife>
                        </Route>
                    </Switch>
                </Router>
                
            </section>
        );
    }
}

