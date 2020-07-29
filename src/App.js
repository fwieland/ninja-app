import React, {Component} from 'react';
import star from './star.svg';
import './App.css';
import Ninjas from './Ninjas';
//import Missions from './Missions';
import AddNinja from './AddNinja';
//import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(){
    super()
    this.state ={
      showMissions:false,
      ninjas: [
      ],
      missions: [
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

        <button onClick={()=>this.operation()}>Show Missions</button>

        <Ninjas ninjas={this.state.ninjas}  deleteNinja={this.deleteNinja} />

        {
        this.state.showMissions?
        <div>
        Emporer Assigned Missions:

          <div>
          Hello Ninja..No missions at the moment.
          </div>
        </div>
        :null
        }

      </div>
    );
  }
}
        //<Missions missions={this.state.missions} />
export default App;
