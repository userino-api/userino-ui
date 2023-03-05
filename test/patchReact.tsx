import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.createPortal = jest.fn((element, node) => {
  return <div>element</div>
})
