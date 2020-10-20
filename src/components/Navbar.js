import React from 'react';
    
const Navbar = ({show, cart}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <h3>Smashing Stores</h3>
        <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => show()}>Cart {(cart.length)}</button>
    </nav>
  );
};

export default Navbar;