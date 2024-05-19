import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './SuggestedAccount.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccount({ title }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('title')}>{title}</p>
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />

      <p className={cx('see-more')}>Xem thêm</p>
    </div>
  );
}

SuggestedAccount.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SuggestedAccount;
