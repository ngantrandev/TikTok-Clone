import React from 'react';
import classNames from 'classnames/bind';

import styles from './Following.module.scss';

const cx = classNames.bind(styles);

function Fowllowing() {
  return (
    <div className={cx('wrapper')}>
      <h1>Fowllowing page</h1>
    </div>
  );
}

export default Fowllowing;
