import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../store/actions/authActions';
const SignedinLinks = (props) => {
  return (
    <>
      <li><NavLink to="/create">New Post</NavLink></li>
      <li><a onClick={props.signOut}>Log Out</a></li>
      <li><NavLink to="/" className="btn btn-floating pink lighten-1">{props.profile.initials}</NavLink></li>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null,mapDispatchToProps)(SignedinLinks);