import { subHeadings } from "../shared/lib/constants";
import Selection from "shared/components/Selection";

export default function TitleScreen() {
  return (<Selection title={"Vivian Yee"} selections={subHeadings}/>);
}
