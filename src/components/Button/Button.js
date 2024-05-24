import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

  const classes = cx(
    'wrapper',
    {
      primary,
      outlined,
      small,
      large,
      disabled,
      rounded,
    },
    className,
  );

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

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  primary: PropTypes.bool,
  small: PropTypes.bool,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  large: PropTypes.bool,
  className: PropTypes.string,
  outlined: PropTypes.bool,
  onClick: PropTypes.func,

  children: PropTypes.node.isRequired,
};

export default Button;
