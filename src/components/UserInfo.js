import React from 'react';

const UserInfo = (props) => (
  <div>
    <div>
      <h3>{props.user.likes}</h3>
      <span>Likes</span>
    </div>
    <div>
      <h3>{props.user.following}</h3>
      <span>Following</span>
    </div>
    <div>
      <h3>{props.user.followers}</h3>
      <span>Followers</span>
    </div>
    <button onClick={props.handleAddFollower}>{props.user.isFollowed ? 'Unfollow' : 'Follow'}</button>
  </div>
);

export default UserInfo;