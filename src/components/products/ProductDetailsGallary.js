import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import mobile from "../../images/mobile.png";
import ProductDetailsLogic from "../../logic/Products/ProductDetailsLogic";
import { useParams } from "react-router-dom";

const ProductDetailsGallary = () => {
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [item, images] = ProductDetailsLogic(id);

  return (
    <div className="gallarybox">
      <ImageGallery
        items={images}
        defultImage={mobile}
        showFullscreenButton={false}
        showPlayButton={false}
        // autoPlay={true}
        showThumbnails={false}
      />
    </div>
  );
};

export default ProductDetailsGallary;
