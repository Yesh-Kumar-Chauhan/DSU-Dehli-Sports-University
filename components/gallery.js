import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { ApiEndPoint } from '../helpers/common';
const MyGallery = (props) => {
    const images = props.images?.map((item) => ({
        original: `${ApiEndPoint}/${item.fileName}`,
        thumbnail: `${ApiEndPoint}/${item.fileName}`,
        description: item.imageDescription,
      }));
    
    
  return (
    <div className="gallery-container">
      <ImageGallery items={images} />
    </div>
  );
};

export default MyGallery;