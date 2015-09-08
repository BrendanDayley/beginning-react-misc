import React from 'react'

const mountingAcrobatics = {
  componentDidMount() {
    console.log('is about to mount the pommel horse')
  }
}

export default React.createClass({
  displayName: 'MixinsExample',

  mixins: [ mountingAcrobatics ],

  render() {
    return (
      <div>Mixin Example -- Mounting Tricks</div>
    )
  }

})