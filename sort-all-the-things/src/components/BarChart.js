import React, {Component} from 'react';
import Chart from 'chart.js';

export default class BarChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chartData: props.chartData,
            chart: null,
            alreadyAnimating: false
        }
    }

    componentDidMount() {
        let firstStep = this.state.chartData.steps[0].slice();
        let chart = new Chart(this.canvasContext, {
            type: 'bar',
            data: {
                labels: firstStep.map(() => ''),
                datasets: [{
                    label: 'Bubble Sort',
                    data: firstStep,
                    backgroundColor: firstStep.map(() => '#555555'),
                    borderColor: firstStep.map(() => '#000000'),
                    borderWidth: 1,
                }]
            },
            options: {
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
        let steps = this.state.chartData.steps;
        for(let currentStep = 1; currentStep < steps.length; currentStep++) {
            await this.props.sleep(400);
            let nextStep = steps[currentStep];
            this.state.chart.data.datasets[0].data = nextStep;
            this.state.chart.update();
        }
        this.setState({
            alreadyAnimating: false
        });
    }

    shouldAnimate = (currentStep, steps) => {
        return currentStep < steps.length && !this.state.alreadyAnimating;
    }

    render() {
        return (
            <section className="chart-holder">
                <canvas className="chart" ref={(canvas) => {
                        if(canvas){
                            this.canvasContext = canvas.getContext('2d');
                        }
                    }} height="500px" width="500px"></canvas>
                <section>
                    <button onClick={this.animate}>Start</button>
                </section>
            </section>
        )
    }
}

