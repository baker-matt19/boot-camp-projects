import React from "react";
import "./App.css";
import Info from "./Info";
import Game from "./Game";
import Console from "./Console";
import Addition from "./Addition";

// creating a class element for my App Component
class App extends React.Component {
    constructor(props) {
        super(props);
        // setting a state to a blank div element
        this.state = {
            display: <div></div>
        }

        // binding this to my methods that will render my different Components
        this.handleInfo = this.handleInfo.bind(this);
        this.handleGame = this.handleGame.bind(this);
        this.handleConsole = this.handleConsole.bind(this);
        this.handleAddition = this.handleAddition.bind(this);

    }

    // creating a method for each Component. When I attach them to my buttons with an onClick it will change the state to that Component.
    handleInfo() {
        this.setState({
            display: <Info />
        })
    }

    handleGame() {
        this.setState({
            display: <Game />
        })
    }

    handleConsole() {
        this.setState({
            display: <Console />
        })
    }
    
    handleAddition() {
        this.setState({
            display: <Addition />
        })
    }

    render() {
    return (
        <div>
            <h1>Welcome to my video game survey.</h1>
            <h3>This is a survey to gauge what most people's favorite video game is.</h3>
            <div>
            <button className="btn" onClick={this.handleInfo}>Info</button>
            <button className="btn" onClick={this.handleGame}>Game</button>
            <button className="btn" onClick={this.handleConsole}>Console</button>
            <button className="btn" onClick={this.handleAddition}>Additional</button>
            </div>
            <div>
                {/* rendering the Component from state in the div */}
                {this.state.display}
            </div>
        </div>
    )
    }
};

export default App;