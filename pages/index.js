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
        class="home-center mobile-adjust"
        style={{
          // border: "3px solid white",
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
