import React from 'react';

import HideComments from './HideComments';
import Comment from './Comment';
import AddComment from './AddComment';

export default class Comments extends React.Component {
  state = {
    isCommentsTableShown: true
  };
  handleHideComments = () => {  
    this.setState(prevState => ({
      isCommentsTableShown: !prevState.isCommentsTableShown,
    }));
  };
  render() {
    return (
      <div>
        <HideComments
          handleHideComments={this.handleHideComments}
          numberOfComments={this.props.comments.length}
          isCommentsTableShown={this.state.isCommentsTableShown}
        />
        { this.state.isCommentsTableShown && this.props.comments.map((comment, index) => (
            <Comment
              key={index} 
              author={comment.author}
              date={comment.date}
              commentText={comment.commentText}
            />
          ))
        }
        <AddComment 
          comments={this.props.comments}
          handleAddComment={this.props.handleAddComment}
        />
      </div>
    );
  }
}