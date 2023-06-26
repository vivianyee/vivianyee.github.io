import Description from "../../public/components/Description";
import extrasJSON from "../../public/json/extras.json"

export default function Hobbies() {
  return <Description title="HOBBIES" selectionData={extrasJSON.selections[1]}/>;
}
