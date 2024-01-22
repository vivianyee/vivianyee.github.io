import { subHeadings } from "../public/constants/constants";
import Select from "../public/components/Selection";

export default function TitleScreen() {
  return (<Select title={"Vivian Yee"} selections={subHeadings}/>);
}
