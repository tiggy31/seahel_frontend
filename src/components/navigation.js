import React from 'react'
import {NavLink} from 'react-router-dom'
 const Navigation = () => {
    return (
        <nav>
            <div className="container">
               <div className="nav-columns">
                   <div className="nav-column">
                     <div className="nav-label">Menu </div>
                        <ul className = "nav-links">
                            <li>
                                <NavLink to="/artists" exact>
                                  Artists
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard" exact>
                                  Dashboard
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/exhibition" exact>
                                  Exhibition
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/virtual-tour" exact>
                                   Virtual Tour
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/about" exact>
                                  About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/login" exact>
                                  Login
                                </NavLink>
                            </li>


                            <li>
                                <NavLink to="/signup" exact>
                                  Signup
                                </NavLink>
                            </li>

                         </ul>
                         <div className= "nav-column">
                           <div className= "nav-label"> 
                                <div className= "nav-infos">  
                                   <ul className='nav-info'>
                                       {/* <li className= 'nav-info-label'>Email </li> */}
                                       {/* <li> 
                                       <NavLink to="/login" exact>
                                           login
                                       </NavLink>

                                       </li> */}
                                       {/* <li> 
                                       <NavLink to="/home" exact>
                                           home
                                       </NavLink>

                                       </li> */}
                                   </ul>
                                   <ul className='nav-info'>
               
               
              </ul>
              <ul className='nav-info'>
                {/* <li className='nav-info-label'>Legal</li> */}
                {/* <li>Privacy & Cookies</li> */}
              </ul>
               </div>
            </div>
           </div>
         </div>
      </div>
      </div>
    </nav>
  );
};

export default Navigation