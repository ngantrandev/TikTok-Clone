import React from 'react';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '../../Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick, ...passProps }) {
  const classes = cx('menu-item', {
    separate: data.separate,
  });
  return (
    <Button className={classes} to={data.to} leftIcon={data.icon} onClick={onClick}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
