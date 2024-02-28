import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import { LeftOutlined } from "@ant-design/icons";
import Subheading from "./Subheading";

export default function Selection({ title, selections }) {
  const [hoverHeading, setHoverHeading] = useState("");

  return (
    <div>
      <Subheading />
      <h3 className="text-3xl md:text-5xl border-b-2 border-white pb-5 mb-5 mt-0">
        {title}
      </h3>
      <div>
        {selections.map((heading) => (
          <Link key={heading.url} href={heading.url} className="no-underline">
            <motion.h2
              className="w-fit text-white p-2 md:p-4 pl-0 cursor-pointer m-0"
              onHoverStart={() => setHoverHeading(heading.name)}
              onHoverEnd={() => setHoverHeading("")}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              &emsp; {heading.name}{" "}
              {hoverHeading === heading.name && (
                <LeftOutlined className="justify-center align-middle pb-1" />
              )}
            </motion.h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
