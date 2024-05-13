import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/3848451234d884288ad608b9db789b8f.jpeg?lk3s=a5d48078&x-expires=1715702400&x-signature=CR2mciOD%2BS6%2BJ0oCDtYi6kYWf8M%3D"
        alt="ngandz"
      />
      <div className={cx('info')}>
        <h4 className={cx('username')}>
          <span>Ngandz</span>
          <FontAwesomeIcon className={cx('blue-check')} icon={faCircleCheck} />
        </h4>
        <span className={cx('full-name')}>tran van ngan</span>
      </div>
    </div>
  );
}

export default AccountItem;
