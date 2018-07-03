import React from 'react';
import moment from 'moment';

import data from '../../public/data/data.json';

import UserHeader from './UserHeader';
import UserInfo from './UserInfo';
import Comments from './Comments';
import AddComment from './AddComment';

export default class UserProfileApp extends React.Component {
  state = data;
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
    // the trick: the browser treats the bottom like its the top (with the sorting function)
    if (comment) {
      this.setState(prevState => ({
        comments: prevState.comments.concat({
          author: this.state.user.name,
          date: moment().local().format('YYYY-MM-DD HH:mm:ss'),
          commentText: comment
        }).sort((firstComment, secondComment) => {
          return (firstComment.date < secondComment.date ? 1 : -1); //reverse sorting with 
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
        <Comments comments={this.state.comments} handleAddComment={this.handleAddComment}/>
        <AddComment 
          comments={this.state.comments}
          handleAddComment={this.handleAddComment}
        />
      </div>
    );
  }
} 