import React, {Component} from 'react';
import Todos from '../Todos';
import AddTodo from '../AddTodo';



class Killfox extends Component {

    constructor(){
    super()
    this.state ={
      showMissions:false,
      missionTodos: [
        {id: 1, content: 'Necessary gear: Yumi(bow)'},
        {id: 2, content: 'meet with sensei kawakami at the tea house on mt. haku'},
        {id: 3, content: 'Sensei Kawakami will now train you in the art of the falcon piercing talon shot'},
        {id: 4, content: 'you have passed the test. Senpai hiro will now take you to the field near Korean palace'},
        {id: 5, content: ' sneak through the field of patrolling soldiers'},
        {id: 6, content: 'find your way through the crowd without getting spotted'},
        {id: 7, content: 'work your way up into the balcony in the grand hall '},
        {id: 8, content: 'wait patentietly for the general to show up.. then Take your shot'},
        {id: 9, content: 'The general has been hit! and immediatly a fellow ninja sets off a large explosion in a wagon outside the hall! you take advantage of the moment to escape the balcony '}, 
        {id: 10, content: 'The palace is alive like a hornets nest! You must fight your way through many guards.. But hurry! The more time you take to fight, the more organized the mongolians will be'},
        {id: 11, content: 'You have been surrounded by more soldiers than you can fight! Quick thinking, you pull smoke bomb and strike it on the floor and make your escape!'},
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
          <p>Kublah Khan's top general, Liu Fuxiang is expected to be at the palace of korea 3 days from now. You have made the grade of top archer, you will get one chance with your Yumi bow to take out this Mongolian general and change the fate of Japan You might not return alive </p>
          <p> The Empire of the sun is counting on you </p>
          <h3>Mission To Do List</h3>
          <label>( touch item to delete )</label>
          <Todos todos={this.state.missionTodos} deleteTodo={this.deleteTodo} />
          <AddTodo addTodo={this.addTodo} />
          <div className="minspace"></div>          
        </div>

    )
  }
}
export default Killfox;