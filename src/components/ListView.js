import React, { Component } from 'react'
import './listview.css'

class ListView extends Component {
  render() {
    const { data, onRemove, onEdit } = this.props
    console.log(data);
    return (
      <div className="list-view-container">
        {data.map(todo => {
          console.log(todo);
          return (
            <div className="list-item">
              {todo.title}

               <img src={todo.thumbnails['default-236x418'].url} alt=""/> 
              <div className="description">{todo.description}</div>
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
