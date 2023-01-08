import React from "react";
import Image from "next/image";
import useBettingStore from "../lib/zustand/bettingZustand";

import DoKwonImage from "../public/images/Do_Kwon.jpg";
import CarolineEllisonImage from "../public/images/Caroline_Ellison.jpg";
import SBFImage from "../public/images/Sam_Bankman_Fried.jpg";

const ChooseOpponent = () => {
  const betAmount = useBettingStore((state) => state.betAmount);
  const opponent = useBettingStore((state) => state.bonkAgainst);
  const pickOpponent = useBettingStore((state) => state.setBonkAgainst);

  return (
    <div className="container py-5 px-6 mx-auto">
      <section className="mb-10 text-black-400 text-center">
        <h1 className="text-3xl font-bold mb-12">
          Choose who to <div className="text-orange-400">BONK</div> for{" "}
          {betAmount} against {opponent}
        </h1>

        <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
          <div className="mb-6 lg:mb-0">
            <div className="bg-white block rounded-lg shadow-lg">
              <div className="relative overflow-hidden bg-no-repeat bg-contain">
                <Image
                  src={SBFImage}
                  alt="Sam Bankman Fried"
                  className="w-full rounded-t-lg"
                />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                </a>
                <svg
                  className="absolute"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#fff"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="p-6 ">
                <h5 className="text-lg text-orange-400 font-bold mb-4">SBF</h5>
                <p className="text-gray-500 mb-4">
                  10% chance to win 10x your investment{" "}
                </p>
                <button
                  onClick={() => pickOpponent("Sam Bankman Fried")}
                  type="button"
                  class="inline-block px-6 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Select
                </button>
              </div>
            </div>
          </div>

          <div className="mb-6 lg:mb-0">
            <div className="bg-white block rounded-lg shadow-lg">
              <div className="relative overflow-hidden bg-no-repeat bg-contain">
                <Image
                  src={DoKwonImage}
                  alt="Do Kwon"
                  className="w-full rounded-t-lg"
                />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                </a>
                <svg
                  className="absolute"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#fff"
                    d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="p-6">
                <h5 className="text-lg text-orange-400 font-bold mb-4">
                  Do Kwon
                </h5>
                <p className="text-gray-500 mb-4">
                  25% chance to win 4x your investment{" "}
                </p>
                <button
                  onClick={() => pickOpponent("Do Kwon")}
                  type="button"
                  className="inline-block px-6 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Select
                </button>
              </div>
            </div>
          </div>

          <div className="">
            <div className="bg-white block rounded-lg shadow-lg">
              <div className="relative overflow-hidden bg-no-repeat bg-contain">
                <Image
                  src={CarolineEllisonImage}
                  alt="Caroline Ellison"
                  className="w-full rounded-t-lg"
                />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                </a>
                <svg
                  className="absolute"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#fff"
                    d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="p-6">
                <h5 className="text-lg text-orange-400 font-bold mb-4">
                  Caroline Ellison
                </h5>
                <p className="text-gray-500 mb-4">
                  50% chance to win 2x your investment{" "}
                </p>
                <button
                  onClick={() => pickOpponent("Caroline Ellison")}
                  type="button"
                  className="inline-block px-6 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChooseOpponent;
