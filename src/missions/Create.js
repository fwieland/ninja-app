import React, {Component} from 'react';
import Todos from '../Todos';
import AddTodo from '../AddTodo';



class Create extends Component {

    constructor(){
    super()
    this.state ={
      showMissions:false,
      missionTodos: [
        {id: 1, content: '(Example task)'},        
      ]
    }
  }
  addTodo = (todo) =>{
  todo.id = Math.random();
  let todos = [...this.state.missionTodos, todo];
  this.setState({
    missionTodos: todos
  })
}
  deleteTodo =  (id) =>{
    let newTodos = this.state.missionTodos.filter(todo =>{
      return todo.id !== id
    });
       this.setState({
      missionTodos: newTodos
    })
  }
  render() {
    return (

        <div className="mission">
          <div id='mission'></div>
          <h3>Mission To Do List</h3>
          <p>Add tasks below according to your mission</p>          
          <AddTodo addTodo={this.addTodo} />          

          <label>( touch item to delete )</label>
          <Todos todos={this.state.missionTodos} deleteTodo={this.deleteTodo} />
          <div className="addspace"></div>
        </div>

    )
  }
}
export default Create;