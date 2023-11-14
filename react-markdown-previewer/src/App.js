
import React from 'react';
import './App.css';
import marked from "marked";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value
    })
  }

  render() {
   
  return (
    <div className="mdPreviewer">
      <h2>Markdown Previewer</h2>
      <div id='topDiv'>
        <p>Input your markdown format into the editor...</p>
      <textarea onChange={this.handleChange} placeholder="Editor" id='editor'></textarea>
      <p>and it will output in the previewer at the bottom.</p>
      </div>
      <div id='preview'>
        <pre dangerouslySetInnerHTML={{__html: marked(this.state.userInput)}}></pre>
      </div>
      <footer id='footer'>
        <p>&copy;MatthewBaker2023</p>
        </footer>
    </div>
  );
}
}

export default App;
