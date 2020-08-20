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
          <p>This game takes place in Japan 1274 a.d. when Mongolians invaded Japan</p>
          <p>Your home and surrounding property is Japan</p>
          <p>Use your imagination to fulfill all assignments of every mission</p>
          <p>Game is designed for boys ages 6-12 </p>

          <h4>Rules</h4>
          <ul>
            <p>#1 Ninjas must not be heard (ninjas are silent)</p>
            <p>#2 Ninjas must not be seen (ninjas are masters of hiding)</p>
            <p>#3 Use your imagination to complete all tasks</p>
            <p>#4 Must be careful not to cause real damage to items or people</p>
            <p>#5 Do not include people who are not playing the game to complete tasks</p>
          </ul>
        </div>

      </div>
    )
  }
}
export default GameInfo