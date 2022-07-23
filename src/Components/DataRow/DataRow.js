import React, { useState } from "react";

const DataRow = ({ item }) => {
  const {
    name,
    gender,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    homeworld,
    films,
    species,
    vehicles,
    starships,
    created,
    edited,
    url,
  } = item;
  const [detailView, setDetailView] = useState(false);

  return (
    <div className="bg-white p-5 md:p-8 lg:p-10 mb-5 rounded-3xl border shadow-sm">
      <div className={`grid grid-cols-1 lg:grid-cols-5 gap-x-8 gap-y-4`}>
        <div className="w-full flex items-center mb-3 lg:mb-0">
          <h1>{name}</h1>
        </div>
        <div className="w-full h-full">
          <h5 className="font-semibold mb-1">GENDER</h5>
          <p>{gender}</p>
        </div>
        <div className="w-full h-full">
          <h5 className="font-semibold mb-1">Height</h5>
          <p>{height}</p>
        </div>
        <div className="w-full h-full">
          <h5 className="font-semibold mb-1">MASS</h5>
          <p>{mass}</p>
        </div>
        <div className="w-full h-full flex justify-center mt-3 md:mt-0 md:justify-end items-center">
          {detailView ? (
            <button
              onClick={() => setDetailView(!detailView)}
              className="btn bg-[#FB3E3E] border-0 text-white text-sm px-3 py-1 rounded-3xl"
            >
              Hide Details
            </button>
          ) : (
            <button
              onClick={() => setDetailView(!detailView)}
              className="btn bg-[#FB3E3E] border-0 text-white text-sm px-3 py-1 rounded-3xl"
            >
              View Details
            </button>
          )}
        </div>
      </div>
      {/*  */}

      <div
        className={`${
          detailView
            ? "w-full px-3 md:px-5 lg:px-8 py-5 border rounded-2xl shadow-md mt-12"
            : "hidden"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
          <div className="w-full">
            <h5 className="font-semibold mb-2">Hair Color</h5>
            <p>{hair_color}</p>
          </div>
          <div className="w-full">
            <h5 className="font-semibold mb-2">Skin Color</h5>
            <p>{skin_color}</p>
          </div>
          <div className="w-full">
            <h5 className="font-semibold mb-2">Eye Color</h5>
            <p>{eye_color}</p>
          </div>
          <div className="w-full">
            <h5 className="font-semibold mb-2">Birth Year</h5>
            <p>{birth_year}</p>
          </div>
          <div className="w-full">
            <h5 className="font-semibold mb-2">Homeworld</h5>
            <p>{homeworld}</p>
          </div>
          <div className="w-full">
            <h5 className="font-semibold mb-2">Films</h5>
            <p>{films.length}</p>
          </div>
          <div className="w-full">
            <h5 className="font-semibold mb-2">Species</h5>
            <p>{species.length}</p>
          </div>
          <div className="w-full">
            <h5 className="font-semibold mb-2">Vehicles</h5>
            <p>{vehicles.length}</p>
          </div>
          <div className="w-full">
            <h5 className="font-semibold mb-2">Starships</h5>
            <p>{starships.length}</p>
          </div>
          <div className="w-full">
            <h5 className="font-semibold mb-2">Created</h5>
            <p>{created}</p>
          </div>
          <div className="w-full">
            <h5 className="font-semibold mb-2">Edited</h5>
            <p>{edited}</p>
          </div>
          <div className="w-full">
            <h5 className="font-semibold mb-2">URL</h5>
            <p>{url}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataRow;
