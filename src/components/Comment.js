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
  <div>
    <div>
      <div>
        <img src={require('../images/HarveySpecter.png')}/>
      </div>
      <h3>{props.author}</h3>
      <span>{moment(props.date).fromNow(true)}</span>
    </div>
    <p>{props.commentText}</p>
  </div>
);

export default Comment;