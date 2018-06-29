import React from 'react';
import Icon from './Icon';

const UserHeader = (props) => (
  <div>
    <div>
      <img src={require('../images/HarveySpecter.jpg')} width="100"/>
    </div>
    <div>
      <h2>{props.user.name}</h2>
      <Icon handleGiveLike={props.handleGiveLike} name="icon-heart" />
      <h4>{`${props.user.city}, ${props.user.country}`}</h4>
    </div>
  </div>
);

export default UserHeader;