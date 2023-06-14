// @ts-nocheck
import React from "react";
import MyRouter from "routers/index";

import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import {
  configureChains,
  createConfig,
  WagmiConfig,
  createClient,
} from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  goerli,
  bscTestnet,
} from "wagmi/chains";

import { alchemyProvider } from "wagmi/providers/alchemy";

import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const projectId = "HYF8ezl7Y6MVyFvSMIb6Mdhwbf90DeRq";

const {
  provider,
  chains,
  publicClient,
  webSocketProvider,
  webSocketPublicClient,
} = configureChains(
  [bscTestnet],
  [
    alchemyProvider({ apiKey: projectId }),
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://data-seed-prebsc-1-s1.binance.org:8545`,
      }),
    }),
    publicProvider(),
  ]
);

const { wallets } = getDefaultWallets({
  appName: "RaiX Web3",
  projectId,
  chains,
});

const dAppInfo = {
  appName: "RaiX Web3",
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);

/* const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
  // added connectors from rainbowkit
  connectors,
}); */

const wagmiConfig = createConfig({
  provider,
  webSocketProvider,
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        appInfo={dAppInfo}
        theme={darkTheme({
          accentColor: "#0991b1",
          accentColorForeground: "white",
          borderRadius: "small",
          fontStack: "system",
          overlayBlur: "small",
          connectButtonBackground: "#0991b1",
          menuItemBackground: "#0991b1",
          modalBackground: "#0991b1",
        })}
      >
        <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
          <MyRouter />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
