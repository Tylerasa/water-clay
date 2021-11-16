import React, { useContext, useState } from "react";
import main from "../../../assets/main.png";
import side from "../../../assets/side.png";
import { ImageContext } from "../../../../context";
const ImageSelector = () => {
  const { setImage } = useContext(ImageContext);
  const images = [main, side];
  const [cur, setCur] = useState(0)
  return (
    <div
      style={{ width: "inherit" }}
      className="flex absolute bottom-10 items-end justify-between px-4"
    >
      <div className="flex">
        {images.map((ele, i) => {
          return (
            <img
              key={i}
              onClick={() => {setImage(ele); setCur(i)}}
              className="cursor-pointer"
              src={ele}
              style={{ border: i === cur ? "solid 1px #000" : "none" }}
              width="50"
              height="50"
              alt={`${i}`}
            />
          );
        })}
      </div>
      <div
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "8px",
        }}
        className="bg-pink-300 shadow-lg"
      >
        <svg viewBox="0 0 100 100" width="120" height="120">
          <defs>
            <path
              id="circle"
              d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text>
            <textPath style={{ fontSize: "16px" }} xlinkHref="#circle">
              SALE 40% {"  "} SALE 40% {"  "} SALE 40%{"  "}
            </textPath>
          </text>
        </svg>
        {/* <path>Hello World</path> */}
      </div>
    </div>
  );
};

export default ImageSelector;
