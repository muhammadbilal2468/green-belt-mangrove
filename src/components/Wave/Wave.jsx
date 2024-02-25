import React, { useState } from "react";
import "./Wave.css";

const Wave = ({ height }) => {
  return (
    <div className="content z-10 bg-transparent">
      <div className="water" style={{ height: `${height}px` }}></div>
    </div>
  );
};

export default Wave;
