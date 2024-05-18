import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';

import images from '../../assets/images';

const Image = forwardRef(({ src, alt, fallback, ...props }, ref) => {
  const [_fallback, setFallback] = useState('');

  const handleError = () => {
    if (fallback) {
      setFallback(fallback);
    } else {
      setFallback(images.defaultImage);
    }

    // console.log(fallback);
  };
  return <img ref={ref} src={_fallback || src} alt={alt} {...props} onError={handleError} />;
});

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;
