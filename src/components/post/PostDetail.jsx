import React from 'react';

const PostDetail = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section post-deatails">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title - {id} </span>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia vitae excepturi ea dolores minima laudantium esse totam magni rem molestiae.</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div className="">Posted by Rishab</div>
          <div>7th July, 2021</div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;