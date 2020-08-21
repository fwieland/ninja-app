import React, { Component } from 'react'

class AddTodo extends Component {
  state ={
    content: ''

  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: '',
    })
  }
  render() {
    return (
      <div>
        <form className="taskform" onSubmit={this.handleSubmit}>
          <textarea className="largeTextArea" type="text" rows='3' onChange={this.handleChange} value={this.state.content}></textarea>
          <button>Add New Task</button>
        </form>
      </div>
    )
  }
}
export default AddTodo
