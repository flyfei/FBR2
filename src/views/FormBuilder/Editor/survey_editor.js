import React from 'react'
import DraggableQuestions from './draggable_questions'
import EditEssayQuestion from './edit_essay_question'

import PanelList from './panels/PanelList'

import update from 'react-addons-update'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const objects = [
  {
    'text': 'make',
    'rotate': 0,
    'fontWeight': 'normal',
    'fontStyle': 'normal',
    'textDecoration': 'none',
    'fill': 'rgba(255, 255, 117, 1)',
    'fontSize': '40',
    'fontFamily': 'Helvetica',
    'type': 'text',
    'x': 87,
    'y': 159,
    'blendMode': 'normal'
  }
]

class SurveyEditor extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dropZoneEntered: false,
      title: '',
      introduction: '',
      questions: []
    }
    this.handleDragOver = this.handleDragOver.bind(this)
    this.handleDragEnter = this.handleDragEnter.bind(this)
    this.handleDragLeave = this.handleDragLeave.bind(this)
    this.handleDrop = this.handleDrop.bind(this)

    this.handleQuestionRemove = this.handleQuestionRemove.bind(this)
    this.handleQuestionChange = this.handleQuestionChange.bind(this)
  }

  render () {
    var questions = this.state.questions.map(function (q, i) {
      return (
        <EditEssayQuestion key={i}
          onChange={this.handleQuestionChange}
          onRemove={this.handleQuestionRemove}
          question={q}
        />
      )
    }.bind(this))

    var dropZoneEntered = ''
    if (this.state.dropZoneEntered) {
      dropZoneEntered = 'drag-enter'
    }

    let showPropertyPanel = true

    return (
      <div className='survey-editor'>
        <div className='row'>
          <aside className='sidebar col-md-3'>
            <h2>Modules</h2>
            <DraggableQuestions />
          </aside>

          <div className='survey-canvas col-md-6'>

            <ReactCSSTransitionGroup transitionName='question'>
              {questions}
            </ReactCSSTransitionGroup>

            <div
              className={'drop-zone well well-drop-zone ' + dropZoneEntered}
              onDragOver={this.handleDragOver}
              onDragEnter={this.handleDragEnter}
              onDragLeave={this.handleDragLeave}
              onDrop={this.handleDrop}
            >
              Drag and drop a module from the left
            </div>

            <div className='actions'>
              <button className='btn btn-lg btn-primary btn-save' onClick={this.handleSaveClicked}>Save</button>
            </div>
          </div>

          <aside className='sidebar col-md-3'>
              {showPropertyPanel && (
                <PanelList
                  objects={objects}
                  onArrange={this.handleArrange.bind(this)}
                  onChange={this.handleObjectChange.bind(this)}
                />
            )}
          </aside>
        </div>

      </div>
    )
  }

  handleFormChange (formData) {
    this.setState(formData)
  }

  handleDragOver (ev) {
    // This allows handleDropZoneDrop to be called
    // https://code.google.com/p/chromium/issues/detail?id=168387
    ev.preventDefault()
  }

  handleDragEnter () {
    this.setState({dropZoneEntered: true})
  }

  handleDragLeave () {
    this.setState({dropZoneEntered: false})
  }

  handleDrop (ev) {
    var questionType = ev.dataTransfer.getData('questionType')
    var questions = update(this.state.questions, {
      $push: [{ type: questionType }]
    })

    this.setState({
      questions: questions,
      dropZoneEntered: false
    })
  }

  handleQuestionChange (key, newQuestion) {
    var questions = update(this.state.questions, {
      $splice: [[key, 1, newQuestion]]
    })

    this.setState({ questions: questions })
  }

  handleQuestionRemove (key) {
    var questions = update(this.state.questions, {
      $splice: [[key, 1]]
    })

    this.setState({ questions: questions })
  }

  handleSaveClicked (ev) {
    // SurveyActions.save({
    //   title:        this.state.title,
    //   introduction: this.state.introduction,
    //   questions:    this.state.questions
    // })
  }

/*
*属性
*/
  handleObjectChange (key, value) {
    let {selectedObjectIndex} = this.state
    console.log('handleObjectChange  key:' + key + '  value:' + value +
    ' selectedObjectIndex(old??):' + selectedObjectIndex)
  }
  handleArrange (arrange) {
    console.log('handleArrange:' + arrange)
  }
}

SurveyEditor.propTypes = {
  type: React.PropTypes.string
}

module.exports = SurveyEditor
