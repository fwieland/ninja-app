import React, { Component } from 'react';
import star from './media/star.svg';
import './App.css';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './missions/Navbar';
import Create from './missions/Create';
import RedDawn from './missions/RedDawn';
import Firebase from './missions/Firebase';
import Killfox from './missions/Killfox';

class App extends Component {
  constructor(){
    super()
    this.state ={
      showNinjas:false,
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
      showNinjas:!this.state.showNinjas
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

{this.setState.showNinjas?   <h3>Ninjas</h3>      :null}
        <Ninjas ninjas={this.state.ninjas}  deleteNinja={this.deleteNinja} />

        <div>

          <Navbar />     
            <Route path='/RedDawn' component={RedDawn} />  
            <Route path='/Firebase' component={Firebase} />  
            <Route path='/Killfox' component={Killfox} /> 
            <Route path='/Create' component={Create} />
        </div>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;

        //{this.state.showMissions?         :null}

        /*
                <button onClick={()=>this.operation()}>Create Mission</button>
        <button onClick={()=>this.operation()}>Mission: Red Blood Dawn</button>
        <button onClick={()=>this.operation()}>Mission: Firebase</button>
        <button onClick={()=>this.operation()}>Mission: To Kill A Fox</button>
        */