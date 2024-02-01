import Head from "next/head";
import TitleScreen from "./home";
import Layout from "shared/components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vivian Yee</title>
        <link rel="icon" href="https://i.imgur.com/YuNLXe1.png" />
      </Head>
      <div
        className="mobile-adjust centralBody"
      >
        <Layout>
          <TitleScreen />
        </Layout>
      </div>
    </>
  );
}
