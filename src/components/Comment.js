import React from 'react';
import moment from 'moment';

moment.updateLocale('en', {
  relativeTime : {
    future: 'in %s',
    past:   '%s ago',
    s  : '1m',
    ss : '1m',
    m:  '1m',
    mm: '%dm',
    h:  '1h',
    hh: '%dh',
    d:  '1d',
    dd: '%dd',
    M:  '1mo',
    MM: '%dmo',
    y:  '1y',
    yy: '%dy'
  }
});

const Comment = (props) => (
  <div className='user-comment'>
    <div className='user-comment__header'>
      <img className='user-comment__photo' src={require('../images/HarveySpecter.png')}/>
      <h3 className='user-comment__name'>{props.author}</h3>
      <span className='user-comment__date'>{moment(props.date).fromNow(true)}</span>
    </div>
    <p className='user-comment__text'>{props.commentText}</p>
  </div>
);

export default Comment;