import "../styles/globals.css";
import "../styles/App.css";
import Footer from "../public/components/Footer";
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
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
