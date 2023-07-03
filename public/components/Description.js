import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Description({ selectionData }) {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div
      class="mobile-adjust"
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
        <motion.h4
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          style={{ margin: 0 }}
          class="description-subheadings"
        >
          &#60; BACK
        </motion.h4>
      </Link>
      <div
        style={{
          // border: "3px solid black",
          width: "75%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "48px",
          textAlign: "center",
        }}
      >
        <h3 style={{ textAlign: "center" }}>{selectionData.dataName}</h3>
        <h4
          class="description-subheadings"
          style={{ margin: "0", textAlign: "center" }}
        >
          {selectionData.date}
        </h4>
        {isMobile ? null : (
          <Image
            alt="OOPS"
            class="nav-bar"
            style={{
              width: "12rem",
              height: "12rem"}}
            src={require(`../images/${selectionData.image}`)}
          />
        )}
        <h4 class="description-subheadings" style={{ textAlign: "center" }}>
          {selectionData.position}
        </h4>
        {selectionData.description.map((data) => {
          return (
            <h4 style={{ margin: "5px" }} class="about-paragraph">
              {data}
              <br />
            </h4>
          );
        })}
        {selectionData.name === "HOBBIES" && <a style={{color:"white"}} href="https://www.instagram.com/vmy_art_profile/">INSTAGRAM</a>}
        <h4 class="description-subheadings">- {selectionData.tech} -</h4>
      </div>
    </div>
  );
}
