import React from 'react'
import {HashLink as Link} from 'react-router-hash-link';


  const Navbar = () => {
    return (
      <nav className="navbar">
        <div>
          <ul className="mission-buttons">
            <h2>Missions:</h2>
            <button><Link to="/Create#mission">Create A Mission</Link></button>
            <button><Link to="/Firebase#mission">Firebase</Link></button>
            <button><Link to="/Killfox#mission">To Kill A Fox</Link></button>
            <button><Link to="/RedDawn#mission">Red Blood Dawn</Link></button>                                    
          </ul>
        </div>
      </nav>
    )
  }
export default Navbar