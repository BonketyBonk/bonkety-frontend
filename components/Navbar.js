import React from "react";
import {
  WalletDisconnectButton,
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

const Navbar = () => {
  const { publicKey } = useWallet();

  return (
    <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#" class="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap text-white">
            BonketyBonk
          </span>
        </a>
        <div class="flex md:order-2">
          <li className="block rounded-md bg-orange-400">
            {publicKey ? <WalletDisconnectButton /> : <WalletMultiButton />}
          </li>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="https://www.bonkcoin.com/"
                target="_blank"
                class="block py-2 pl-3 pr-4 text-orange-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0"
              >
                BONK OFFICIAL
              </a>
            </li>
            <li>
              <a
                href="https://www.bonkcoin.com/one-pager"
                target="_blank"
                class="block py-2 pl-3 pr-4 text-orange-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0"
              >
                ONE PAGER
              </a>
            </li>
            <li>
              <a
                href="https://www.bonkcoin.com/integrations"
                target="_blank"
                class="block py-2 pl-3 pr-4 text-orange-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0"
              >
                INTEGRATIONS
              </a>
            </li>
            <li>
              <a
                href="https://jup.ag/swap/SOL-Bonk"
                target="_blank"
                class="block py-2 pl-3 pr-4 text-yellow-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0"
              >
                BUY $BONK
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
