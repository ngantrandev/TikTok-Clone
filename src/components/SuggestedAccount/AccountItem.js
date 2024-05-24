import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccount.module.scss';
import { Wrapper as WrapperPopper } from '../Popper';

import AccountPreview from './AccountPreview/AccountPreview';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <Tippy
      interactive
      offset={[20, 10]}
      delay={[800, 0]}
      placement="bottom"
      render={(attrs) => (
        <div tabIndex="-1" {...attrs}>
          <WrapperPopper>
            <AccountPreview />
          </WrapperPopper>
        </div>
      )}
    >
      <div className={cx('account-item')}>
        <Image
          className={cx('avatar')}
          src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/3c08c2bc0aae5b8ee2de7cd47048c5d9.jpeg?lk3s=a5d48078&nonce=15304&refresh_token=714565ee6973d0394747562811e79ab7&x-expires=1716210000&x-signature=hytyGKFr5U6EEHdUrWluLMnwzj0%3D&shp=a5d48078&shcp=b59d6b55"
          alt="avatar"
        />
        <div className={cx('item-info')}>
          <p className={cx('username')}>
            <strong>ngandz</strong>
            <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
          </p>
          <p className={cx('name')}>Tran Van Ngan</p>
        </div>
      </div>
    </Tippy>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
