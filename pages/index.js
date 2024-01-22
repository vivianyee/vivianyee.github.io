import Head from "next/head";
import TitleScreen from "./home";
import Layout from "../public/components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vivian Yee</title>
        <link rel="icon" href="https://i.imgur.com/YuNLXe1.png" />
      </Head>
      <div
        class="mobile-adjust centralBody"
      >
        <Layout>
          <TitleScreen />
        </Layout>
      </div>
    </>
  );
}
