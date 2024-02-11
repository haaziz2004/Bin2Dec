import './App.css';
import React, { Component } from 'react';


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: '',
      };
    }


    handleInputChange = (event) => {
        const inputValue = event.target.value;
        this.setState({ inputValue });
      };




render() {
    const { inputValue } = this.state;


    return (
        <div>


        <div >
          <h1 className="title">Binary to Decimal Converter</h1>
          <h3 className="subheading"> Type a Binary sequence in the space below to see its decimal form</h3>
        </div>


        <div className="result-window">
            <p>{inputValue}</p>
        </div>


        <div>
          <input
            type="text"
            placeholder="Enter Binary sequence"
            className = "custom-input"
            onChange={this.handleInputChange}
            value = {inputValue}
          />
        </div>
       
        </div>
     
    );
  }
}


export default App;
