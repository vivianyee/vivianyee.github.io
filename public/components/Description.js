import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Description({ selectionData }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Link
        style={{
          textDecoration: "none",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          width: "80%",
        }}
        href={"./"}
      >
        <motion.h3 whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} style={{margin:0}}>
          &#60; BACK
        </motion.h3>
      </Link>
      <div
        style={{
          // border: "3px solid black",
          width: "75%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "48px",
          textAlign:"center"
        }}
      >
        <h3>{selectionData.dataName}</h3>
        <h4 style={{ margin: "0" }}>{selectionData.date}</h4>
        <Image
          alt="OOPS"
          style={{
            width: "15rem",
            height: "15rem",
          }}
          src={require(`../images/${selectionData.image}`)}
        ></Image>
        <h4>{selectionData.position}</h4>
        {selectionData.description.map((data)=>{
          return <h4 style={{ margin: "5px" }}>{data}<br/></h4>
        })}
        <h4>- {selectionData.tech} -</h4>
      </div>
    </div>
  );
}
