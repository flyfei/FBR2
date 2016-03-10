import React from 'react'
import _ from 'lodash'
import PropertyGroup from './PropertyGroup'

import EditText from './components/EditText'

class TextPanel extends React.Component {

  render () {
    let {object} = this.props
    return (
      <PropertyGroup >
      {_.has(object, 'text') && <EditText title={'文本内容'}/>}
      {_.has(object, 'fontSize') && <EditText title={'字体大小'}/>}

      </PropertyGroup>
    )
  }
}

TextPanel.propTypes = {
  object: React.PropTypes.object.isRequest
}

export default TextPanel
