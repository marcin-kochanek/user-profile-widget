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
      <section className='user-header'>
        <Icon handleShowWindow={this.handleShowWindow} name='icon-share' />
        <img className='user-header__photo' src={require('../images/HarveySpecter.png')}/>
        <div className='user-header__wrapper'>
          <div className='user-header__box'>
            <h2 className='user-header__name'>{this.props.user.name}</h2>
            <Icon handleGiveLike={this.handleGiveLike} name={this.state.iconHeart} />
          </div>
          <h4 className='user-header__city'>{`${this.props.user.city}, ${this.props.user.country}`}</h4>
        </div>
      </section>
    );
  }
}