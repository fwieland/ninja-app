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
        {id: 1, content: 'sneak past guards'},
        {id: 2, content: 'go to bottom of ship, pull drain plugs'},
        {id: 3, content: 'knock out guard'},
        {id: 4, content: '(create more mission todos...)'},

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
          <h1>Shinobi</h1>
          <h1>Ninja</h1>
        </header>
        
        <AddNinja addingNinja={this.addingNinja} />

        <button onClick={()=>this.operation()}>Mission: Red Blood Dawn</button>

        <Ninjas ninjas={this.state.ninjas}  deleteNinja={this.deleteNinja} />

        {this.state.showMissions?
        <div className="mission">
          <h2 className="center">Red Blood Dawn</h2>
          <h4>Princess Takara has been captured by the invading Mongolians! She is held up in the fortress of Hirado.  You must be silent as the night to sneek past troops in a heavily guarded building. </h4>
          <h4> The Emperor Is Expecting Nothing Less Than The Full Recovery of His Daughter </h4>
          <h3>Mission To Do List</h3>
          <Todos todos={this.state.missionTodos} deleteTodo={this.deleteTodo} />
          <AddTodo addTodo={this.addTodo} />
        </div>
        :null}

      </div>
    );
  }
}
export default App;
