import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './RecommendItem.module.scss';
import Button from '../../../Button';
import Image from '../../../Image/Image';
import Video from '../../../Video/Video';
import { faBookmark, faCirclePlus, faCommentDots, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons/faShare';
import ButtonPlay from './ButtonPlay/ButtonPlay';

const cx = classNames.bind(styles);

function RecommendItem() {
  const videoRef = useRef();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleClickPlay = () => {
    videoRef.current.play();
  };
  const handleClickPause = () => {
    videoRef.current.pause();
  };

  return (
    <div className={cx('recommend-item-wrapper')}>
      <div className={cx('content-wrapper')}>
        <div className={cx('header-wrapper')}>
          <Image className={cx('avatar')} rounded src="fsdf" />

          <div className={cx('info')}>
            <div className={cx('author')}>
              <span>yone_dev</span>
              <span>Tarn Van Ngan</span>
            </div>
            <div className={cx('desc')}>
              <a href="/">
                <span>this is title</span>
              </a>
              <a href="/">
                <span>#game</span>
              </a>
              <a href="/">
                <span>#tiktok</span>
              </a>
              <a href="/">
                <span>#vscode</span>
              </a>
              <a href="/">
                <span>#junokyo</span>
              </a>
            </div>
          </div>
          <div className={cx('button')}>
            <Button outlined>Theo dõi</Button>
          </div>
        </div>
        <div className={cx('video-wrapper')}>
          <div className={cx('video-card-wrapper')}>
            <div className={cx('video-player')}>
              <Video className={cx('video')} ref={videoRef} />
              <div className={cx('video-action')}>
                {isVideoPlaying ? (
                  <ButtonPlay
                    type="pause"
                    className={cx('play-btn')}
                    onClick={() => {
                      setIsVideoPlaying(!isVideoPlaying);
                      handleClickPause();
                    }}
                  />
                ) : (
                  <ButtonPlay
                    type="play"
                    className={cx('play-btn')}
                    onClick={() => {
                      setIsVideoPlaying(!isVideoPlaying);
                      handleClickPlay();
                    }}
                  />
                )}

                <div className={cx('video-controller')}>
                  <div className={cx('seekbar-container')}>
                    <div className={cx('slider')}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('action-wrapper')}>
            <div className={cx('avatar-container')}>
              <a href="/" className={cx('avatar-link')}>
                <span>
                  <Image
                    className={cx('author-avatar')}
                    src="https://file3.qdnd.vn/data/images/0/2023/05/03/vuhuyen/khanhphan.jpg"
                  />
                </span>
                <span className={cx('button-follow')}>
                  <FontAwesomeIcon icon={faCirclePlus} />
                </span>
              </a>
            </div>
            <button className={cx('button-action-item')}>
              <span className={cx('span-icon')}>
                <FontAwesomeIcon icon={faHeart} />
              </span>
              <strong className={cx('strong-text')}>43.8K</strong>
            </button>
            <button className={cx('button-action-item')}>
              <span className={cx('span-icon')}>
                <FontAwesomeIcon icon={faCommentDots} />
              </span>
              <strong className={cx('strong-text')}>43.8K</strong>
            </button>
            <button className={cx('button-action-item')}>
              <span className={cx('span-icon')}>
                <FontAwesomeIcon icon={faBookmark} />
              </span>
              <strong className={cx('strong-text')}>43.8K</strong>
            </button>
            <button className={cx('button-action-item')}>
              <span className={cx('span-icon')}>
                <FontAwesomeIcon icon={faShare} />
              </span>
              <strong className={cx('strong-text')}>43.8K</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendItem;
