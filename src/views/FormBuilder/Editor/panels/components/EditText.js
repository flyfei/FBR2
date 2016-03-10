import React from 'react'
import { Input } from 'antd'

class EditText extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      error: false
    }
    this.handleOnChange = this.handleOnChange.bind(this)
  }
  render () {
    return (
      <div>
        <Input type='text'
          style={this.getStyle()}
          addonBefore={this.props.title + this.props.help}
          value={this.state.value}
          onChange={this.handleOnChange}
        />
      </div>
    )
  }
  handleOnChange (event) {
    let newValue = event.target.value
    if (this.props.maxlength > 0) {
      if (newValue.length > this.props.maxlength) {
        alert(this.props.help, function () {
        })
      } else {
        this.setState({
          value: newValue,
          error: false
        })
      }
      return
    }
    this.setState({
      value: newValue
    })
  }
  getStyle () {
    if (this.state.error) {
      return {color: 'red'}
    } else {
      return {}
    }
  }
}

EditText.propTypes = {
  maxlength: React.PropTypes.number,
  help: React.PropTypes.string,
  title: React.PropTypes.string
}
EditText.defaultProps = {
  title: '',
  maxlength: 10,
  help: '（最大字数10）'
}

export default EditText
