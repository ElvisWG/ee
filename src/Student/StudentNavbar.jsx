import React from 'react';
import {FaBars} from 'react-icons/fa';
function Navbar() {
  return (
    <>
      <div className='nav-bar'>
        <div className='menu-bars'>
          <FaBars/>
        </div>
        <div>
          <p className='title-cluster'>STUDENT</p>
        </div>
      </div>
    </>
  )
}
export default Navbar;
