import React from 'react'

class ChildWithProps extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired
  }
  static defaultProps = {
    title: 'Defaultness'
  }
  render() {
    return (
      <div>I will show my prop, title: {this.props.title}</div>
    )
  }
}

export default class PropsExample extends React.Component {
  render() {
    return (
      <div>
        Props Example3
        <ChildWithProps title={123} />
      </div>
    )
  }
}






