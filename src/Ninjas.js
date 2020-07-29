import React from 'react';
import lilninja from './lilninja.png'

const Ninjas  = ({ninjas, deleteNinja}) => {

    return(
      <div className="ninja-list">
        {     
        ninjas.map(ninja => {
          return ninja ? (
            <div className="ninja" key={ninja.id}>
              <img src={lilninja} alt='ninja'></img>
              <div>Your Ninja Name: {ninja.name} <br />
              Specialty: {ninja.specialty}</div>
              <button onClick={() => {deleteNinja(ninja.id)}}>x</button>           
            </div>
          ) : null;
        })
        }
      </div>
    )
}

export default Ninjas;