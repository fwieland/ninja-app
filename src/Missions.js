import React from 'react';


const Missions = ({missions}) => {

    const missionList = missions.map(mission => {
      return (
        <div className="mission" key={mission.id}>
          <div>Classified Mission: {mission.classified}</div>
          <div>Description: {mission.description}</div>
        </div>
      )
    })

    render() {
    return (
      <div>
        <div className="mission-list">
          {missionList}
        </div>
        <div >
          <form className="toTitle" onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id='name' onChange={this.handleChange} />

            <label htmlFor="missions">Missions:</label>
            <select id='missions' onChange={this.handleLabelChange}>
              <option defaultValue="Red River Row">Red River</option>
              <option value="Fetch Fido Five">Fetch Fido</option>
              <option value="Destroy Dumb Demands">Destroy Dumb</option>
            </select>
            <button>Select Mission</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Missions;