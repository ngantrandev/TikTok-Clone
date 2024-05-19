import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck';

import styles from './AccountPreview.module.scss';
import Button from '../../../components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <img
          className={cx('avatar')}
          src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/3c08c2bc0aae5b8ee2de7cd47048c5d9.jpeg?lk3s=a5d48078&nonce=15304&refresh_token=714565ee6973d0394747562811e79ab7&x-expires=1716210000&x-signature=hytyGKFr5U6EEHdUrWluLMnwzj0%3D&shp=a5d48078&shcp=b59d6b55"
          alt=""
        />

        <Button primary>Follow</Button>
      </div>

      <div className={cx('body')}>
        <p className={cx('username')}>
          <strong>ngandz</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
        </p>
        <p className={cx('name')}>Tran Van Ngan</p>
      </div>

      <p className={cx('analytics')}>
        <strong className={cx('followers')}>8.2M</strong>
        <span className={cx('label')}>Followers</span>
        <strong className={cx('likes')}>8.2M</strong>
        <span className={cx('label')}>Likes</span>
      </p>
    </div>
  );
}

export default AccountPreview;
