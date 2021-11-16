import React, { useContext } from "react";
import ImageSelector from "./Image Selector/ImageSelector";
import { ImageContext } from "../../../context";
const ProductImage = () => {
  const {  image } = useContext(ImageContext);
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      className="w-1/2 bg-imageBg"
    >
      <ImageSelector />
    </div>
  );
};

export default ProductImage;
