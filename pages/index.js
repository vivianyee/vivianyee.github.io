import Head from "next/head";
import TitleScreen from "./home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vivian Yee</title>
        <link rel="icon" href="https://i.imgur.com/YuNLXe1.png" />
      </Head>
      <div
        style={{
          // border: "3px solid white",
          padding: "30px 70px",
          // boxShadow: "10px 5px 5px grey",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TitleScreen />
      </div>
    </>
  );
}
