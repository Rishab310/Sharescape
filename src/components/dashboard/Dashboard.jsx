import React, { Component } from 'react';
import Notifications from './Notification';
import PostList from '../post/PostList';

class Dashboard extends Component {
  state = {}
  render() {
    return (
      <>
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6">
              <PostList/>
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

export default Dashboard;