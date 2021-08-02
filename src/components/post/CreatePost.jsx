import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createPost } from '../../store/actions/postActions';

class CreatePost extends Component {
  state = {
    title: '',
    content: '',
  }
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    // console.log(e);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createPost(this.state);
    // console.log(this.state);
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) {
      return (
        <Redirect to='/signin' />
      );
    }
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
            <textarea name="content" id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0" type="submit">Create</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);