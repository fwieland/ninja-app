import React, {Component} from 'react';
import star from './star.svg';
import './App.css';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
import{BrowserRouter} from 'react-router-dom';
import Create from './missions/Create';
import RedDawn from './missions/RedDawn';
import Firebase from './missions/Firebase';
import Killfox from './missions/Killfox';


class App extends Component {
  constructor(){
    super()
    this.state ={
      showMissions:false,
      ninjas: [
      ],
      missionTodos: [
      ],
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
      <BrowserRouter>
      <div className="App">

        <header className="App-header">
          <img src={star} className="App-logo" alt="logo" />
          <h1>Shinobi</h1>
          <h1>Ninja</h1>
        </header>
        
        <AddNinja addingNinja={this.addingNinja} />

        <button onClick={()=>this.operation()}>Create Mission</button>
        <button onClick={()=>this.operation()}>Mission: Red Blood Dawn</button>
        <button onClick={()=>this.operation()}>Mission: Firebase</button>
        <button onClick={()=>this.operation()}>Mission: To Kill A Fox</button>
        <Ninjas ninjas={this.state.ninjas}  deleteNinja={this.deleteNinja} />

        {this.state.showMissions? <Create />       :null}
        {this.state.showMissions? <RedDawn />       :null}
        {this.state.showMissions? <Firebase />       :null}
        {this.state.showMissions? <Killfox />       :null}

      </div>
      </BrowserRouter>
    );
  }
}
export default App;

