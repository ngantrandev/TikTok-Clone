import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import configs from '../../../configs';
import { HomeIcon, FollowingIcon, LiveIcon } from '../../../components/Icons';
import SuggestedAccount from '../../../components/SuggestedAccount/SuggestedAccount';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      {
        <Menu>
          <MenuItem title="Dành cho bạn" to={configs.routes.home} icon={<HomeIcon />} />
          <MenuItem title="Đang theo dõi" to={configs.routes.following} icon={<FollowingIcon />} />
          <MenuItem title="Live" to={configs.routes.live} icon={<LiveIcon />} />
        </Menu>
      }

      <SuggestedAccount title="Gợi ý" />
      {/* <SuggestedAccount title="Đang theo dõi" /> */}
    </aside>
  );
}

export default Sidebar;
