import Head from "next/head";
import { getCollections } from "@lib/mongo/collections";
import Layout from "@public/components/Layout";
import Selection from "@public/components/Selection";

export default function SelectionPage({ title, selectionData }) {
  return (
    <div className="mobile-adjust centralBody">
      <Layout>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="https://i.imgur.com/YuNLXe1.png" />
        </Head>
        <Selection title={title} selections={selectionData} />
      </Layout>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { selection: "experiences" } },
      { params: { selection: "extras" } },
      { params: { selection: "projects" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const props = {};

  const { collection } = await getCollections();
  if (!collection) {
    throw new Error(`Failed to fetch ${params.selection}`);
  }

  switch (params.selection) {
    case "experiences":
      props.title = "Work Experiences";
      break;
    case "extras":
      props.title = "My Interests";
      break;
    default:
      props.title = "Technical Projects";
      break;
  }

  if(!collection[0]){
    props.selectionData = [];
    return {
      props: props,
    };
  }

  delete collection[0]["_id"];
  props.selectionData = Object.values(collection[0][params.selection]);

  return {
    props: props,
  };
}
