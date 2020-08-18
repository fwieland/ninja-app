import React, {Component} from 'react';
import Todos from '../Todos';
import AddTodo from '../AddTodo';



class Firebase extends Component {

    constructor(){
    super()
    this.state ={
      showMissions:false,
      missionTodos: [
        {id: 1, content: 'necessary gear: Shinobi Shozoku(Ninja Suit), takagi (climbing hooks), shuriken (ninja stars)'},
        {id: 2, content: 'at midnight meet with Jinichi at the yellow shrine. He will take you past the initial guards'},
        {id: 3, content: 'climb up vertical wall using your takagi climbing hooks and enter the large warehouse'},
        {id: 4, content: 'sneak past the patrols in the warehouse and make it to the dock'},
        {id:5, content:'find the large ship with a small red target painted on the hind quarter'},
        {id:6, content:'climb aboard and go to bottom and set the cargo on fire'},
        {id:7, content:'escape the dock area quickly and meet jinichi at the rendezvous'},
        {id:8, content:'The ship is in flames! Now the village is alive with soldiers! Make your way out over the rooftops'},
        {id:9, content:'three guards stand between you and Jinichi escaping the city, use your shuriken ninja stars to impail them! '},
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
          <h2 className="center">Firebase</h2>
          <p> Our Informat has let us know of a great weapons stash loaded on a ship in the harbor of Harido. It is your job to destroy the cache of weapons by any means necessary. This will weaken the mongolian army that is against us. </p>
          <p> The General of the Empires majesty has entrusted you with this mission. </p>
          <h3>Mission To Do List</h3>
          <label>( touch finished items )</label>
          <Todos todos={this.state.missionTodos} deleteTodo={this.deleteTodo} />
          <AddTodo addTodo={this.addTodo} />
        </div>

    )
  }
}
export default Firebase;