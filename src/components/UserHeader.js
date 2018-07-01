import React from 'react';
import Icon from './Icon';

const UserHeader = (props) => (
  <div>
    <section>
      <div>
        <img src={require('../images/HarveySpecter.jpg')} width="100"/>
      </div>
      <div>
        <div>
          <h2>{props.user.name}</h2>
          <Icon handleGiveLike={props.handleGiveLike} name={props.user.socialMedia.iconName} />
        </div>
        <h4>{`${props.user.city}, ${props.user.country}`}</h4>
      </div>
    </section>
    <div>
      <Icon handleGiveLike={props.handleGiveLike} name='icon-share' />
    </div>
  </div>
);

export default UserHeader;