import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Image.module.scss';

import images from '../../assets/images';
const cx = classNames.bind(styles);

const Image = forwardRef(({ src, alt, fallback, className, rounded, ...props }, ref) => {
  const [_fallback, setFallback] = useState('');

  const classes = cx(className, {
    rounded,
  });

  const handleError = () => {
    if (fallback) {
      setFallback(fallback);
    } else {
      setFallback(images.defaultImage);
    }

    // console.log(fallback);
  };
  return <img className={classes} ref={ref} src={_fallback || src} alt={alt} {...props} onError={handleError} />;
});

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  fallback: PropTypes.string,
  className: PropTypes.string,
  rounded: PropTypes.bool,
};

export default Image;
