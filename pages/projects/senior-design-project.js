import Description from "../../public/components/Description";
import projectsJSON from "../../public/json/projects.json"

export default function SeniorDesign() {
  return <Description title="SENIOR DESIGN PROJECT" selectionData={projectsJSON.selections[1]}/>;
}
