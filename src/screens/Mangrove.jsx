import React from "react";
import data from "../Data/Mangrove.json";
import { mangroveImg } from "../assets";
import { Link } from "react-router-dom";

const Mangrove = () => {
  console.log("data", data);
  return (
    <div className="">
      <h2 className="text-green-700 text-2xl mb-5 font-bold">
        Daftar Tanaman Bakau
      </h2>
      <div className="flex gap-4 justify-between">
        {data.map((item, index) => (
          <Link to="/mangrove-detail" className="w-1/4 h-80">
            <div
              className="h-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              key={item.title}
            >
              <a href="#">
                <img
                  className="rounded-t-lg w-full h-40"
                  src={mangroveImg}
                  alt=""
                />
              </a>
              <div className="flex flex-col p-5">
                <div className="">
                  <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                  </a>
                  <p className="text-sm mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.desc.length > 90
                      ? `${item.desc.slice(0, 90)} ...`
                      : item.desc}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Mangrove;
