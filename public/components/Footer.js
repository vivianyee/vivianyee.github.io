import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { pathToAnimation } from "../constants/constants";
import Link from "next/link";

export default function Footer() {
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
      class="footer"
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "5rem"
      }}
    >
      {/* <a
        href="../vivian-resume.pdf"
        className="center"
        download
        style={{
          textDecoration: "none",
          color: "black",
        }}
      >
        <motion.h2
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          style={{
            color: "white",
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          RESUME
        </motion.h2>
      </a> */}
      <a
        href="../vivian-resume.pdf"
        className="center"
        download
      >
        <motion.div
          onHoverStart={() => setHoverFoot(true)}
          onHoverEnd={() => setHoverFoot(false)}  
          style={{
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          <Image
            class="fly footer"
            alt="OOPS"
            style={{
              position: "absolute",
              left: `${imagePosition}px`,
              bottom: "30px",
            }}
            src={
              !hoverFoot && pathToAnimation[currentTab]
                ? require(`../animation/${pathToAnimation[currentTab]}/${pathToAnimation[currentTab]}.00${image}.png`)
                : require(`../animation/click.png`)
            }
          />
        </motion.div>
      </a>
    </div>
  );
}
