import React from "react";
import "./Info.css";

class Info extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      age: "",
      password: ""
    }

    this.setName = this.setName.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setAge = this.setAge.bind(this);
    this.setPassword = this.setPassword.bind(this);
  
  }

  setName(e) {
    this.setState({
      name: e.target.value
    })
  }

  setEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  
  setAge(e) {
    this.setState({
      age: e.target.value
    })
  }
  
  setPassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    // using the state to set the sessionStorage key/value pairs saving the info from the user input
    sessionStorage.setItem("name", this.state.name);
    sessionStorage.setItem("email", this.state.email);
    sessionStorage.setItem("age", this.state.age);
    sessionStorage.setItem("password", this.state.password);
    
    return (
         <div id="infoDiv">
           <h2>Please enter your information...</h2>
            <label id="name-label"><input onChange={this.setName} className="input" type="text" id="name" placeholder="Enter Your Name" required /></label>
        <label id="email-label"><input
          onChange={this.setEmail}       
          type="email"
          id="email"
          className="input"
          placeholder="Enter Your Email"
          required
        /></label>
        <label htmlFor="age" id="number-label"><input
          onChange={this.setAge}
          type="number"
          id="age"
          className="input"
          placeholder="Age"
          min="18"
          max="99"
          required
        /></label>
        <input
          onChange={this.setPassword}
          type="password"
          id="password"
          className="input"
          placeholder="Choose a Password"
          required
          pattern="[a-z0-9]{8, }"
        />
        </div>
    )
  }
}

export default Info;