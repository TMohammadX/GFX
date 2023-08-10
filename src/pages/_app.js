import "@/styles/globals.css";

import GlobalStateContext from "../contexts/GlobalState.js";
import { useState } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [isFirstMount, setIsFirstMount] = useState(true);
  return (
    <GlobalStateContext.Provider value={{ isFirstMount, setIsFirstMount }}>
      <Head>
        <title>GFX STUDIO</title>
      </Head>
      <Component {...pageProps} />
    </GlobalStateContext.Provider>
  );
}
