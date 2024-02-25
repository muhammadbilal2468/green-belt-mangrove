import React from "react";
import { MangroveImg, mangroveImg } from "../../assets";

const Mangrove = ({ leftPosition }) => {
  return (
    <div
      className="absolute bottom-7 500 z-20 bg-transparent"
      style={{ left: `${leftPosition}px` }}
    >
      <img
        src={mangroveImg}
        alt="gambar bakau"
        className="h-30 w-20 bg-transparent"
      />
    </div>
  );
};

export default Mangrove;
