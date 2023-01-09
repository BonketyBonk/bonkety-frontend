import React from "react";
import Image from "next/image";
import useBettingStore from "../lib/zustand/bettingZustand";

import DoKwonImage from "../public/images/Do_Kwon.jpg";
import CarolineEllisonImage from "../public/images/Caroline_Ellison.jpg";
import SBFImage from "../public/images/Sam_Bankman_Fried.jpg";

const ChooseOpponent = () => {
  const opponent = useBettingStore((state) => state.bonkAgainst);
  const pickOpponent = useBettingStore((state) => state.setBonkAgainst);

  return (
    <div class="container my-5 px-6 mx-auto">
      <section class="mb-5 text-gray-800 text-center">
        <div className="mb-12"></div>
        <div class="py-6 sm:py-8 lg:py-12">
          <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <div class="mb-10 md:mb-16">
              <h1 class="text-white text-2xl lg:text-4xl font-bold text-left mb-4 md:mb-6">
                BONK{" "}
                <h2
                  class={`text-orange-100 ${
                    opponent ? "" : "opacity-0 select-none"
                  }`}
                >
                  {opponent || "none selected"}
                </h2>
              </h1>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-8">
              <div>
                <a
                  href="#"
                  class="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg relative mb-2 lg:mb-3"
                >
                  <Image
                    src={SBFImage}
                    onClick={() => pickOpponent("Sam Bankman-Fried")}
                    loading="lazy"
                    alt="Sam Bankman-Fried"
                    class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                  />

                  <div class="flex gap-2 absolute left-0 bottom-2">
                    <span class="bg-red-500 text-white text-sm font-semibold tracking-wider uppercase rounded-r-lg px-3 py-1.5">
                      10% Win Potential
                    </span>
                    <span class="bg-green-400 text-gray-800 text-sm font-bold tracking-wider uppercase rounded-lg px-3 py-1.5">
                      10x ROI on Win
                    </span>
                  </div>
                </a>

                <div class="flex justify-between items-start gap-2 px-2">
                  <div class="flex flex-col">
                    <a
                      href="#"
                      class="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
                    >
                      SBF
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="#"
                  class="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg relative mb-2 lg:mb-3"
                >
                  <Image
                    src={DoKwonImage}
                    loading="lazy"
                    onClick={() => pickOpponent("Do Kwon")}
                    alt="Do Kwon"
                    class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                  />

                  <div class="flex gap-2 absolute left-0 bottom-2">
                    <span class="bg-red-500 text-white text-sm font-semibold tracking-wider uppercase rounded-r-lg px-3 py-1.5">
                      25% Win Potential
                    </span>
                    <span class="bg-green-400 text-gray-800 text-sm font-bold tracking-wider uppercase rounded-lg px-3 py-1.5">
                      4x ROI on Win
                    </span>
                  </div>
                </a>

                <div class="flex justify-between items-start gap-2 px-2">
                  <div class="flex flex-col">
                    <a
                      href="#"
                      class="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
                    >
                      Do Kwon
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="#"
                  class="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg relative mb-2 lg:mb-3"
                >
                  <Image
                    src={CarolineEllisonImage}
                    loading="lazy"
                    onClick={() => pickOpponent("Caroline Ellison")}
                    alt="Caroline Ellison"
                    class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                  />

                  <div class="flex gap-2 absolute left-0 bottom-2">
                    <span class="bg-red-500 text-white text-sm font-semibold tracking-wider uppercase rounded-r-lg px-3 py-1.5">
                      50% Win Potential
                    </span>
                    <span class="bg-green-400 text-gray-800 text-sm font-bold tracking-wider uppercase rounded-lg px-3 py-1.5">
                      2x ROI on Win
                    </span>
                  </div>
                </a>

                <div class="flex justify-between items-start gap-2 px-2">
                  <div class="flex flex-col">
                    <a
                      href="#"
                      class="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
                    >
                      Caroline Ellison
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChooseOpponent;
