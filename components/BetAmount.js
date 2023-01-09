import React from "react";
import useBettingStore from "../lib/zustand/bettingZustand";

const BetAmount = () => {
  const betAmount = useBettingStore((state) => state.betAmount);
  const setBetAmount = useBettingStore((state) => state.setBetAmount);
  const betAmounts = [1e6, 1.5e6, 5e6, 10e6, 20e6, 30e6];
  const formatter = Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "long",
  });

  return (
    <div class="container my-5 px-6 mx-auto">
      <section class="mb-5 text-gray-800 text-center">
        <div class="mb-10 md:mb-16">
          <h1 class="text-gray-800 text-2xl lg:text-4xl font-bold text-left mb-4 md:mb-6">
            FOR <h2 class="text-gray-100">{betAmount} $BONK</h2>
            <p class="text-xs text-gray-100">(Subject to 3% fees)</p>
          </h1>
        </div>
        <div class="inline-flex w-full rounded-md shadow-sm" role="group">
          {betAmounts.map((betAmount) => {
            return (
              <button
                key={betAmount.toString()}
                onClick={() => setBetAmount(betAmount)}
                type="button"
                class="px-4 py-2 w-1/6 text-sm font-medium text-orange-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-orange-400 dark:border-orange-600 dark:text-white dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-600 dark:focus:text-white"
              >
                {formatter.format(betAmount)}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default BetAmount;
