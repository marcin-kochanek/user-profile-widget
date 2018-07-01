import React from 'react';
import HideComments from './HideComments';
import Comment from './Comment';

export default class Comments extends React.Component {
  state = {
    isCommentsTableShown: true,
    numberOfComments: this.props.comments.length 
  };
  handleHideComments = () => {  
    this.setState(prevState => ({
      isCommentsTableShown: !prevState.isCommentsTableShown,
    }));
  };
  render() {
    return (
      <div>
        <HideComments handleHideComments={this.handleHideComments} numberOfComments={this.state.numberOfComments} isCommentsTableShown={this.state.isCommentsTableShown}/>
        { this.state.isCommentsTableShown && this.props.comments.map((comment, index) => (
            <Comment
              key={index} 
              author={comment.author}
              date={comment.date}
              commentText={comment.commentText}
            />
          ))
        }
      </div>
    );
  }
}