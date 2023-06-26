import Description from "../../public/components/Description";
import experiencesJSON from "../../public/json/experiences.json"

export default function RocketMortgage() {
  return <Description title="ROCKET MORTGAGE" selectionData={experiencesJSON.selections[0]}/>;
}
