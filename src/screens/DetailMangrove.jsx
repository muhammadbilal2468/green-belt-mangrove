import React from "react";
import { mangroveImg } from "../assets";
import data from "../Data/Mangrove.json";

const DetailMangrove = (props) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-green-700 text-2xl mb-5 font-bold">
        Detail Tanaman Bakau
      </h2>
      <div>
        <div className="grid grid-cols-5 gap-10 bg-white rounded-xl">
          <div className="col-span-2">
            <img
              src={mangroveImg}
              alt="Preview"
              className="w-full h-64 border-2 border-tertiary border-dashed rounded-lg p-2"
            />
          </div>
          <div className="col-span-3">
            <p className="font-semibold">Name Bakau</p>
            <p className="text-tertiary border border-tirtext-tertiary p-2 rounded-lg mb-4">
              {data[1].title}
            </p>

            <p className="font-semibold">Deskripsi</p>
            <p className="text-tertiary border border-tirtext-tertiary p-2 rounded-lg mb-4">
              {data[1].desc}
            </p>

            <p className="font-semibold">Daun</p>
            <p className="text-tertiary border border-tirtext-tertiary p-2 rounded-lg mb-4">
              {data[1].leaf}
            </p>

            <p className="font-semibold">Flower</p>
            <p className="text-tertiary border border-tirtext-tertiary p-2 rounded-lg mb-4">
              {data[1].flower}
            </p>

            <p className="font-semibold">Buah</p>
            <p className="text-tertiary border border-tirtext-tertiary p-2 rounded-lg mb-4">
              {data[1].fruit}
            </p>

            <p className="font-semibold">Ekologi</p>
            <p className="text-tertiary border border-tirtext-tertiary p-2 rounded-lg mb-4">
              {data[1].ecology}
            </p>

            <p className="font-semibold">Distribusi</p>
            <p className="text-tertiary border border-tirtext-tertiary p-2 rounded-lg mb-4">
              {data[1].distribution}
            </p>

            <p className="font-semibold">Manfaat</p>
            <p className="text-tertiary border border-tirtext-tertiary p-2 rounded-lg mb-4">
              {data[1].benefit}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMangrove;
