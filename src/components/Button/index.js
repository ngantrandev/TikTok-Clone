import React, { memo } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  leftIcon,
  rightIcon,
  primary,
  small,
  disabled,
  rounded,
  large,
  className,
  outlined,
  onClick,
  children,
  ...passProps
}) {
  let Comp = 'button';

  const classes = cx('wrapper', {
    primary,
    outlined,
    small,
    large,
    disabled,
    rounded,
  }, className);

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
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
