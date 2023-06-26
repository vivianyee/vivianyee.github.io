import "../styles/globals.css";
import "../styles/App.css";
import NavBar from "../public/components/NavBar";
import Footer from "../public/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <div className="App">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
