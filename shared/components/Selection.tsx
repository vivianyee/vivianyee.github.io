import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Selection({ title, selections }) {
  const router = useRouter();
  const [hoverHeading, setHoverHeading] = useState("");

  return (
    <div>
      {title !== "Vivian Yee" && (
        <motion.h4
          style={{
            width: "fit-content",
            cursor: "pointer",
          }}
          onClick={() => router.back()}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          &lt; Back
        </motion.h4>
      )}
      <h3
        className="heading"
        style={{
          borderBottom: "1px solid white",
          paddingBottom: "20px",
          marginBottom: "20px",
          marginTop: "0",
        }}
      >
        {title}
      </h3>
      <div style={{ width: "90%" }}>
        {selections.map((heading) => (
          <Link
            key={heading.url}
            href={heading.url}
            style={{ textDecoration: "none", color: "black" }}
          >
            <motion.h2
              style={{
                width: "fit-content",
                color: "white",
                padding: "15px 15px 15px 0",
                cursor: "pointer",
                margin: "0",
              }}
              onHoverStart={() => setHoverHeading(heading.name)}
              onHoverEnd={() => setHoverHeading("")}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              &emsp; {heading.name} {hoverHeading === heading.name && "<-"}
            </motion.h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
