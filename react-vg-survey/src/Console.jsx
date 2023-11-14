import React from "react";
import "./Console.css";

class Console extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            console: ""
        }

        this.setConsole = this.setConsole.bind(this);

    }

    setConsole(e) {
        this.setState({
            console: e.target.options[e.target.value].innerText
        })
    }

    render() {

        sessionStorage.setItem("console", this.state.console);

    return (
        <div id="consoleDiv">
            <label>Which Console Do You Prefer?</label><br />
            <div id="consoleChoiceDiv">
          <select onChange={this.setConsole} id="consoleDropdown">
            <option value="">Select One</option>
            <option value="1">Xbox</option>
            <option value="2">PlayStation</option>
            <option value="3">Switch</option>
            <option value="4">PC</option>
          </select>
          </div>
        </div>
    )
    }
};

export default Console;