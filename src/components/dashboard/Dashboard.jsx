import React, { Component } from 'react';
import Notifications from './Notification';
import PostList from '../post/PostList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { posts } = this.props;
    return (
      <>
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6">
              <PostList posts={posts}/>
            </div>
            <div className="col s12 m5 offset-m1">
              <Notifications />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.firestore.ordered.post
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'post' }
  ])
)(Dashboard);