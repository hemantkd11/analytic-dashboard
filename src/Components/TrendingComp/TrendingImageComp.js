import React from "react";
import "./TrendingImagecomp.css";
const TrendingImageComp = ({ imageUrl, productName, disc }) => {
  return (
    <div className="Trending-image-container">
      <div className="image-text-rating">
        {/* Image */}
        <div className="image-container">
          <img src={imageUrl} alt={productName} />
        </div>
        {/* details */}
        <div className="about-image">
          <div className="product-name-text">{productName}</div>
          <div className="prodduct-disc-text">{disc}</div>
        </div>
      </div>
    </div>
  );
};

export default TrendingImageComp;
