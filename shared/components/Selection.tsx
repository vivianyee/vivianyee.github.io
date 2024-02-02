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
          className="w-fit mb-5 cursor-pointer"
          onClick={() => router.back()}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          &lt; Back
        </motion.h4>
      )}
      <h3 className="text-5xl border-b-2 border-white pb-5 mb-5 mt-0">
        {title}
      </h3>
      <div>
        {selections.map((heading) => (
          <Link key={heading.url} href={heading.url} className="no-underline">
            <motion.h2
              className="w-fit text-white p-4 pl-0 cursor-pointer m-0"
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
