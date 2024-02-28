import "@styles/globals.css";
import "@styles/App.css";
import Footer from "@shared/components/Footer";
import Header from "@shared/components/Header";
import { AnimatePresence } from "framer-motion";
import React, { createContext, useState } from "react";

export const GuestContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [submitForm, setSubmitForm] = useState(0);

  return (
    <div className="relative">
      <GuestContext.Provider value={{ submitForm, setSubmitForm }}>
        <Header />
        <div className="App">
          <AnimatePresence mode="wait" initial={false}>
            <Component {...pageProps} />
          </AnimatePresence>
        </div>
      </GuestContext.Provider>
      <Footer />
    </div>
  );
}

export default MyApp;
