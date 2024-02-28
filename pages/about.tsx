import Head from "next/head";
import Image from "next/image";
import { getCollections } from "../lib/mongo/collections";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Layout from "@shared/components/Layout";
import {
  FileTextOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import Subheading from "@shared/components/Subheading";

export default function About({ about }) {
  const router = useRouter();

  const links = [
    {
      href: "https://github.com/vivianyee/vivianyee.github.io",
      tag: <GithubOutlined />,
    },
    {
      href: "https://www.linkedin.com/in/vivian-yee/",
      tag: <LinkedinOutlined />,
    },
    {
      href: "../vivian-resume.pdf",
      tag: <FileTextOutlined />,
    },
  ];

  return (
    <div className="centralBody">
      <Layout>
        <Head>
          <title>ABOUT</title>
          <link rel="icon" href="https://i.imgur.com/YuNLXe1.png" />
        </Head>
        <div className="max-h-[70vh] inline-flex flex-col">
          <Subheading/>
          <h3 className="text-2xl md:text-4xl mb-3 md:mb-5 mt-0">Vivian Yee</h3>
          {/* <div style={{position:'relative', width:"10vw", height:"10vw"}}>
        <Image loader={()=>src} fill={true} src={src}/>
      </div> */}
          <div className="overflow-y-scroll description border-white border-t border-b pt-2 pb-2">
            {about.map((data) => {
              return (
                <h4 className="m-1 text-xs md:text-base" key={data}>
                  &emsp; {data}
                  <br />
                </h4>
              );
            })}
          </div>

          <div className="justify-center flex m-4">
            {links.map((x) => {
              return (
                <motion.a
                  className="pl-6 pr-6 text-xl md:text-3xl"
                  href={x.href}
                  key={x.href}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  {x.tag}
                </motion.a>
              );
            })}
          </div>
        </div>
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
