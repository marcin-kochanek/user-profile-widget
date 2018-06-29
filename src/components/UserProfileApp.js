import React from 'react';
import UserHeader from './UserHeader';
import UserInfo from './UserInfo';

export default class UserProfileApp extends React.Component {
  state = {
    user: {
      name: 'Harvey Spencer',
      city: 'New York',
      country: 'USA',
      likes: 121,
      following: 723,
      followers: 4431,
      isFollowed: false,
      isLiked: false
    },
    comments: []
  };
  handleGiveLike = () => {
    this.setState(prevState => {
      const newState = Object.assign({}, prevState);
      const user = newState.user;

      user.isLiked ? user.likes-- : user.likes++;
      user.isLiked = !user.isLiked;
      return newState;
  })
};
  handleAddFollower = () => {
    this.setState(prevState => {
      const newState = Object.assign({}, prevState);
      const user = newState.user;

      user.isFollowed ? user.followers-- : user.followers++;
      user.isFollowed = !user.isFollowed;
      return newState;
    }); 
  };
  render() {
    return (
      <div>
        <UserHeader handleGiveLike={this.handleGiveLike} user={this.state.user}/>
        <UserInfo user={this.state.user} handleAddFollower={this.handleAddFollower}/>
      </div>
    )
  }
};