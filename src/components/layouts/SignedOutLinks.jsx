import React from 'react';
import { NavLink } from 'react-router-dom';
const SignedOutLinks = () => {
  return (
    // <ul className="right hide-on-med-and-down">
    <>
      <li><NavLink to="/signin">Login</NavLink></li>
      <li><NavLink to="/signup">Sign Up</NavLink></li>
    </>
  );
}

export default SignedOutLinks;