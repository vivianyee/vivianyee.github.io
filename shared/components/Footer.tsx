import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { pathToAnimation } from "../lib/constants";

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
      }, 60);
    }
  });

  return (
    <div className="pb-20 absolute bottom-0 w-[100%] h-20 mb-0">
      <a href="/" className="center">
        <motion.div
          onHoverStart={() => setHoverFoot(true)}
          onHoverEnd={() => setHoverFoot(false)}
          className="cursor-pointer align-middle"
        >
          <Image
            className="h-20 w-20 md:h-32 md:w-32 absolute bottom-8"
            alt="OOPS"
            style={{
              left: `${imagePosition}px`,
            }}
            src={
              !hoverFoot && pathToAnimation[currentTab]
                ? `${process.env.NEXT_PUBLIC_AWS_URL}/${pathToAnimation[currentTab]}.00${image}.png`
                : `${process.env.NEXT_PUBLIC_AWS_URL}/click.png`
            }
            width={150}
            height={150}
          />
        </motion.div>
      </a>
    </div>
  );
}
