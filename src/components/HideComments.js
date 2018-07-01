import React from 'react';

const HideComments = (props) => (
  <div>
    <button onClick={props.handleHideComments}>
      {props.comments.isCommentsTableHidden ? 'show comments' : 'hide comments'}
      {`(${props.comments.commentsTable.length})`}
    </button>
  </div>
);

export default HideComments;