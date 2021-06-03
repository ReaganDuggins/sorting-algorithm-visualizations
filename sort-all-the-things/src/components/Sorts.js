import react, {Component} from 'react';
import BarChart from './BarChart';

import BubbleSort from '../sorting-algorithms/BubbleSort';
import CombSort from '../sorting-algorithms/CombSort';
import InsertionSort from '../sorting-algorithms/InsertionSort';
import SelectionSort from '../sorting-algorithms/SelectionSort';

export default class Sorts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sorts: []
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
        let comb = new CombSort(numbers);
        let insertion = new InsertionSort(numbers);
        let selection = new SelectionSort(numbers);
        this.setState({
            bubbleSort: bubble,
            combSort: comb,
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
                <BarChart chartData={this.state.bubbleSort} ref={this.setBubbleRef} title="Bubble Sort O(n^2)" sleep={this.sleep}></BarChart>
            );
        }
        return <section></section>;
    }

    combSort = () => {
        if(this.state.combSort){
            return (
                <BarChart chartData={this.state.combSort} ref={this.setCombRef} title="Comb Sort O(n^2)" sleep={this.sleep}></BarChart>
            );
        }
        return <section></section>;
    }

    insertionSort = () => {
        if(this.state.insertionSort){
            return (
                <BarChart chartData={this.state.insertionSort} ref={this.setInsertionRef} title="Insertion Sort O(n^2)" sleep={this.sleep}></BarChart>
            );
        }
        return <section></section>;
    }

    selectionSort = () => {
        if(this.state.selectionSort){
            return (
                <BarChart chartData={this.state.selectionSort} ref={this.setSelectionRef} title="Selection Sort O(n^2)" sleep={this.sleep}></BarChart>
            );
        }
        return <section></section>;
    }

    sortAll = () => {
        this.bubbleRef.animate();
        this.combRef.animate();
        this.insertionRef.animate();
        this.selectionRef.animate();
    }

    setBubbleRef = (bubble) => {
        if(bubble){
            this.bubbleRef = bubble;
        }
    }

    setCombRef = (comb) => {
        if(comb){
            this.combRef = comb;
        }
    }

    setInsertionRef = (insertion) => {
        if(insertion){
            this.insertionRef = insertion;
        }
    }

    setSelectionRef = (selection) => {
        if(selection){
            this.selectionRef = selection;
        }
    }

    render() {
        return (
            <section className="sort-flexer">
                <section className="sort-container">
                        {this.bubbleSort()}
                        {this.combSort()}
                        {this.insertionSort()}
                        {this.selectionSort()}
                        <button onClick={this.sortAll}>Sort All</button>
                </section>
            </section>
        );
    }
}