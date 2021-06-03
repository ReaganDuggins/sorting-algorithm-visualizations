import react, {Component} from 'react';

import {Rect} from 'react-konva';

export default class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'black',
            x: props.x,
            y: props.y
        }
    }

    render() {
        return (
            <Rect
                x={this.state.x}
                y={this.state.y}
                width={50}
                height={50}
                fill={this.props.alive ? 'green' : '#333'}
                shadowBlur={5}
                onClick={this.props.click}
            />
        )
    }
}