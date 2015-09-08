import React from 'react'

export default class MountDiff extends React.Component {
  componentDidMount() {
    console.log('mounted something different')
  }
  render() {
    return (
      <div>Mounting something different</div>
    )
  }
}
