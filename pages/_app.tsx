import "@styles/globals.css";
import "@styles/App.css";
import Footer from "@shared/components/Footer";
import { AnimatePresence } from 'framer-motion'
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <div className="App">
        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} />
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
