import react, {Component} from 'react';

import { Stage, Layer, Rect, Text } from 'react-konva';
import Cell from './Cell';

export default class GameOfLife extends Component {
    constructor() {
        super();
        this.state = {
            gridSize: 50,
            grid: this.buildGrid(),
            going: false
        }
    }

    buildGrid = () => {
        let newGrid = [];
        for(let i = 0; i < 10; i++) {
            let row = [];
            for(let j = 0; j < 10; j++) {
                row.push(false);
            }
            newGrid.push(row);
        }
        return newGrid;
    }

    liveOrDie = (x, y) => {
        let livingNeighbors = 0;
        for(let i = x - 1; i <= x + 1; i++){
            for(let j = y - 1; j <= y + 1; j++){
                if(this.state.grid[i] && this.state.grid[i][j]) {
                    livingNeighbors++;
                }
            }
        }

        if(livingNeighbors === 3) {
            return true;
        }
        if(livingNeighbors === 2 && this.state.grid[x][y]) {
            return true;
        }
        return false
    }

    toggleLife = (i, j) => {
        let newGrid = this.state.grid;
        newGrid[i][j] = !newGrid[i][j];
        this.setState({
            grid: newGrid
        });
    }

    nextStep = () => {
        let newGrid = this.state.grid;
        for(let x = 0; x < newGrid.length; x++) {
            for(let y = 0; y < newGrid[0].length; y++) {
                let life = this.liveOrDie(x, y);
                newGrid[x][y] = life;
            }
        }
        this.setState({
            grid: newGrid
        })
    }

    delay = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    playGame = async () => {
        this.setState({
            going: true
        })
        for(let turns = 0; turns < 1000; turns++) {
            await this.delay(100);
            this.nextStep();
        }
        this.setState({
            going: false
        })
    }

    render() {
        return (
            <section>
            <button onClick={this.playGame} disabled={this.state.going}>go</button>
            <button onClick={this.nextStep} disabled={this.state.going}>step</button>
            <Stage width={window.innerWidth - 100} height={window.innerHeight - 100}>
                <Layer>
                    {
                        this.state.grid.map((row, i) => {
                            return row.map((isAlive, j) => {
                                return <Cell x={i*50} y={j*50} alive={this.state.grid[i][j]} click={() => {this.toggleLife(i, j)}}></Cell>;
                            })
                        })
                    }
                </Layer>
            </Stage>
            </section>
        );
    }
}