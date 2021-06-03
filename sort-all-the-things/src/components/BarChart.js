import React, {Component} from 'react';
import Chart from 'chart.js';

import logo from '../logo.svg';

export default class BarChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chart: null,
            alreadyAnimating: false
        }
    }

    componentDidMount() {
        let firstStep = this.props.chartData.steps[0].numbers.slice();

        let chart = new Chart(this.canvasContext, {
            type: 'bar',
            data: {
                labels: firstStep.map(() => ''),
                datasets: [{
                    label: this.props.title,
                    data: firstStep,
                    backgroundColor: firstStep.map(() => '#555555'),
                    borderColor: firstStep.map(() => '#000000'),
                    borderWidth: 1,
                }]
            },
            options: {
                animation: {
                    duration: 0
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            suggestedMin: 0,
                        }
                    }]
                }
            }
        });
        this.setState({
            chart: chart
        })
    }

    animate = async () => {
        if(this.state.alreadyAnimating) {
            return;
        }
        this.setState({
            alreadyAnimating: true
        })
        let steps = this.props.chartData.steps;
        for(let currentStep = 1; currentStep < steps.length; currentStep++) {
            // console.log(currentStep + "##### make sure this ends");
            let step = steps[currentStep];
            let newColors = this.newFoci(step.focusIndices);
            this.state.chart.data.datasets[0].backgroundColor = newColors;
            await this.updateAndWait();

            let nextStep = step.numbers;
            this.state.chart.data.datasets[0].data = nextStep;
            await this.updateAndWait();
        }
        this.setState({
            alreadyAnimating: false
        });
        this.state.chart.data.datasets[0].backgroundColor = this.newFoci([]);
        await this.state.chart.update();

    }

    setBarColors = (newColors) => {
        let newDataSet = this.state.chart;
        newDataSet.data.datasets[0].backgroundColor = newColors;
        this.setState({
            chart: newDataSet
        });
    }

    newFoci = (foci) => {
        if(!foci || foci.length < 1) {
            return this.state.chart.data.datasets[0].backgroundColor.map(() => {
                return '#55555';
            });
        }

        return this.state.chart.data.datasets[0].backgroundColor.map(
            (color, i) => {
                return (foci.includes(i)) 
                    ? '#cc0000' 
                    : '#555555';
            }
        );
    }

    updateAndWait = async () => {
        await this.state.chart.update();
        let millisecondsPerStep = Math.ceil(800.0 / this.props.chartData.sorted.length);
        await this.props.sleep(millisecondsPerStep);
    }

    reset = () => {
        this.state.chart.data.datasets[0].data = this.props.chartData.steps[0].numbers;
        this.state.chart.update();
    }

    animatingAnimation = () => {
        if(this.state.alreadyAnimating) {
            return (
                <section>
                    <img src={logo} className="App-logo" alt="logo" />
                </section>
            );
        }
        return (
            <section></section>
        );
    }

    setCanvasRef = (canvas) => {
        if(canvas){
            this.canvasContext = canvas.getContext('2d');
        }
    }

    render() {
        return (
            <section className={"chart-holder" + (this.state.alreadyAnimating ? ' animating' : '')}>
                {/* {this.animatingAnimation()} */}
                <canvas 
                    className="chart" 
                    ref={this.setCanvasRef} 
                    height="500px" 
                    width="500px"
                ></canvas>
                <section>
                    <button onClick={this.animate}>Start</button>
                    <button onClick={this.reset}>Reset</button>
                </section>
            </section>
        )
    }
}

