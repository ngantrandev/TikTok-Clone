import React from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import RecommendItem from './RecommendItem/RecommendItem';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('wrapper')}>
      <RecommendItem />
      <RecommendItem />
      <RecommendItem />
      <RecommendItem />
      <RecommendItem />
    </div>
  );
}

export default Home;
