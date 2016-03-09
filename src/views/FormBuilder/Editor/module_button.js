import React from 'react'

class ModuleButton extends React.Component {
  constructor (props) {
    super(props)
    this.handleDragStart = this.handleDragStart.bind(this)
  }

  render () {
    return (
      <div draggable='true' className='btn btn-lg btn-secondary draggable' onDragStart={this.handleDragStart}>
        <span className='glyphicon glyphicon-move' onClick={this.props.onClick}/>
        {this.props.text}
      </div>
    )
  }

  handleDragStart (ev) {
    ev.dataTransfer.setData('questionType', this.props.questionType)
  }

}

ModuleButton.propTypes = {
  text: React.PropTypes.string.isRequired,
  questionType: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func
}

export default ModuleButton
