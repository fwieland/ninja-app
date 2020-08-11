import React, {Component} from 'react';
import Todos from '../Todos';
import AddTodo from '../AddTodo';



class Killfox extends Component {

    constructor(){
    super()
    this.state ={
      showMissions:false,
      missionTodos: [
        {id: 1, content: 'Necessary gear: Katana(sword), Kusari katabira(chain armor), Yumi(bow).'},
        {id: 2, content: 'At dusk meet with kawakami at the tea house on mt. haku.'},
        {id: 3, content: 'KawakamiKawakami will train you too make sure your bow skills are up to par.'},
        {id: 4, content: 'If you pass he will take you to the south field near Korean palace.'},
        {id: 5, content: 'from their you will need to sneak through the field of patrolling units.'},
        {id: 6, content: 'find your way through the workers without getting spotted.'},
        {id: 7, content: 'work your way up into the balcony in the grand hall. '},
        {id: 8, content: 'wait patentietly for the general to show up then Take your shot at him.'},
        {id: 9, content: 'The general has been hit! and immediatly your fellow ninja sets off a large explosion in a wagon outside the hall. you take advantage of the moment to escape the balcony. '}, 
        {id: 10, content: 'The palace is alive like a hornets nest! You must fight your way through many guards. But hurry! The more time you take to fight, the more organized the mongolians will be...'},
        {id: 11, content: 'YOu have been surrounded by more soldiers than you can fight. Quick thinking, you pull smoke bomb and strike it on the floor and make your escape'},
        {id: 12, content: 'make your way into the forest to the red barn, you will find a black Kisouma horse waiting for you'}              
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
          <h2 className="center">To Kill A Fox</h2>
          <h4>Kublah Khan's top general, Liu Fuxiang  will be going to a ball at the palace of korea 3 days from now; from the balcony there you will get one chance with your Yumi bow to take out this Mongolian general and greatly change the fate of Japan. You might not survive. </h4>
          <h4> The Empire of the sun is counting on you </h4>
          <h3>Mission To Do List</h3>
          <label>( touch item to delete )</label>
          <Todos todos={this.state.missionTodos} deleteTodo={this.deleteTodo} />
          <AddTodo addTodo={this.addTodo} />
        </div>

    )
  }
}
export default Killfox;