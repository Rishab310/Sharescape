import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import M from "materialize-css/dist/js/materialize.min.js";
class Navbar extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
  }
  render() {
    const { auth } = this.props;
    const links = auth.uid ? <SignedInLinks profile={this.props.profile} /> : <SignedOutLinks />;

    return (
      <>
        <nav className="nav-wrapper grey darken-3">
          <div className="container">
            <a href="#" data-target="slide-out" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
            <Link to="/" className="brand-logo left">ShareScape</Link>
            <ul className="right hide-on-med-and-down">
              {auth.isLoaded && links}
            </ul>
          </div>
        </nav>
        <ul id="slide-out" className="sidenav grey darken-3">
          {auth.isLoaded && links}
        </ul>
        {/* <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}

      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
export default connect(mapStateToProps)(Navbar);