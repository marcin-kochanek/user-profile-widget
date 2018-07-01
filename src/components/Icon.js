import React from 'react';
import '../images/icons.svg';

const Icon = (props) => (
  <div>
    <svg className={`icon icon-${props.name}`}>
      <use 
        onClick={() => props.name.includes('icon-heart') ? props.handleGiveLike() : props.handleShowWindow()} 
        xlinkHref={`#icons_${props.name}`}>
      </use>
    </svg>
  </div>
);

export default Icon;