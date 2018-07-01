import React from 'react';

export default class AddComment extends React.Component {
  handleAddComment = (e) => {
    e.preventDefault();

    const comment = e.target.elements.comment.value.trim();
    this.props.handleAddComment(comment);
   
    e.target.elements.comment.value = '';
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddComment}>
          <input type='text' name='comment' placeholder='Add a comment' />
        </form>
      </div>
    );
  }
}