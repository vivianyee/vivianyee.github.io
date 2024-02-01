import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { pathToAnimation } from "../lib/constants";

export default function Footer() {
  const url = "https://vivianyeebucket.s3.amazonaws.com";

  const { asPath } = useRouter();
  const currentTab = asPath.split("/")[1];
  const [hoverFoot, setHoverFoot] = useState(false);
  const [image, setImage] = useState(1);
  const [imagePosition, setImagePosition] = useState(-160);

  useEffect(() => {
    if (!hoverFoot) {
      setTimeout(() => {
        image === 8 ? setImage(1) : setImage(image + 1);
        imagePosition + 5 >= window.innerWidth
          ? setImagePosition(-160)
          : setImagePosition(imagePosition + 5);
      }, 50);
    }
  });

  return (
    <div
      className="footer"
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "5rem",
      }}
    >
      <a href="../vivian-resume.pdf" className="center" download>
        <motion.div
          onHoverStart={() => setHoverFoot(true)}
          onHoverEnd={() => setHoverFoot(false)}
          style={{
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          <Image
            className="fly footer"
            alt="OOPS"
            style={{
              position: "absolute",
              left: `${imagePosition}px`,
              bottom: "30px",
            }}
            src={`${url}/${pathToAnimation[currentTab]}.00${image}.png`}
            width={150}
            height={150}
          />
        </motion.div>
      </a>
    </div>
  );
}
