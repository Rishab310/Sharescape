import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    // console.log(e);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.signIn(this.state);
  }
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) {
      return (
        <Redirect to='/' />
      );
    }
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit} autoComplete="off">
          <h5 className="grey-text text-darker" style={{paddingBottom:"10px"}}>Sign In</h5>
          <div className="input-field" style={{display:"none"}}>
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" onChange={this.handleChange} />
          </div>
          <div className="input-field" style={{ display: "none" }}>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0" type="submit">Login</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);