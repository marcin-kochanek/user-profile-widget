import React from 'react';

const HideComments = (props) => (
  <div>
    <button onClick={props.handleHideComments}>
      {`${props.isCommentsTableShown ? 'hide comments' : 'show comments'} (${props.numberOfComments})`}
      {}
    </button>
  </div>
);

export default HideComments;