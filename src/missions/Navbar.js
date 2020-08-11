import React from 'react'
import {HashLink as Link} from 'react-router-hash-link';


  const Navbar = () => {
    return (
      <nav className="navbar">
        <div>
          <ul className="mission-buttons">
            <h2>Missions</h2>
            <Link to="/Create#mission"><button>Create A Mission</button></Link>
            <Link to="/Firebase#mission"><button>Firebase</button></Link>
            <Link to="/Killfox#mission"><button>To Kill A Fox</button></Link>
            <Link to="/RedDawn#mission"><button>Red Blood Dawn</button></Link>                                   
          </ul>
        </div>
      </nav>
    )
  }
export default Navbar