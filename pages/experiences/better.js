import Description from "../../public/components/Description";
import experiencesJSON from "../../public/json/experiences.json"

export default function Better() {
  return <Description title="BETTER" selectionData={experiencesJSON.selections[1]}/>;
}
