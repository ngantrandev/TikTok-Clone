import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import classNames from 'classnames/bind';

import styles from './Video.module.scss';

import video from '../../videos';

const cx = classNames.bind(styles);

function Video(props, videoRef) {
  const ref = useRef();

  useImperativeHandle(videoRef, () => ({
    play() {
      ref.current.play();
    },
    pause() {
      ref.current.pause();
    },
  }));

  return <video ref={ref} className={props.className} src={video} />;
}

export default forwardRef(Video);
