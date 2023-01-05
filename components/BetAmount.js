import React from "react";

const BetAmount = () => {
  return (
    <div class="container my-5 px-6 mx-auto">
      <section class="mb-5 text-gray-800 text-center">
        <h1 class="text-3xl font-bold mb-12">
          BET <div class="text-orange-400">AMOUNT</div>
          <p class="text-xs text-gray-500 mb-4">(Subject to 3.5% fees)</p>
        </h1>
        <div class="inline-flex w-full rounded-md shadow-sm" role="group">
          <button
            type="button"
            class="px-4 py-2 w-1/6 text-sm font-medium text-orange-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-orange-400 dark:border-orange-600 dark:text-white dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-600 dark:focus:text-white"
          >
            1 MILLION BONK
          </button>
          <button
            type="button"
            class="px-4 py-2 w-1/6 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-orange-400 dark:border-orange-600 dark:text-white dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-600 dark:focus:text-white"
          >
            1.5 MILLION BONK
          </button>
          <button
            type="button"
            class="px-4 py-2 w-1/6 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-orange-400 dark:border-orange-600 dark:text-white dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-600 dark:focus:text-white"
          >
            5 MILLION BONK
          </button>
          <button
            type="button"
            class="px-4 py-2 w-1/6 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-orange-400 dark:border-orange-600 dark:text-white dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-600 dark:focus:text-white"
          >
            10 MILLION BONK
          </button>
          <button
            type="button"
            class="px-4 py-2 w-1/6 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-orange-400 dark:border-orange-600 dark:text-white dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-600 dark:focus:text-white"
          >
            20 MILLION BONK
          </button>
          <button
            type="button"
            class="px-4 py-2 w-1/6 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-orange-400 dark:border-orange-600 dark:text-white dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-600 dark:focus:text-white"
          >
            30 MILLION BONK
          </button>
        </div>
      </section>
    </div>
  );
};

export default BetAmount;
