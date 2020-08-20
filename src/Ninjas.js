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
              <div>
                {ninja.name} <br />
                {ninja.specialty}
              </div>
              <button className='delete-ninja' onClick={() => {deleteNinja(ninja.id)}}>x</button>           
            </div>
          ) : null;
        })
        }
      </div>
    )
}

export default Ninjas;