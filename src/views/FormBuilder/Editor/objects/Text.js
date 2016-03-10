import React from 'react'

class Text extends React.Component {
  constructor (props) {
    super(props)
    this.meta = {
      initial: {
        text: 'Hello',
        rotate: 0,
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none',
        fill: 'black',
        fontSize: 50,
        fontFamily: 'Helvetica'
      }
    }
  }
  getStyle () {
    let {object} = this.meta
    return {
      dominantBaseline: 'central',
      fontWeight: object.fontWeight,
      fontStyle: object.fontStyle,
      textDecoration: object.textDecoration,
      mixBlendMode: object.blendMode,
      WebkitUserSelect: 'none'
    }
  }
  render () {
    let {object} = this.meta
    return (
      <text
        style={this.getStyle()}
        textAnchor='middle'
        fontSize={object.fontSize}
        fontFamily={object.fontFamily}>
         {object.text}
      </text>
    )
  }
}

Text.propTypes = {
  object: React.PropTypes.object,
  index: React.PropTypes.number,
  meta: React.PropTypes.object
}
export default Text
