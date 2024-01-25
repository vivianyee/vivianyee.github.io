import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Description({ selectionData }) {
  const router = useRouter();

  return (
    <div>
        <motion.h4
        style={{
          width:"fit-content",
          cursor: "pointer",
        }}
        onClick={() => router.back()}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        >
        &lt; Back
        </motion.h4>
      <h3
        className="heading"
        style={{
          paddingBottom: "10px",
          margin: "0",
        }}>
        {selectionData.dataName}
      </h3>
      <div 
      className="description-subheadings"
        style={{
          borderBottom: "1px solid white",
          paddingBottom: "20px",
          marginBottom: "20px",
        }}>
        {selectionData.summary}</div>
      <div
        className="description-subheadings"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h4>{selectionData.position}</h4>
        <h4>
          <i>{selectionData.date}</i>
        </h4>
      </div>
      {selectionData.description.map((data) => {
        return (
          <h4 style={{ margin: "5px" }} className="about-paragraph" key={data}>
            &emsp; {data}
            <br />
          </h4>
        );
      })}
      {/* {selectionData.name === "HOBBIES" && (
        <a
          style={{ color: "white" }}
          href="https://www.instagram.com/vmy_art_profile/"
        >
          INSTAGRAM
        </a>
      )} */}
      <h4 className="description-subheadings center">
        - <b>{selectionData.tech}</b> -
      </h4>
    </div>
  );
}
