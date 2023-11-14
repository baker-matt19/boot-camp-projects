import React from "react";
import "./Game.css";

class Game extends React.Component {
    constructor(props) {
        super(props);

        // creating a state.game and setting it to an empty string
        this.state = {
            game: ""
        }

        this.setGame = this.setGame.bind(this);
    }

    // setting this.state.game to whichever selection is chosen from the dropdown with an onChange on the <select> element. Did the same in Console and Addition Components.
    setGame(e) {
        this.setState({
            game: e.target.options[e.target.value].innerText
        })
    }

    render() {

        // saving the chosen game in a key of game in the sessionStorage
        sessionStorage.setItem("game", this.state.game);

    return (
        <div id="gameDiv">
            <label >What is your favorite Video Game franchise?</label><br />
            <select onChange={this.setGame}  id="gameDropdown" name="referrer">
                <option  value="">Select One</option>
                <option value="1">Halo</option>
                <option  value="2">Call of Duty</option>
                <option  value="3">Destiny</option>
                <option  value="4">Dark Souls</option>
                <option  value="5">Elder Scrolls</option>
                <option  value="6">Pokemon</option>
                <option  value="7">MineCraft</option>
                <option  value="8">Grand Theft Auto</option>
                <option  value="9">Madden</option>
                <option value="10">Overwatch</option>
            </select>
        </div>
    )
    }
};

export default Game;