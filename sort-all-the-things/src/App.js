import logo from './logo.svg';
import './App.css';
import BarChart from './components/BarChart';

import BubbleSort from './sorting-algorithms/BubbleSort';

import React, {Component} from 'react';

export default class App extends Component{
    constructor(props) {
        super(props);
    }

    getChartData = () => {
        let bubble = new BubbleSort([7,20,6,2,5,3,4]);
        return bubble;
    }

    sleep = async (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    render() {
        return (
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <BarChart chartData={this.getChartData()} sleep={this.sleep}></BarChart>
            </header>
            </div>
        );
    }
}

