import React from 'react';

const Navbar = (props) => {
  return (
    <nav>
      <h1>Counter</h1>
      <span className='fa-stack fa-2x has-badge cart' data-count={props.count}>
        <i className='fa fa-circle fa-stack-2x fa-inverse'></i>
        <i
          className=''
          className='fa fa-shopping-cart fa-stack-2x shopping-cart'
        ></i>
      </span>
    </nav>
  );
};

export default Navbar;
