import React from 'react';
import lilninja from './media/lilninja.png';

const Ninjas  = ({ninjas, deleteNinja}) => {

    return(
      <div className="ninja-list">
        {     
        ninjas.map(ninja => {
          return ninja ? (
            <div className="ninja" key={ninja.id}>
              <img src={lilninja} alt='ninja'></img>
              <div>Name: {ninja.name} <br />
              Specialty: {ninja.specialty}</div>
              <button className='delete-ninja' onClick={() => {deleteNinja(ninja.id)}}>X</button>           
            </div>
          ) : null;
        })
        }
      </div>
    )
}

export default Ninjas;