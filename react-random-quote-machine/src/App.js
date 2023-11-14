import React from 'react';
import './App.css';
// imported my json as a variable called quotes
import quotes from './quotes.json';


// creating a stateful functional component to render all my HTML
class App extends React.Component {
  constructor(props) {
    super(props);
    // creating a state object with key/value pairs of quotes set to my quotes json data and random set to 0
    this.state = {
      quotes: quotes,
      random: 0
    }

    this.handleClick = this.handleClick.bind(this);


  }

  // creating a handleClick() method that sets the random key in state to a random number between 0 and the length of the quotes json data
  handleClick() {
    this.setState({
      random: Math.floor(Math.random() * this.state.quotes.length)
    })
  }

  render() {

    return (
      <div id='mainDiv'>
        <h1 id='head'>YOUR DAILY QUOTE MACHINE...</h1>
      <div className='App'>
        <div id='quote-box' className='quoteDiv'>
          {/* setting my h2 element to the quotes.quotes json array with the random key from state as the index */}
        <h2 id='text' className='quote'>{this.state.quotes[this.state.random].quote}</h2>
        {/* setting my h4 element to the quotes.author json array with the random key from state as the index */}
        <h4 id='author' className='author'>{this.state.quotes[this.state.random].author}</h4>
        </div>
        {/* button is gonna call the handleClick() method when clicked */}
        <button id='new-quote' className='nextBtn' onClick={this.handleClick}>Next Quote</button> <br />
        {/* creating a link to tweet the quote */}
        <a id='tweet-quote' className='tweetLink App-link' href='twitter.com/intent/tweet'>Tweet This</a>
      </div>
      </div>
    )
  }

}



export default App;