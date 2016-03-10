import React, { Component } from 'react'
import Radium from 'radium'

import TextPanel from './TextPanel'

const SUPPORT_TYPES = {
  text: TextPanel
}
class PanelList extends Component {
  render () {
    const { objects } = this.props
    // <div style={[styles.propertyPanel, style]}>
    //   {objectComponent.panels.map((Panel, i) => <Panel key={i} {...this.props} />)}
    // </div>
    return (
      <div>
        <h2>我是属性</h2>
        {objects.map((object, i) => <TextPanel key={i} object={object} />)}
      </div>
    )
  }
}

PanelList.propTypes = {
  objects: React.PropTypes.array.isRequest,
  offset: React.PropTypes.object,
  objectComponent: React.PropTypes.object
}

export default Radium(PanelList)
