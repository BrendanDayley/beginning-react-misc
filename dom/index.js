import React from 'react'

export default class DomExample extends React.Component {
  handleClick() {
    alert('You typed ' + React.findDOMNode(this.refs.input).value)
  }
  render() {
    return (
      <div>
        DOM Example
        <input type="text" ref="input" placeholder="Type me..." />
        <button onClick={this.handleClick}>Say It</button>
      </div>
    )
  }
}
