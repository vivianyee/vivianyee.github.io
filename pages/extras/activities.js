import Description from "../../public/components/Description";
import extrasJSON from "../../public/json/extras.json"

export default function Activities() {
  return <Description title="ACTIVTIES" selectionData={extrasJSON.selections[0]}/>;
}
