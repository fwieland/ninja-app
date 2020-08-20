import React, { Component } from 'react'
import {HashLink as Link} from 'react-router-hash-link';

class AddNinja extends Component {
  state = {
    name: '',
    specialty: '',
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.state.name.trim();
    this.props.addingNinja(this.state);
    this.setState({
      name: '',
    })
    }

  handleLabelChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value

    })
  }

  handleChange = (onClick) => {
    this.setState({
      name: onClick.target.value
    })
  }

  render() {
    return (
      <div className="toTitle">
        <form  onSubmit={this.handleSubmit}>
          <div><label htmlFor="name">Enter Ninjas Name:</label></div>
          <div><input type="text" id='name' onChange={this.handleChange} value={this.state.name} />
          </div>

          <div><label htmlFor="specialty">Ninjas Specialty:</label></div>
          <div><select id='specialty' onChange={this.handleLabelChange} value={this.state.content} >
            <option defaultValue="Unknown"></option>          
            <option value="Iron Fist Punch">Iron Fist Punch</option>
            <option value="Cobra Strike Punch">Cobra Strike Punch</option>            
            <option value="Winged Horse Kick">Winged Horse Kick</option>
            <option value="Lightning Kick">Lightning Kick</option>
            <option value="Dragons Tail Throw">Dragons Tail Throw</option>
            <option value="Tiger Teeth Throw">Tiger Teeth Throw</option>
          </select></div>
          <div><button>Add Ninja</button></div>
          <Link to="./Navbar#navbar"><button>Done</button></Link> 
        </form>
      </div>
    )
  }
}
export default AddNinja;