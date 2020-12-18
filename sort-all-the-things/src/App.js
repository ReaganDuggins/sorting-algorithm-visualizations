import './App.css';
import BarChart from './components/BarChart';

import BubbleSort from './sorting-algorithms/BubbleSort';
import InsertionSort from './sorting-algorithms/InsertionSort';
import SelectionSort from './sorting-algorithms/SelectionSort';

import React, {Component} from 'react';

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sorts: []
        }


    }

    setBubbleRef = (bubble) => {
        if(bubble){
            this.bubbleRef = bubble;
        }
    }

    setInsertionRef = (insertion) => {
        if(insertion){
            this.insertionRef = insertion;
        }
    }

    setSelectionRef = (selection) => {
        console.log('selehkt', selection);
        if(selection){
            this.selectionRef = selection;
        }
    }

    componentDidMount() {
        this.getChartData();
    }

    getChartData = async () => {
        let numbers = [];
        while(numbers.length < 100) {
            let num = Math.floor(Math.random() * 101);
            if(!numbers.includes(num)) {
                numbers.push(num);
            }
        }
        let bubble = new BubbleSort(numbers);
        let insertion = new InsertionSort(numbers);
        let selection = new SelectionSort(numbers);
        this.setState({
            bubbleSort: bubble,
            insertionSort: insertion,
            selectionSort: selection
        });
    }

    sleep = async (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    bubbleSort = () => {
        if(this.state.bubbleSort){
            return (
                <BarChart chartData={this.state.bubbleSort} ref={this.setBubbleRef} title="Bubble Sort" sleep={this.sleep}></BarChart>
            );
        }
        return <section></section>;
    }

    insertionSort = () => {
        if(this.state.insertionSort){
            return (
                <BarChart chartData={this.state.insertionSort} ref={this.setInsertionRef} title="Insertion Sort" sleep={this.sleep}></BarChart>
            );
        }
        return <section></section>;
    }

    selectionSort = () => {
        if(this.state.selectionSort){
            return (
                <BarChart chartData={this.state.selectionSort} ref={this.setSelectionRef} title="Selection Sort" sleep={this.sleep}></BarChart>
            );
        }
        return <section></section>;
    }

    sortAll = () => {
        this.bubbleRef.animate();
        this.insertionRef.animate();
        this.selectionRef.animate();
    }

    render() {
        return (
            <section className="App">
                <header className="App-header">
                    {this.bubbleSort()}
                    {this.insertionSort()}
                    {this.selectionSort()}
                    <button onClick={this.sortAll}>Sort All</button>
                </header>
            </section>
        );
    }
}

