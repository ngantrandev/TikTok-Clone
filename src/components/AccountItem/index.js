import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '../Images';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/${data.nickname}`} className={cx('wrapper')}>
      <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
      <div className={cx('info')}>
        <h4 className={cx('username')}>
          <span>{data.nickname}</span>
          {data.tick && <FontAwesomeIcon className={cx('blue-check')} icon={faCircleCheck} />}
        </h4>
        <span className={cx('full-name')}>{data.full_name}</span>
      </div>
    </Link>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
