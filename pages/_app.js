import React, { useMemo } from "react";

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

import "@solana/wallet-adapter-react-ui/styles.css";
import "../styles/globals.css";
import Navbar from "/components/Navbar";

export default function App({ Component, pageProps }) {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <header>
          <WalletModalProvider>
            <Navbar />
          </WalletModalProvider>
        </header>
        <main className="bg-gradient-to-r from-orange-400 to-rose-400 mix-blend-overlay">
          <Component {...pageProps} />
        </main>
        <footer class="bg-gray-900">
          <h1 className="text-white text-xl text-left px-32 p-4 font-semibold whitespace-nowrap">
            25% BURNED, 25% TEAM, 50% NFT HOLDERS
          </h1>
        </footer>
      </WalletProvider>
    </ConnectionProvider>
  );
}
