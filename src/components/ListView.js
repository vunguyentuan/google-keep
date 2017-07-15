import React, { Component } from 'react'
import './listview.css'

class ListView extends Component {
  render() {
    const { data, onRemove, onEdit } = this.props
    return (
      <div className="list-view-container">
        {data.map(todo => {
          return (
            <div className="list-item">
              {todo}

              <button onClick={() => onEdit(todo)}>Edit</button>
              <button onClick={() => onRemove(todo)}>Delete</button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ListView
