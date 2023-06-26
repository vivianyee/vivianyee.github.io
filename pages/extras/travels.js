import Description from "../../public/components/Description";
import extrasJSON from "../../public/json/extras.json"

export default function Travels() {
  return <Description title="TRAVELS" selectionData={extrasJSON.selections[2]}/>;
}
