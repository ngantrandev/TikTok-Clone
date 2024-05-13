import React, { memo } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, primary, small, disabled, rounded, large, outlined, onClick, children, ...passProps }) {
  let Comp = 'button';

  const classes = cx('wrapper', {
    primary,
    outlined,
    small,
    large,
    disabled,
    rounded,
  });

  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    delete props.onClick;
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
