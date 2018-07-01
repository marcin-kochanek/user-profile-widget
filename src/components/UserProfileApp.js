import React from 'react';
import UserHeader from './UserHeader';
import UserInfo from './UserInfo';
import HideComments from './HideComments';
import Comments from './Comments';

export default class UserProfileApp extends React.Component {
  state = {
    user: {
      name: 'Harvey Spencer',
      city: 'New York',
      country: 'USA',
      socialMedia: {
        likes: 121,
        following: 723,
        followers: 4431,
        isFollowed: false,
        isLiked: false,
        iconName: 'icon-heart'
      }
    },
    comments: {
      commentsTable: [
        {
          author: 'Mike Ross',
          authorPhoto: 'x',
          date: '1d',
          commentText:'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.',
        },
        {
          author: 'Rachel Zein',
          authorPhoto: 'x',
          date: '1d',
          commentText:'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.',
        },
        {
          author: 'Louis Litt',
          authorPhoto: 'x',
          date: '1d',
          commentText:'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.',
        }
      ],
      isCommentsTableHidden: false
    }
  };
  handleGiveLike = () => {
    this.setState(prevState => {
      const newState = Object.assign({}, prevState);
      const user = newState.user.socialMedia;

      user.isLiked ? user.likes-- : user.likes++;
      user.isLiked ? user.iconName = 'icon-heart' : user.iconName = 'icon-heart-filled';
      user.isLiked = !user.isLiked;
      return newState;
    })
  };
  handleAddFollower = () => {
    this.setState(prevState => {
      const newState = Object.assign({}, prevState);
      const user = newState.user.socialMedia;

      user.isFollowed ? user.followers-- : user.followers++;
      user.isFollowed = !user.isFollowed;
      return newState;
    }); 
  };
  handleHideComments = () => {
    this.setState(prevState => {
      const newState = Object.assign({}, prevState);
      const comments = newState.comments;

      comments.isCommentsTableHidden = !comments.isCommentsTableHidden;
      return newState;
    });
  };
  handleShowWindow = () => {
    alert(window.location.href);
  };
  render() {
    return (
      <div>
        <header>
          <UserHeader user={this.state.user} handleGiveLike={this.handleGiveLike} />
          <UserInfo user={this.state.user} handleAddFollower={this.handleAddFollower} />
        </header>
        <div>
          <HideComments comments={this.state.comments} handleHideComments={this.handleHideComments} />
          {this.state.comments.isCommentsTableHidden === false && <Comments comments={this.state.comments.commentsTable} />}
        </div>
      </div>
    )
  }
};