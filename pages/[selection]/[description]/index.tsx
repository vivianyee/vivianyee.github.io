import Head from "next/head";
import { getCollections } from "../../../lib/mongo/collections";
import Layout from "@shared/components/Layout";
import Description from "@shared/components/Description";
import { arrayOfPages, indexOfSelections } from "@shared/lib/constants";
import React from "react";
import { pagesProps } from "@shared/lib/types";

export default function DescriptionPage({ title, descriptionData }) {
  return (
    <div className="mobile-adjust centralBody">
      <Layout>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="https://i.imgur.com/YuNLXe1.png" />
        </Head>
        <Description descriptionData={descriptionData} />
      </Layout>
    </div>
  );
}
export async function getStaticPaths() {
  const paths = arrayOfPages.map((x) => {
    return { params: { selection: indexOfSelections[x], description: x } };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const props: pagesProps = {
    title: "",
    descriptionData: {},
  };

  props.title = params.description.split("-").join(" ").toLocaleUpperCase();

  const { collection } = await getCollections();
  if (!collection) {
    throw new Error(`Failed to fetch ${params.selection}`);
  }

  if (!collection[0]) {
    props.descriptionData = { description: [] };
    return {
      props: props,
    };
  }
  delete collection[0]["_id"];
  props.descriptionData = collection[0][params.selection][params.description];

  return {
    props: props,
  };
}
