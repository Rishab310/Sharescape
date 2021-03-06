import React from 'react';
import moment from 'moment';
const PostSummary = ({post}) => {
  return (
    // <div className="card z-depth-0 project-summary">
    <div className="card project-summary">
      <div className="card-content grey-text text-darken-4">
        <span className="card-title">{post.title}</span>
        <p>Posted by {post.authorFirstName} {post.authorLastName}</p>
        <p className="grey-text">{moment(post.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  );
}

export default PostSummary;