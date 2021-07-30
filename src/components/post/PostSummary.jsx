import React from 'react';

const PostSummary = ({post}) => {
  return (
    // <div className="card z-depth-0 project-summary">
    <div className="card project-summary">
      <div className="card-content grey-text text-darken-4">
        <span className="card-title">{post.title}</span>
        <p>Posted by Rishab</p>
        <p className="grey-text">9th July, 2021</p>
      </div>
    </div>
  );
}

export default PostSummary;