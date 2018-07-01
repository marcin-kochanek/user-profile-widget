import React from 'react';

const UserInfo = (props) => (
  <section>
    <div>
      <h3>{props.user.socialMedia.likes}</h3>
      <span>Likes</span>
    </div>
    <div>
      <h3>{props.user.socialMedia.following}</h3>
      <span>Following</span>
    </div>
    <div>
      <h3>{props.user.socialMedia.followers}</h3>
      <span>Followers</span>
    </div>
    <button onClick={props.handleAddFollower}>{props.user.socialMedia.isFollowed ? 'Unfollow' : 'Follow'}</button>
  </section>
);

export default UserInfo;