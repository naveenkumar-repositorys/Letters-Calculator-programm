// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: '', count: ''}

  valueFromInput = event => {
    const {searchInput} = this.state
    const value = event.target.value
    const lengthOfValue = value.length
    console.log(value, lengthOfValue)
    this.setState({searchInput: value, count: lengthOfValue})
  }

  render() {
    const {searchInput, count} = this.state
    
    return (
      <div className="bg-container">
        <div className="imageContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="imgEl"
          />
        </div>
        <div className="calculateContainer">
          <h1 className="headEl">Calculate the Letters you enter</h1>
          <label htmlFor="inputElId" className="labelEl">
            Enter the phrase
          </label>
          <input
            type="text"
            placeholder="calculater"
            id="inputElId"
            className="claculatorInputEl"
            onChange={this.valueFromInput}
            value={searchInput}
          />
          <p className="elementsSum">No.of letters: {count}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
