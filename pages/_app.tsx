import React from "react";
import "../styles/globals.css";
import normalizeCss from "../node_modules/normalize.css/normalize.css";
import theme from "../styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { WagmiConfig, createClient, chain } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  const client = createClient(
    getDefaultClient({
      appName: "w3meta",
      alchemyId: process.env.alchemyId,
      chains: [chain.polygon, chain.mainnet],
    })
  );

  return (
    <ChakraProvider theme={theme}>
      <WagmiConfig client={client}>
        <ConnectKitProvider>
          <Component {...pageProps} />
        </ConnectKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
}

export default App;
