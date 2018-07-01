import React from 'react';
import Comment from './Comment';

const Comments = (props) => (
  <div>
    {
      props.comments.map((comment, index) => (
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

export default Comments;