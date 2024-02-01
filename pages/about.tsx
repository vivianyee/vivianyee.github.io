import Head from "next/head";
import Image from "next/image";
import { getCollections } from "../lib/mongo/collections";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Layout from "@shared/components/Layout";

export default function About({ about }) {
  const src = "https://vivianyeebucket.s3.amazonaws.com/me.jpg";
  const router = useRouter();

  return (
    <div className="centralBody">
      <Layout>
        <Head>
          <title>ABOUT</title>
          <link rel="icon" href="https://i.imgur.com/YuNLXe1.png" />
        </Head>
        <motion.h4
          style={{
            width: "fit-content",
            cursor: "pointer",
          }}
          onClick={() => router.back()}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          &lt; Back
        </motion.h4>
        <h3
          className="heading"
          style={{
            borderBottom: "1px solid white",
            paddingBottom: "20px",
            marginBottom: "20px",
            marginTop: "0",
          }}
        >
          Vivian Yee
        </h3>
        {/* <div style={{position:'relative', width:"10vw", height:"10vw"}}>
        <Image loader={()=>src} fill={true} src={src}/>
      </div> */}
        {about.map((data) => {
          return (
            <h4
              style={{ margin: "5px" }}
              className="about-paragraph"
              key={data}
            >
              &emsp; {data}
              <br />
            </h4>
          );
        })}
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const { collection } = await getCollections();
  if (!collection) {
    throw new Error(`Failed to fetch about`);
  }

  if (!collection[0]) {
    return { props: { about: [] } };
  }

  return { props: { about: collection[0]["about"] } };
}