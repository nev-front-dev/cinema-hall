"use client";
import React from "react";
import Image from "next/image";
import data from "../json_schema.json";

type PlaceType = {
  id: string;
  transform: string;
  row: string;
  place: string;
  price: string;
  rect: {
    x: string;
    y: string;
  };
};
type Parter = {
  id: number;
  places: PlaceType[];
};
interface PlacesInterface {
  parter: Parter;
}

export default function Home() {
  const [places, setIsPlaces] = React.useState({});
  const [isActivePlace, setIsActivePlace] = React.useState(false);
  const [isCart, setIsCart] = React.useState(false);
  const [isCartArr, setIsCartArr] = React.useState([]);
  // console.log("isCartArr", isCartArr);

  const handlerTaggleCart = () => {
    setIsCart(!isCart);
  };
  React.useEffect(() => {
    if (data) return setIsPlaces(data);
  }, [places]);
  const allPlases = data;
  const parterData = allPlases.Parter;
  const parterDataId = allPlases.Parter.id;
  const parterDataPlaces = allPlases.Parter.places;
  const handleTogglerPlace = (placeId: string) => {
    const parterDataFiltred = parterDataPlaces.filter(fp => fp.id !== placeId)
    // setIsCartArr(parterDataFiltred)
    console.log("parterDataFiltred", parterDataFiltred);
    setIsActivePlace(true)
    
    setIsPlaces(parterDataFiltred);
  };

  return (
    <main className="flex flex-col items-center justify-between relative top-0 left-0">
      <header className="h-auto w-full bg-white">
        <div className="w-[50vw] mx-auto">
          <div className="flex items-center justify-between w-full p-4">
            <div className="text-black ">cinema</div>
            <button className="text-black relative" onClick={handlerTaggleCart}>
              cart
              <span className="absolute top-[-0.5vw] right-[-0.5vw] h-[1vw] w-[1vw] bg-lime-500 text-[0.7vw] flex justify-center items-center rounded-full">
                {isCartArr.length}
              </span>
            </button>
          </div>
        </div>
      </header>
      {/* description */}
      <div className="flex items-center gap-4 p-14">
        <div className="flex items-center gap-2">
          <span className="block h-[11px] w-[11px] bg-green-500 rounded-full"></span>
          <span className="block">100 lei</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="block h-[11px] w-[11px] bg-[#c9cbcb] rounded-full"></span>
          <span className="block">free</span>
        </div>
      </div>
      <div></div>
      <div className="">
        {/* scena */}
        <div className="flex flex-col items-center">
          <div className="w-[50vw] h-[0.5vw] bg-white"></div>
          <span className="mt-[1vw] uppercase">scena</span>
        </div>
        {/* hall */}
        <div className="grid grid-cols-1 text-black w-full mt-2">
          {/* left */}
          <div className="flex flex-col items-center bg-slate-400">
            <h4>{/* {placesDataLeft[0]} - {placesDataLeft[0].length} */}</h4>
          </div>
          {/* parter */}
          <div className="flex flex-col items-center bg-neutral-300">
            <h4>
              {/* {placesDataParter[0]} - {placesDataParter[0].length} */}
            </h4>
            {/* <div className="flex justify-center flex-wrap gap-2 w-full"> */}
            <div className="flex flex-col gap-2 w-full">
              <div className="w-full flex justify-center">
                <p className="px-2">1</p>
                <div className="flex gap-1 items-center pr-2">
                  {parterData.places.map((pl) => {
                    const filteredPlacesByRow = pl.row;
                    switch (filteredPlacesByRow) {
                      case 1:
                        return (
                          <button
                            type="button"
                            key={pl.id}
                            className={`w-[11px] h-[11px] text-[0.5vw] border-[1px] border-gray-500 rounded-full flex justify-center items-center hover:cursor-pointer`}
                            style={{
                              background: isActivePlace ? "green" : "#c9cbcb",
                            }}
                            onClick={() => {
                              handleTogglerPlace(pl.id)
                            }}
                          ></button>
                        );
                      default:
                        return;
                    }
                  })}
                </div>
              </div>
              {/* <div className="w-full flex justify-center">
                <p className="px-2">2</p>
                <div className="flex gap-1 items-center pr-2">
                  {parterData.places.map((pl) => {
                    const filteredPlacesByRow = pl.row;

                    switch (filteredPlacesByRow) {
                      case 2:
                        return (
                          <button
                            type="button"
                            key={pl.id}
                            className="w-[11px] h-[11px] text-[0.5vw] border-[1px] border-gray-500 rounded-full flex justify-center items-center hover:cursor-pointer"
                            style={{
                              background: isActivePlace ? "green" : "#c9cbcb",
                            }}
                            onClick={() => handleTogglerPlace(pl.id)}
                          >
                          </button>
                        );
                      default:
                        return;
                    }
                  })}
                </div>
              </div> */}
              {/* <div className="w-full flex justify-center">
                <p className="px-2">3</p>
                <div className="flex gap-1 items-center pr-2">
                  {parterData.places.map((pl) => {
                    const filteredPlacesByRow = pl.row;

                    switch (filteredPlacesByRow) {
                      case 3:
                        return (
                          <button
                            type="button"
                            key={pl.id}
                            className="w-[11px] h-[11px] text-[0.5vw] border-[1px] border-gray-500 rounded-full flex justify-center items-center hover:cursor-pointer"
                            style={{
                              background: isActivePlace ? "green" : "#c9cbcb",
                            }}
                            onClick={() => handleTogglerPlace(pl.id)}
                          >
                          </button>
                        );
                      default:
                        return;
                    }
                  })}
                </div>
              </div> */}
              {/* <div className="w-full flex justify-center">
                <p className="px-2">4</p>
                <div className="flex gap-1 items-center pr-2">
                  {parterData.places.map((pl) => {
                    const filteredPlacesByRow = pl.row;

                    switch (filteredPlacesByRow) {
                      case 4:
                        return (
                          <button
                            type="button"
                            key={pl.id}
                            className="w-[11px] h-[11px] text-[0.5vw] border-[1px] border-gray-500 rounded-full flex justify-center items-center hover:cursor-pointer"
                            style={{
                              background: isActivePlace ? "green" : "#c9cbcb",
                            }}
                            onClick={() => handleTogglerPlace(pl.id)}
                          >
                           
                          </button>
                        );
                      default:
                        return;
                    }
                  })}
                </div>
              </div> */}
            </div>
          </div>
          {/* right */}
          <div className="flex flex-col items-center bg-red-200">
            <h4>{/* {placesDataRight[0]} - {placesDataRight[0].length} */}</h4>
          </div>
          {/* {placesData[0].map((place) => (<div key={place}></div>))} */}
          {/* {places.map((place) => (
            <div key={place.id}></div>
          ))} */}
        </div>
      </div>
      {isCart && (
        <div className="w-[30vw] h-screen bg-white absolute top-0 right-0 p-4">
          <button
            type="button"
            className="text-black absolute top-2 right-4"
            onClick={handlerTaggleCart}
          >
            &#10006;
          </button>
          <h4 className="text-black text-xl text-center mt-2">Cart</h4>
          <div>
            <p className="text-black text-xl">row - 1</p>
            <p className="text-black text-xl">place - 11</p>
          </div>
        </div>
      )}
    </main>
  );
}
