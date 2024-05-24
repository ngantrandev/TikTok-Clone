import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';
import { faPause } from '@fortawesome/free-solid-svg-icons/faPause';

function ButtonPlay({ className, type, onClick }) {
  return (
    <div className={className} onClick={onClick}>
      {type === 'play' ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />}
    </div>
  );
}

export default ButtonPlay;
