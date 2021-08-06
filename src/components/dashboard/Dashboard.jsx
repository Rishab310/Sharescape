import React, { Component } from 'react';
import Notifications from './Notification';
import PostList from '../post/PostList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { posts, auth, notifications } = this.props;
    if (!auth.uid) {
      return (
        <Redirect to='/signin' />
      );
    }
    return (
      <>
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m7">
              <PostList posts={posts}/>
            </div>
            <div className="col s12 m4 offset-m1">
              <Notifications notifications={notifications}/>
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
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts', orderBy: ['createdAt', 'desc']},
    { collection: 'notifications', orderBy : ['time', 'desc']}
  ])
)(Dashboard);