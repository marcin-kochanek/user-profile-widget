import React from 'react';

const UserInfo = (props) => (
  <section className='user-info'>
    <ul className='user-info__media-list'>
      <li className='user-info__media-list-item'>
        <h3 className='user-info__number'>{props.user.socialMedia.likes}</h3>
        <span className='user-info__social-media'>likes</span>
      </li>
      <li className='user-info__media-list-item'>
        <h3 className='user-info__number'>{props.user.socialMedia.following}</h3>
        <span className='user-info__social-media'>following</span>
      </li>
      <li className='user-info__media-list-item'>
        <h3 className='user-info__number'>{props.user.socialMedia.followers}</h3>
        <span className='user-info__social-media'>followers</span>
      </li>
    </ul>
    <button className='btn' onClick={props.handleAddFollower}>
      {props.user.socialMedia.isFollowed ? 'unfollow' : 'follow'}
    </button>
  </section>
);

export default UserInfo;