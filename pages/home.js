import { subHeadings } from "../public/constants/constants";
import Selection from "@public/components/Selection";

export default function TitleScreen() {
  return (<Selection title={"Vivian Yee"} selections={subHeadings}/>);
}
