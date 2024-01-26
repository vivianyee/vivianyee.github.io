import Head from "next/head";
import { getCollections } from "@lib/mongo/collections";
import Layout from "@public/components/Layout";
import Selection from "@public/components/Selection";

export default function SelectionPage({ route, title, selectionData }) {
  let selectArray = [];

  if (selectionData && selectionData[route]) {
    selectArray = Object.values(selectionData[route]);
  }

  return (
    <div className="mobile-adjust centralBody">
      <Layout>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="https://i.imgur.com/YuNLXe1.png" />
        </Head>
        <Selection title={title} selections={selectArray} />
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
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const props = {};
  props.route = params.selection;

  const { collection } = await getCollections();
  if (!collection) {
    throw new Error(`Failed to fetch ${params.selection}`);
  }

  delete collection[0]["_id"];
  props.selectionData = collection[0];

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

  return {
    props: props,
  };
}
