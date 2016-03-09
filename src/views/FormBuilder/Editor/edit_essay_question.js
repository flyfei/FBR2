import React from 'react'
import EditQuestion from './edit_question'
import merge from 'merge'

class EditEssayQuestion extends React.Component {

  propTypes: {
    key: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onRemove: React.PropTypes.func.isRequired,
    question: React.PropTypes.object.isRequired
  }

  render () {
    var description = this.props.question.description || ''

    return (
      <EditQuestion type='essay' onRemove={this.handleRemove}>
        <label>Description</label>
        <input type='text' className='description' value={description} onChange={this.handleChange} />
      </EditQuestion>
    )
  }

  handleChange (ev) {
    var question = merge(this.props.question, { description: ev.target.value })
    this.props.onChange(this.props.key, question)
  }

  handleRemove () {
    this.props.onRemove(this.props.key)
  }
}

EditEssayQuestion.propTypes = {
  key: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onRemove: React.PropTypes.func.isRequired,
  question: React.PropTypes.object.isRequired
}

export default EditEssayQuestion
