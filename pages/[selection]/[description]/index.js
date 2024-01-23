import Head from "next/head";
import { getCollections } from "@lib/mongo/collections";
import Layout from "@public/components/Layout";
import Description from "@public/components/Description";

export default function DescriptionPage({ route, title, page, selectionData }) {
    return (
        <div
          class="mobile-adjust centralBody"
        >
          <Layout>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="https://i.imgur.com/YuNLXe1.png" />
            </Head>
            <Description selectionData={selectionData[page][route]}/>
            </Layout>
        </div>
    )
}

export async function getServerSideProps(context) {
    const props = {}
    const {selection, description} = context.params;
    props.title = description.split("-").join(" ").toLocaleUpperCase();
    props.page = selection;
    props.route = description;

    const { collection } = await getCollections(selection);
    if(!collection){
        throw new Error(`Failed to fetch ${selection}`);
    }
    delete collection[0]['_id'];
    props.selectionData = collection[0];

    return { 
        props: props
    }; 
} 
