import './App.css';
import React, { Component } from 'react';


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: '',
        convertedValue:'',
      };
    }


    handleInputChange = (event) => {
        const inputValue = event.target.value;
        this.setState({ inputValue });
        console.log(inputValue)
        fetch(`http://localhost:8080/api/convert?inputString=${inputValue}`)
        .then(response => response.text())
        .then(convertedValue => {
          this.setState({ convertedValue });
        })
        .catch(error => console.error('Error:', error));
      };






render() {
    const { inputValue,convertedValue } = this.state;


    return (
        <div>


        <div >
          <h1 className="title">Binary to Decimal Converter</h1>
          <h3 className="subheading"> Type a Binary sequence in the space below to see its decimal form</h3>
        </div>


        <div className="result-window">
            <p>{convertedValue}</p>
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
