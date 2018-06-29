import React from 'react';
import '../images/icons.svg';

const Icon = (props) => (
  <div>
    <svg onClick={props.handleGiveLike} className={`icon icon-${props.name}`}>
      <use xlinkHref={`#icons_${props.name}`}></use>
    </svg>
  </div>
);

export default Icon;