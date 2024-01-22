import "../styles/globals.css";
import "../styles/App.css";
import NavBar from "../public/components/NavBar";
import Footer from "../public/components/Footer";
import MobileNavBar from "../public/components/MobileNavBar";
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      {/* <MobileNavBar /> */}
      {/* <NavBar /> */}
      <div className="App">
        <AnimatePresence className="App" mode="wait" initial={false}>
          <Component {...pageProps} />
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
