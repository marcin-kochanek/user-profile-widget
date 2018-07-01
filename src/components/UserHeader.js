import React from 'react';
import Icon from './Icon';

export default class UserHeader extends React.Component {
  state = {
    iconHeart: 'icon-heart'
  };
  handleGiveLike = () => {
    this.props.handleGiveLike();

    this.setState(prevState => {
      this.props.user.socialMedia.isLiked ? ({ iconHeart: prevState.iconHeart = 'icon-heart-filled' }) : ({ iconHeart: prevState.iconHeart = 'icon-heart' });
    })
  };
  handleShowWindow = () => {
    alert(window.location.href);
  };
  render() {
    return (
      <div>
      <section>
        <div>
          <img src={require('../images/HarveySpecter.jpg')} width="100"/>
        </div>
        <div>
          <div>
            <h2>{this.props.user.name}</h2>
            <Icon handleGiveLike={this.handleGiveLike} name={this.state.iconHeart} />
          </div>
          <h4>{`${this.props.user.city}, ${this.props.user.country}`}</h4>
        </div>
      </section>
      <div>
        <Icon handleShowWindow={this.handleShowWindow} name='icon-share' />
      </div>
    </div>
    );
  }
}