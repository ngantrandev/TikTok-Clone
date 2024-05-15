import React from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faQuestion, faFont, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '../../../../assets/images/';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';
import { faBookmark, faKeyboard, faLightbulb, faMoon, faUser } from '@fortawesome/free-regular-svg-icons';
import { MessageIcon, NotificationIcon, UploadIcon } from '../../../Icons';
import Image from '../../../Images';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLightbulb} />,
    title: 'Trung tâm Nhà sáng tạo LIVE',
  },
  {
    icon: <FontAwesomeIcon icon={faFont} />,
    title: 'Tiếng việt',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faQuestion} />,
    title: 'Phản hồi và trợ giúp',
    to: '/report',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Phím tắt trên bàn phím',
    to: '/shotcut',
  },
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    title: 'Chế độ tối',
    // to: '/language',
  },
];

function Header() {
  const handleChange = (item) => {
    console.log(item);
  };

  const hasUser = true;

  const userMenuItems = hasUser
    ? [
        {
          icon: <FontAwesomeIcon icon={faUser} />,
          title: 'Xem hồ sơ',
          to: '/profile',
        },
        {
          icon: <FontAwesomeIcon icon={faBookmark} />,
          title: 'Yêu thích',
          to: '/like',
        },
        {
          icon: <FontAwesomeIcon icon={faCoins} />,
          title: 'Nhận xu',
          to: '/coin',
        },
        {
          icon: <img src={images.stream} alt="" />,
          title: 'LIVE Studio',
          to: '/live',
        },
        {
          icon: <FontAwesomeIcon icon={faGear} />,
          title: 'Cài đặt',
          to: '/settings',
        },
        ...MENU_ITEMS,
        {
          icon: <FontAwesomeIcon icon={faSignOut} />,
          title: 'Đăng xuất',
          to: '/logout',
          separate: true,
        },
      ]
    : MENU_ITEMS;

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok logo" />
        </div>

        <Search />

        <div className={cx('action')}>
          {hasUser ? (
            <>
              <Tippy content="upload">
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy content="message">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy content="notification">
                <button className={cx('action-btn')}>
                  <NotificationIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button primary to="/login" target="blank">
                Log in
              </Button>
            </>
          )}
          <Menu items={userMenuItems} onChange={handleChange}>
            {hasUser ? (
              <Image
                className={cx('user-avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/3848451234d884288ad608b9db789b8f.jpeg?lk3s=a5d48078&x-expires=1715702400&x-signature=CR2mciOD%2BS6%2BJ0oCDtYi6kYWf8M%3D"
                alt="Tran Van Ngan"
                fallback="https://yt3.ggpht.com/1ohqvhusGW6RF17Fe1aRVnaIObQf6oPWKJAk4WI0QGgDQ9V-hNKnEBelfddKRyPwL6vbkEIK=s88-c-k-c0x00ffffff-no-rj"
              />
            ) : (
              <button className={cx('btn-more')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;