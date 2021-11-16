import React from "react";
import ProductOptions from "./Product Options/ProductOptions";

const ProductDetails = () => {
  const sizes = ["S", "M", "L", "XL", "3XL"];
  return (
    <div className="w-1/2 px-32 py-32">
      <div className="flex items-center justify-between">
        <p style={{ fontSize: "2rem", fontWeight: "700" }}>UGLI Shirt</p>
        <p style={{ fontSize: "2rem", fontWeight: "700" }}>$35</p>
      </div>
      <p className="text-gray-400 mt-5 mb-1 text-sm">COLOR</p>
      <div className="flex mb-6">
        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "white",
            borderRadius: "50%",
            border: "1px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "2px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "rgb(249 168 212)",
              borderRadius: "50%",
            }}
          ></div>
        </div>
        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "white",
            borderRadius: "50%",
            border: "1px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "2px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "black",
              borderRadius: "50%",
            }}
          ></div>
        </div>
      </div>
      <p className="text-gray-400 text-sm mb-2">SELECT SIZE</p>
      <div className="flex">
        {sizes.map((ele, i) => {
          return (
            <div
              key={i}
              style={{
                border: i === 0 ? "1px solid black " : "1px solid #eee",
                color: i === 4 || i === 3 ? "#eee" : "#000",
                textDecoration: i === 4 || i === 3 ? "line-through" : "none",
                marginRight: "5px",
              }}
              className="py-2 px-3"
            >
              {ele}
            </div>
          );
        })}
      </div>
      {/* <div className="bg-black text-white text-center py-3 z-10">
        Add to cart
      </div>

      <div
        className=" bg-white text-center py-3"
        style={{
          transform: "translate(10px, -40px)",
          border: "1px solid #000",
        }}
      >
        Add To Cart
      </div> */}

      <div
        style={{
          transform: "translate(-5px, 45px)",
          border: "1px solid #000",
        }}
        className="bg-black text-center py-3 text-white cursor-pointer hover:bg-white hover:text-black"
      >
        Add To Cart
      </div>
      <div
        style={{ border: "1px solid #000" }}
        className="bg-white text-white text-center py-3  cursor-pointer "
      >
        Add to cart
      </div>
      <ProductOptions/>
    </div>
  );
};

export default ProductDetails;
