import React, { Component } from 'react';

class CreatePost extends Component {
  state = {
    title: '',
    content: '',
  }
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    console.log(e);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darker">Create Post</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Post Content</label>
            <textarea name="content" id="content" cols="30" rows="10" className="materialize-textarea"></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0" type="submit">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePost;