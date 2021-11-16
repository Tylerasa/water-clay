import React, { useContext } from "react";
import ImageSelector from "./Image Selector/ImageSelector";
import { ImageContext } from "../../../context";
const ProductImage = () => {
  const {  images, imgPos } = useContext(ImageContext);
  return (
    <div
      style={{
        backgroundImage: `url(${images[imgPos]})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
      className="w-1/2 bg-imageBg"
    >
      <ImageSelector />
    </div>
  );
};

export default ProductImage;
