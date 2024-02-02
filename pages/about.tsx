import Head from "next/head";
import Image from "next/image";
import { getCollections } from "../lib/mongo/collections";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Layout from "@shared/components/Layout";

export default function About({ about }) {
  const router = useRouter();

  return (
    <div className="centralBody">
      <Layout>
        <Head>
          <title>ABOUT</title>
          <link rel="icon" href="https://i.imgur.com/YuNLXe1.png" />
        </Head>
        <motion.h4
          className="text-sm md:text-base w-fit mb-2 md:mb-5 cursor-pointer"
          onClick={() => router.back()}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          &lt; Back
        </motion.h4>
        <h3 className="text-2xl md:text-4xl border-white border-b pb-3 md:pb-5 mb-3 md:mb-5 mt-0">
          Vivian Yee
        </h3>
        {/* <div style={{position:'relative', width:"10vw", height:"10vw"}}>
        <Image loader={()=>src} fill={true} src={src}/>
      </div> */}
        {about.map((data) => {
          return (
            <h4 className="m-1 text-xs md:text-base" key={data}>
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
