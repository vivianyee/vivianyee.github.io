import { motion } from "framer-motion";
import React, { useState } from "react";
import { subHeadings } from "../public/constants/constants";
import Link from "next/link";

export default function TitleScreen() {
  const [hoverHeading, setHoverHeading] = useState("");

  return (
    <>
      <h2
        class="heading"
        style={{
          textAlign: "center",
        }}
      >
        Vivian Yee
      </h2>
      <div style={{ width: "90%" }}>
        {subHeadings.map((heading) => (
          <Link
            key={heading.path}
            href={heading.path}
            style={{ textDecoration: "none", color: "black" }}
          >
            {hoverHeading === heading.title && (
              <motion.h2
                style={{
                  color: "white",
                  display: "inline-block",
                  position: "absolute",
                  padding: "25px",
                  paddingLeft: "0px",
                  margin: "0",
                }}
              >
                {">"}
              </motion.h2>
            )}
            <motion.h2
              className="center"
              style={{
                color: "white",
                padding: "25px",
                cursor: "pointer",
                margin: "0",
              }}
              onHoverStart={() => setHoverHeading(heading.title)}
              onHoverEnd={() => setHoverHeading("")}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {heading.title}
            </motion.h2>
          </Link>
        ))}
      </div>
    </>
  );
}
