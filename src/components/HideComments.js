import React from 'react';

const HideComments = (props) => (
  <div className='btn-wrapper'>
    <button 
      className='btn btn--link' 
      onClick={(e) => {
        const commentsWrapper = e.target.parentElement.nextSibling;

        props.handleHideComments();
        commentsWrapper.classList.toggle('comments-no-wrapper');
      }}
    >
      {`${props.isCommentsTableShown ? 'hide comments' : 'show comments'} (${props.numberOfComments})`}
    </button>
  </div>
);

export default HideComments;