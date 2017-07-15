import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Input from './components/Input'
import ListView from './components/ListView'
import { getData, updateData } from './store'
import * as api from './api';

class App extends Component {
  constructor() {
    super()

    this.state = {
      list: getData()
    }
  }

  componentDidMount() {
    api.getMovies().then(movies => {
      this.setState({
        list: movies.entries
      })
    })
  }
  

  handleSubmit = text => {
    const newList = this.state.list

    newList.push(text)

    updateData(newList);

    this.setState({
      list: newList
    })
  }

  handleRemove = todo => {
    console.log(todo)

    const currentList = this.state.list

    const newList = currentList.filter(currentTodo => {
      return currentTodo !== todo
    })

    updateData(newList);

    this.setState({
      list: newList
    })
  }

  handleEdit = todo => {
    const newTodo = prompt("Please type", todo);
    console.log(newTodo);

    const newList = this.state.list.map(currentTodo => {
      if (currentTodo === todo) {
        return newTodo;
      }

      return currentTodo;
    })

    updateData(newList);

    this.setState({
      list: newList
    })
  }

  render() {
    return (
      <div className="App">
        <Input onSubmit={this.handleSubmit} />
        <ListView
          data={this.state.list}
          onRemove={this.handleRemove}
          onEdit={this.handleEdit}
        />
      </div>
    )
  }
}

export default App
