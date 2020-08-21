import React, { Component } from 'react'

class GameInfo extends Component {

  state = {
    isInfoShowing: false,
  }


  render() {
    console.log(this.state.isInfoShowing)
    return (
      <div>
        <button onClick={ () => this.setState({isInfoShowing: !this.state.isInfoShowing})}>GameInfo</button>
        <div className={this.state.isInfoShowing ? 'showInfo' : 'hideInfo'} >
          <h3>About Game</h3>
          <h4>Description</h4>
          <p>Yokoso, Welcome to Shinobi Ninja. This app is to designed to be an aide to playing games with big imaginations. You can use the app to create missions and details. Whether you wanted to set up a treasure hunt for your childs next birthday party, or you need something to keep your boys occupied while stuck inside on a rainy day, this app may be for you. </p>
          <p>This game is not limited to only ninja missions, could use for army games, playing house, and tea parties. If one dared to. </p>
          <p>We have included preset missions either to play out or to give inspiration.</p>
          <p>Game is designed for boys ages 6-12 </p>

          <h4>Shinobi Ninja Game Rules</h4>
          <p>The missions take place in Japan 1274 a.d. when the Mongolians invaded Japan.
          Your home and surrounding property is now the island of Japan.</p>  
          <p>Use as many Ninjas(players) as desired for the mission. Ninjas work together to complete all tasks and the mission. Ninjas use there imagination and act out all assigned tasks. 
          Ninjas can role play as different characters or use imaginary characters in game. Use various areas of the home to complete the mission, sneak around to get from one place to the next. Attack in silence. </p>
          <h4>Ninja Rules</h4>
          <p>#1 Ninjas must not be heard by non-ninjas (ninjas are very silent)</p>
          <p>#2 Ninjas should not be seen by non-ninjas (ninjas are masters of hiding)</p>
          <p>#3 Be careful do not to cause real damage to items or people</p>
          <p>#4 Do not include people who are not playing the game to complete tasks</p>
        </div>

      </div>
    )
  }
}
export default GameInfo