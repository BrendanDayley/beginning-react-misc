import React from 'react'

export default React.createClass({
  displayName: 'MountExample',

  componentWillMount() {
    console.log('about to mount')
  },

  componentDidMount() {
    console.log('just mounted')
  },

  componentWillUnmount() {
    console.log('about to unmount')
  },

  render() {
    return (
      <div>Mount Example</div>
    )
  }

})