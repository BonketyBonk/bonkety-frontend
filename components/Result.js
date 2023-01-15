import React from "react";
import Image from "next/image";
import BonkImage from "../public/images/bonk_anime.gif";

const Winner = () => {
  return (
    <div class="container my-5 px-6 mx-auto">
      <div class="bg-yellow-100 overflow-hidden relative">
        <div class="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 class="text-3xl font-extrabold text-black sm:text-4xl">
            <span class="block">[Win Status]</span>
            <span class="block text-orange-400">[NAME] got rekt.</span>
          </h2>
          <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
              <button
                type="button"
                class="text-white bg-orange-400 hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Play again with the same settings
              </button>
              <button
                type="button"
                class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-yellow-300 rounded-full hover:bg-yellow-400 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
              >
                Start again
              </button>
            </div>
          </div>
        </div>
        <Image
          src={BonkImage}
          class="absolute top-0 right-0 hidden h-full w-2/3 lg:block"
        />
      </div>
    </div>
  );
};

export default Winner;
