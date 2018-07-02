import React from 'react';
import moment from 'moment';

import data from '../../public/data/data.json';

import UserHeader from './UserHeader';
import UserInfo from './UserInfo';
import Comments from './Comments';

export default class UserProfileApp extends React.Component {
  state = data;
  // componentDidMount() {
  //   const path = require('path');

  //   fetch(path.join('/data/data.json'))
  //     .then(resp => {
  //       this.setState( resp );
  //     });
  // };
  handleGiveLike = () => {
    this.setState(prevState => {
      const newState = Object.assign({}, prevState);
      const user = newState.user.socialMedia;

      user.isLiked ? user.likes-- : user.likes++;
      user.isLiked = !user.isLiked;
      return newState;
    });
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
  handleAddComment = (comment) => {
    if (comment) {
      this.setState(prevState => ({
        comments: prevState.comments.concat({
          author: this.state.user.name,
          date: moment().local().format('YYYY-MM-DD HH:mm:ss'),
          commentText: comment
        })
      }));
    }  
  };
  render() {
    return (
      <div className='user-profile'>
        <header>
          <UserHeader user={this.state.user} handleGiveLike={this.handleGiveLike}/>
          <UserInfo user={this.state.user} handleAddFollower={this.handleAddFollower} />
        </header>
        <div>
          <Comments comments={this.state.comments} handleAddComment={this.handleAddComment}/>
        </div>
      </div>
    );
  }
} 