import React from 'react';

const Comment = (props) => (
  <div>
    <div>
      <div>
        <img src={require('../images/HarveySpecter.jpg')} width="50"/>
      </div>
      <h3>{props.author}</h3>
      <span>{props.date}</span>
    </div>
    <p>{props.commentText}</p>
  </div>
);

export default Comment;