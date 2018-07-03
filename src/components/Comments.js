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
      <main>
        <HideComments
          handleHideComments={this.handleHideComments}
          numberOfComments={this.props.comments.length}
          isCommentsTableShown={this.state.isCommentsTableShown}
        />
        <div className='comments-wrapper'>
          <div className='comments-box'>
            { this.state.isCommentsTableShown && this.props.comments.map((comment, index) => (
                <Comment
                  key={index} 
                  author={comment.author}
                  authorPhoto={comment.authorPhoto}
                  date={comment.date}
                  commentText={comment.commentText}
                />
              ))
            }
          </div>
        </div>
        <AddComment 
          comments={this.props.comments}
          handleAddComment={this.props.handleAddComment}
        />
      </main>
    );
  }
}