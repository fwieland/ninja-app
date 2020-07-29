import React, { Component } from 'react'

class AddNinja extends Component {
  state = {
    name: null,
    specialty: null,
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addingNinja(this.state);
  }

  handleLabelChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value

    })
  }

  handleChange = (e) => {
    let ninjaName = '';
    let oldname = e.target.value;
    let name = oldname.toLowerCase().split('',3);

    for(let i = 0 ; i < 3; i++) {
      if (name[i] === 'a'){ 
        ninjaName +=  ('ka')
      }else if (name[i] === 'b'){
      ninjaName += ('zu')
        }else if (name[i] === 'c'){
      ninjaName += ('mi')
        }else if (name[i] === 'd'){
      ninjaName += ('te')
        }else if (name[i] === 'e'){
      ninjaName += ('ku')  
        }else if (name[i] === 'f'){
      ninjaName += ('lu')
        }else if (name[i] === 'g'){
      ninjaName += ('ji')
        }else if (name[i] === 'h'){
      ninjaName += ('ri')
        }else if (name[i] === 'i'){
      ninjaName += ('ki')
        }else if (name[i] === 'j'){
      ninjaName += ('zu')
        }else if (name[i] === 'k'){
      ninjaName += ('me')
        }else if (name[i] === 'l'){
      ninjaName += ('ta')
        }else if (name[i] === 'm'){
      ninjaName += ('rin')
        }else if (name[i] === 'n'){
      ninjaName += ('to')
        }else if (name[i] === 'o'){
      ninjaName += ('mo')
        }else if (name[i] === 'p'){
      ninjaName += ('no')
        }else if (name[i] === 'q'){
      ninjaName += ('ke')
        }else if (name[i] === 'r'){
      ninjaName += ('shi')
        }else if (name[i] === 's'){
      ninjaName += ('ari')
        }else if (name[i] === 't'){
      ninjaName += ('chi')
        }else if (name[i] === 'u'){
      ninjaName += ('do')
        }else if (name[i] === 'v'){
      ninjaName += ('ru')
        }else if (name[i] === 'w'){
      ninjaName += ('mei')
        }else if (name[i] === 'x'){
      ninjaName += ('na')
        }else if (name[i] === 'y'){
      ninjaName += ('fu')
        }else if (name[i] === 'z'){
      ninjaName += ('zi')
      }else{
        ninjaName = ("Invalid name, use at least 3 aphabet letters");
        break;
      }; 
    }
    this.setState({
      [e.target.id]: ninjaName
    })
  }


  render() {
    return (
      <div >
        <form className="toTitle" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id='name' onChange={this.handleChange} />

          <label htmlFor="specialty">Specialty:</label>
          <select id='specialty' onChange={this.handleLabelChange}>
            <option defaultValue="none"></option>
            <option value="Winged Horse Kick">Winged Horse Kick</option>
            <option value="Leaping Tiger Kick">Leaping Tiger Kick</option>
            <option value="Forked Lightning Kick">Forked Lightning Kick</option>
            <option value="Iron Fist Punch">Iron Fist Punch</option>
            <option value="Tiger's Paw Punch">Tiger's Paw Punch</option>
            <option value="Cobra Strike Punch">Cobra Strike Punch</option>
            <option value="Whirlpool Throw">Whirlpool Throw</option>
            <option value="Dragons Tail Throw">Dragons Tail Throw</option>
            <option value="Teeth Of Tiger Throw">Teeth Of Tiger Throw</option>
          </select>
          <button>Add Ninja</button>
        </form>
      </div>
    )
  }
}
export default AddNinja;