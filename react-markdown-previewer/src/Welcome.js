import React from 'react';
import './Welcome.css';
import App from './App'

class Welcome extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            welcome: <div>
                <h1 >Welcome to the last Markdown Previewer you'll ever need...</h1>
                <h3>Click the text to load the previewer</h3>
            </div>
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            welcome: <App />
        })
    }

    render() {


        return (
            <div onClick={this.handleClick} id='welcomeDiv'>
                {this.state.welcome}
            </div>
        )
    }
}

export default Welcome;