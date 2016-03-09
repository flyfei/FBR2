import React from 'react'

class Divider extends React.Component {
  render () {
    var text
    if (this.props.children) {
      text = <h2>{this.props.children}</h2>
    }

    return (
      <div className='divider clearfix'>
        {text}<hr/>
      </div>
    )
  }
}

Divider.propTypes = {
  text: React.PropTypes.string,
  children: React.PropTypes.string
}

export default Divider
