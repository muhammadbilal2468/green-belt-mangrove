import React, { useState } from "react";
import "./Wave.css";

const Wave = ({ waveType, height }) => {
  const bgColor =
    waveType === "air asin"
      ? "bg-blue-800"
      : waveType === "air tawar"
      ? "bg-yellow-700"
      : "bg-blue-800";

  return (
    <div className="content z-10 bg-transparent">
      <div
        className={`water ${bgColor}`}
        style={{ height: `${height}px` }}
      ></div>
    </div>
  );
};

export default Wave;
