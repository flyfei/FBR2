import React from 'react'
import Radium from 'radium'
import _ from 'lodash'

import styles from './styles'

const PropertyGroup = ({showIf = true, ...props}) => {
  if (!showIf) {
    return <div style={styles.empty} />
  }
  return (
    <div style={styles.propertyGroup}>
      {props.children}
    </div>
  )
}

PropertyGroup.propTypes = {
  showIf: React.PropTypes.bool.isRequest,
  children: React.PropTypes.object
}

export default Radium(PropertyGroup)
