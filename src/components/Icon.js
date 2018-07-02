import React from 'react';
import '../images/icons.svg';

const Icon = (props) => (
  <svg className={`icon ${props.name}`}>
    <use 
      onClick={() => props.name.includes('icon-heart') ? props.handleGiveLike() : props.handleShowWindow()} 
      xlinkHref={`#icons_${props.name}`}>
    </use>
  </svg>
);

export default Icon;