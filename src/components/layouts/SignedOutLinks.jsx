import React from 'react';
import { NavLink } from 'react-router-dom';
const SignedOutLinks = () => {
  return (
    // <ul className="right hide-on-med-and-down">
    <ul className="right">
      <li><NavLink to="/signin">Signup</NavLink></li>
      <li><NavLink to="/signup">Login</NavLink></li>
    </ul>
  );
}

export default SignedOutLinks;