import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";
import Subheading from "./Subheading";

export default function Description({ descriptionData }) {
  return (
    <div className="max-h-[70vh] inline-flex flex-col">
      <div className="pb-2">
        <Subheading />
        <h3 className="text-2xl md:text-4xl pb-1 md:pb-3 m-0">
          {descriptionData.dataName}
        </h3>
        <div className="text-sm md:text-lg pb-1 md:pb-3 flex justify-between">
          <h4>{descriptionData.position}</h4>
          <h4>
            <i>{descriptionData.date}</i>
          </h4>
        </div>
      </div>
      <div className="overflow-y-scroll description border-white border-t border-b pt-2 pb-2">
        {descriptionData.description.map((data) => {
          return (
            <h4 className="m-1 text-xs md:text-base" key={data}>
              &emsp; {data}
              <br />
            </h4>
          );
        })}
      </div>
      {/* {descriptionData.name === "HOBBIES" && (
        <a
          style={{ color: "white" }}
          href="https://www.instagram.com/vmy_art_profile/"
        >
          INSTAGRAM
        </a>
      )} */}
      <div className="flex-col items-center flex m-4">
        <h3 className="text-center text-xs md:text-base mb-2">
          {descriptionData.summary}
        </h3>
        <h3 className="text-center text-xs md:text-base">
          <b>- {descriptionData.tech} -</b>
        </h3>
      </div>
    </div>
  );
}
