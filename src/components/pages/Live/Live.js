import React from 'react';
import classNames from 'classnames/bind';

import styles from './Live.module.scss';

const cx = classNames.bind(styles);
function Live() {
  return (
    <div className={cx('wrapper')}>
      <h1>Live page</h1>
    </div>
  );
}

export default Live;
