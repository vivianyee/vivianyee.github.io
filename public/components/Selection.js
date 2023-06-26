import Head from "next/head";
import experiencesJSON from "../json/experiences.json";
import extrasJSON from "../json/extras.json";
import projectsJSON from "../json/projects.json";
import Thumbnail from "./Thumbnail";

export default function Selection({ titleSelection }) {
  let title, selectionData;

  switch (titleSelection) {
    case "experiences":
      title = "WORK EXPERIENCE";
      selectionData = experiencesJSON.selections;
      break;
    case "extras":
      title = "EXTRA FACT";
      selectionData = extrasJSON.selections;
      break;
    case "projects":
      title = "PROJECT";
      selectionData = projectsJSON.selections;
      break;
  }

  return (
    <>
      <Head>
        <title>{titleSelection}</title>
        <link rel="icon" href="https://i.imgur.com/YuNLXe1.png" />
      </Head>
      <Thumbnail
        selection={titleSelection}
        title={title}
        col={8}
        selectionData={selectionData}
      />
    </>
  );
}
