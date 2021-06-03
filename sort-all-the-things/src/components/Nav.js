import react, {Component} from 'react';
import { withRouter } from 'react-router';

let nav = class Nav extends Component {
    toGameOfLife = () => {
        this.props.history.push('/game-of-life');
    }

    tooAllTheSorts = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <section>
                <button onClick={this.toGameOfLife}>Game Of Life</button>
                <button onClick={this.tooAllTheSorts}>All The Sorts</button>
            </section>
        )
    }
}

export default withRouter(nav);