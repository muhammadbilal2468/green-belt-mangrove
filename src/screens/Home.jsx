import React, { useState } from "react";
import Wave from "../components/Wave/Wave";
import Mangrove from "../components/Mangrove/Mangrove";
import { skyImg } from "../assets";
import Land from "../components/Land/Land";

const Home = () => {
  const [land, setLand] = useState("");
  const [mangrove, setMangrove] = useState(0);
  const [mangroveCount, setMangroveCount] = useState(1);
  const [wave, setWave] = useState(0);
  const [heightWave, setHeightWave] = useState(0);

  const handleLandChange = (e) => {
    setLand(e.target.value);
  };

  const handleWaveChange = (e) => {
    setWave(e.target.value);
  };

  const handleMangroveCountChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setMangroveCount(Math.max(0, value)); // Menggunakan Math.max untuk memastikan nilai tidak kurang dari 0
    } else {
      setMangroveCount(0); // Jika input bukan angka, maka set nilai menjadi 0
    }
  };

  const handleWaveHeightChange = (e) => {
    let value = parseInt(e.target.value);
    if (!isNaN(value)) {
      value = Math.min(50, Math.max(1, value)); // Membatasi nilai antara 10 hingga 50 meter
      setHeightWave(value);
    }
  };
  return (
    <div className="w-full">
      {/* ----------------- INPUT KOMPONEN -------------------- */}
      <div className="grid grid-cols-3 gap-10 justify-between">
        <div className="">
          <h2 className="font-bold text-xl text-amber-600 mb-5">Tanah</h2>
          <div class="mb-5">
            <label
              htmlFor="land"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Jenis Tanah
            </label>
            <select
              id="land"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={land}
              onChange={handleLandChange}
            >
              <option value="" selected disabled hidden>
                Pilih Jenis Tanah---
              </option>
              <option value="berlumpur">Tanah Berlumpur</option>
              <option value="berpasir">Tanah Berpasir</option>
            </select>
          </div>
        </div>
        <div className="">
          <h2 className="font-bold text-xl text-green-600 mb-5">Bakau</h2>
          <div class="mb-5">
            <label
              for="mangrove"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Jenis Bakau
            </label>
            <select
              id="mangrove"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Pilih Jenis Bakau---</option>
              <option value="">Acanthus ebracteatus</option>
              <option value="">Acanthus ilicifolius</option>
              <option value="">Acrostichum aureum</option>
              <option value="">Acrostichum speciosum</option>
            </select>
          </div>
          <div class="mb-5">
            <label
              for="mangrove-count"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Jumlah Bakau
            </label>
            <input
              type="number" // Menggunakan input type "number" untuk memastikan input hanya menerima angka
              id="mangrove-count"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={mangroveCount}
              onChange={handleMangroveCountChange}
              min={1}
              max={10}
            />
          </div>
        </div>
        <div className="">
          <h2 className="font-bold text-xl text-blue-600 mb-5">Ombak</h2>
          <div class="mb-5">
            <label
              for="wave"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Jenis Air
            </label>
            <select
              id="wave"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={wave}
              onChange={handleWaveChange}
            >
              <option selected hidden>
                Pilih Jenis Air---
              </option>
              <option value="air asin">Air Asin</option>
              <option value="air tawar">Air Tawar</option>
            </select>
          </div>
          <div class="mb-5">
            <label
              htmlFor="wave-count"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tinggi Ombak (meter)
            </label>
            <input
              type="number" // Menggunakan input type "number" untuk memastikan input hanya menerima angka
              id="wave-count"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={heightWave}
              onChange={handleWaveHeightChange}
              min={1}
              max={50}
            />
          </div>
        </div>
      </div>
      {/* ---------------- END INPUT KOMPON ------------------- */}

      {/* -------------------- DISPLAY ------------------------- */}
      <div className="border-2 rounded-md border-green-600 h-96 my-5 relative bg-black overflow-hidden">
        <img
          src={skyImg}
          alt=""
          className="absolute top-0 left-0 right-0 bottom-0 z-10"
        />
        <Wave height={heightWave * 5} waveType={wave} />

        {[...Array(mangroveCount)].map((_, index) => (
          <Mangrove key={index} leftPosition={index * 105} />
        ))}

        <Land landType={land} />
      </div>
      {/* ------------------ END DISPLAY ----------------------- */}
    </div>
  );
};

export default Home;
