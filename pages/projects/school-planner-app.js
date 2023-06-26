import Description from "../../public/components/Description";
import projectsJSON from "../../public/json/projects.json"

export default function SchoolPlanner() {
  return <Description title="SCHOOL PLANNER APP" selectionData={projectsJSON.selections[2]}/>;
}
