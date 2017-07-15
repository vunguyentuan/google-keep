import React, { Component } from 'react'
import './input.css'

class Input extends Component {
  constructor() {
    super()

    this.state = {
      text: ''
    }
  }
  handleClick = () => {
    // console.log(this.input.value)

    console.log(this.state);
    this.props.onSubmit(this.state.text);
    this.setState({
      text: ''
    })
    this.input.focus();
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input
          ref={node => (this.input = node)}
          className="input"
          placeholder="Type something..."
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button onClick={this.handleClick}>Add</button>
      </div>
    )
  }
}

export default Input
