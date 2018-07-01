import React from 'react';
import '../images/icons.svg';

const Icon = (props) => (
  <div>
    <svg className={`icon icon-${props.name}`}>
      <use onClick={props.handleGiveLike} xlinkHref={`#icons_${props.name}`}></use>
    </svg>
  </div>
);

export default Icon;