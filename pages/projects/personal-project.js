import Description from "../../public/components/Description";
import projectsJSON from "../../public/json/projects.json"

export default function PersonalProject() {
  return <Description title="PERSONAL WEBSITE PROJECT" selectionData={projectsJSON.selections[0]}/>;
}
