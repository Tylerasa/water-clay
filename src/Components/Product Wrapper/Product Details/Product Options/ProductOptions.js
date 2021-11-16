import React, { useState } from "react";

const ProductOptions = () => {
  const [cur, setCur] = useState(0);
  const list = [
    {
      title: "Description",
      content:
        "Description ipsum dolor sit amet, consectetur adipiscing elit. Donec ut enim vitae est rhoncus volutpat a id augue. Quisque rhoncus aliquet venenatis. Phasellus in lectus mollis, viverra massa a, dignissim ante. Nam iaculis sem nec felis faucibus tempor. Phasellus sit amet venenatis lectus. Nullam posuere leo vel lacinia imperdiet. ",
    },
    {
      title: "Delivery",
      content:
        "Ut sagittis a tortor ultrices accumsan. Cras venenatis dolor quis ante elementum posuere. In hac habitasse platea dictumst. Cras condimentum augue nec lectus vestibulum, fringilla vulputate dui eleifend.  ",
    },
    {
      title: "Shipping",
      content:
        "Mauris pulvinar nunc at pulvinar tincidunt. Maecenas consectetur nulla turpis, eu congue erat consectetur eu. Quisque dapibus ex non velit porttitor, sit amet iaculis augue tempus.  ",
    },
    {
      title: "",
      content: "",
    },
  ];
  return (
    <div>
      <div className="flex mt-8 justify-between">
        {list.map((ele, i) => {
          return (
            <div key={i} onClick={()=> setCur(i)}>
              <p className="border-b-2 hover:border-black cursor-pointer transition duration-500 ease-in-out">
                {ele.title.toUpperCase()}
              </p>
            </div>
          );
        })}
      </div>
      <div className='mt-8'>{true ? list[cur].content : null}</div>
    </div>
  );
};

export default ProductOptions;
