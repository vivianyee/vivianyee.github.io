import Head from "next/head";
import Layout from "@shared/components/Layout";
import { subHeadings } from "@shared/lib/constants";
import Selection from "@shared/components/Selection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vivian Yee</title>
        <link rel="icon" href="https://i.imgur.com/YuNLXe1.png" />
      </Head>
      <div className="centralBody">
        <Layout>
          <Selection title={"Vivian Yee"} selections={subHeadings} />
        </Layout>
      </div>
    </>
  );
}
