import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Description({ descriptionData }) {
  const router = useRouter();

  return (
    <div>
      <motion.h4
        className="w-fit mb-5 cursor-pointer"
        onClick={() => router.back()}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        &lt; Back
      </motion.h4>
      <h3 className="text-4xl pb-3 m-0">{descriptionData.dataName}</h3>
      <div className="text-lg border-white border-b pb-5 mb-5">
        {descriptionData.summary}
      </div>
      <div className="text-lg flex justify-between">
        <h4>{descriptionData.position}</h4>
        <h4>
          <i>{descriptionData.date}</i>
        </h4>
      </div>
      {descriptionData.description.map((data) => {
        return (
          <h4 className="m-1 text-base" key={data}>
            &emsp; {data}
            <br />
          </h4>
        );
      })}
      {/* {descriptionData.name === "HOBBIES" && (
        <a
          style={{ color: "white" }}
          href="https://www.instagram.com/vmy_art_profile/"
        >
          INSTAGRAM
        </a>
      )} */}
      <h4 className="text-base m-4 center">
        - <b>{descriptionData.tech}</b> -
      </h4>
    </div>
  );
}
