import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const PostDetail = (props) => {
  const id = props.match.params.id;
  console.log(props);
  const { post } = props;
  if (post) {
    return (
      <div className="container section post-deatails">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{post.title} </span>
            <p>{post.content}</p>
          </div>
          <div className="card-action gret lighten-4 grey-text">
            <div className="">Posted by {post.authorFirstName} {post.authorLastName}</div>
            <div>7th July, 2021</div>
          </div>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="container center">
        <p>Loading project ...</p>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.post;
  const post = posts ? posts[id] : null;
  return {
    post: post
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'post' }
  ])
)(PostDetail);