import React from 'react'

import ModuleButton from './module_button'

var DraggableQuestions = React.createClass({
  render: function () {
    return (
      <ul className='modules list-unstyled'>
        <li><ModuleButton text='Essay' questionType='essay'/></li>
      </ul>
    )
  },

  shouldComponentUpdate: function () {
    return false
  }
})

export default DraggableQuestions
