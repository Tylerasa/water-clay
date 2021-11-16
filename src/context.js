import React from "react";
import main from "./Components/assets/main.png";
import side from "./Components/assets/side.png";
const images = [main, side];
export const ImageContext = React.createContext({
  imgPos: 0,
  images: images,
  setImage: () => {},
});
