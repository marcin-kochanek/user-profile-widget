import React from 'react';
import moment from 'moment';

import data from '../../public/data/data.json';

import UserHeader from './UserHeader';
import UserInfo from './UserInfo';
import Comments from './Comments';

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
    if (comment) {
      this.setState(prevState => ({
        comments: prevState.comments.concat({
          author: this.state.user.name,
          authorPhoto: 'x',
          date: moment().local().format('YYYY-MM-DD HH:mm:ss'),
          commentText: comment
        })
      }));
    }  
  };
  componentDidMount() {
    console.log(data);
    fetch("http://127.0.0.1:8080/data/data.json")
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp);
        this.setState(() => (
          resp
        ));
      });
    console.log(this.state);
  };
  render() {
    return (
      <div>
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