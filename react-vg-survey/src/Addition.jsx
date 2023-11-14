import React from "react";
import "./Addition.css";

class Addition extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onList: "",
            favorite: ""
        }

        this.setOnList = this.setOnList.bind(this);
        this.setFavorite = this.setFavorite.bind(this);

    }

    setOnList(e) {
        this.setState({
            onList: e.target.options[e.target.value].innerText
        })
    }
    
    // setting this.state.favorite with the value from the textarea by using an onChange.
    setFavorite(e) {
        this.setState({
            favorite: e.target.value
        })
    }

    render() {

        sessionStorage.setItem("onList", this.state.onList);
        // saving this.state.favorite to a key of favorite in the sessionStorage
        sessionStorage.setItem("favorite", this.state.favorite);
        
    return (
        <div>
        <div id="additionDiv">
            <label>Was your favorite game on the list?</label><br />
            <select onChange={this.setOnList} id="additionDropdown">
                <option>Select One</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select> <br />
            <textarea
            onChange={this.setFavorite}
          placeholder="Tell us your favorite video game"
          name="game-list"
          id="additionText"
          cols="18"
          rows=""
        ></textarea>
        </div>
        {/* Made an input element with a submit type. formAction will take a url where the data will be sent. formEncType will encrypt the data.  */}
           <input onClick={() => {
               console.log(sessionStorage)
           }} id="submitBtn" type="submit" />
        </div>
    )
    }
};

export default Addition;