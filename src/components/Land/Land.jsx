import React from "react";

const Land = ({ landType }) => {
  // Tentukan warna background sesuai dengan jenis tanah yang dipilih
  const bgColor =
    landType === "berlumpur"
      ? "bg-yellow-900"
      : landType === "berpasir"
      ? "bg-gray-500"
      : "bg-gray-500";

  return (
    <div
      className={`absolute bg- w-full bottom-0 left-0 right-0 h-7 z-20 ${bgColor}`}
    ></div>
  );
};

export default Land;
