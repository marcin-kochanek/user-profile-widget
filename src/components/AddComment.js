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
      <div className='add-comment'>
        <form onSubmit={this.handleAddComment}>
          <input className='add-comment__input' type='text' name='comment' placeholder='Add a comment' />
        </form>
      </div>
    );
  }
}