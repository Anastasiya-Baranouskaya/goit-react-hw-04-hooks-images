import React from 'react';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({
  onClose,
  largeImageURL,
  webformatURL,
}) {
  return (
    <li className="ImageGalleryItem" onClick={() => onClose(largeImageURL)}>
      <img
        src={webformatURL}
        data-source={largeImageURL}
        alt="pictures"
        className="ImageGalleryItem-image"
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
