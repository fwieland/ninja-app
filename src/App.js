import React, {Component} from 'react';
import star from './star.svg';
import './App.css';
import Ninjas from './Ninjas';
import Todos from './Todos';
import AddNinja from './AddNinja';
import AddTodo from './AddTodo';


class App extends Component {
  constructor(){
    super()
    this.state ={
      showMissions:false,
      ninjas: [
      ],
      missionTodos: [
        {id:309, content: 'sneak past guards'},
        {id:314, content: 'go to bottom of ship, pull drain plugs'},
      ]
    }
  };

  addingNinja = (ninja) =>{
    ninja.id = Math.random();
    let newNinjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: newNinjas
    })
  }
  deleteNinja = (id) =>{
    let newNinjas = this.state.ninjas.filter(ninja =>{
      return ninja.id !== id
    });
    this.setState({
      ninjas: newNinjas
    })
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
  operation(){
    this.setState({
      showMissions:!this.state.showMissions
    })
  }

  componentDidMount(){
    console.log("component mounted")
  }
  componentDidUpdate(){
    console.log('component updated')
  }
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={star} className="App-logo" alt="logo" />
          <h1>Shinobi Ninja</h1>
          <img src={star} className="App-logo" alt="logo" />
        </header>
        
        <AddNinja addingNinja={this.addingNinja} />

        <button onClick={()=>this.operation()}>Red Blood Dawn</button>

        <Ninjas ninjas={this.state.ninjas}  deleteNinja={this.deleteNinja} />

        {
        this.state.showMissions?
        <div>
          <h2 className="center">Current Mission: </h2>
          <h6>Description: Rescue Princess Takara from mongols</h6>
          <Todos todos={this.state.missionTodos} deleteTodo={this.deleteTodo} />
          <AddTodo addTodo={this.addTodo} />
        </div>
        :null

        }

      </div>
    );
  }
}
        //<Missions missions={this.state.missions} />
export default App;
