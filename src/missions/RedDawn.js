import React, {Component} from 'react';
import Todos from '../Todos';
import AddTodo from '../AddTodo';



class RedDawn extends Component {

    constructor(){
    super()
    this.state ={
      showMissions:false,
      missionTodos: [
        {id: 1, content: 'Necessary gear: torinoko(firecrackers), tetsubishi(spikes), kesarigame(sickle with chain).'},
        {id: 2, content: 'there will be no escort, find your way into the city.'},
        {id: 3, content: 'find the fortress of Hirado.'},
        {id: 4, content: 'sneak over back wall of fortress.'},
        {id: 5, content: 'find the princess, free her, and lead her to the rendezvous'},
        {id: 6, content: 'You have been spotted! Throw your tetsubishi spikes on the floor to slow down the guards.'},
        {id: 7, content: 'In the next room you spot a group of soldiers you cannot pass: use your torinoko firecrackers to disorient them.'},
        {id: 8, content: 'You have almost made it, but one guard remains in the way to the rendezvous. Use your Kusargame(sickle) to eliminate him.'},
        {id: 9, content: 'Run quickly to the river that runs through the palace, a wasen boat will be waiting for the princess.'},               
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
          <h2 className="center">Red Blood Dawn</h2>
          <h4>Princess Takara has been captured by the invading Mongolians! She is held up in the fortress of Hirado.  You must be silent as the night to sneek past troops in a heavily guarded building. </h4>
          <h4> The Emperor Is Expecting Nothing Less Than The Full Recovery of His Daughter </h4>
          <h3>Mission To Do List</h3>
          <label>( touch item to delete )</label>
          <Todos todos={this.state.missionTodos} deleteTodo={this.deleteTodo} />
          <AddTodo addTodo={this.addTodo} />
        </div>

    )
  }
}
export default RedDawn;