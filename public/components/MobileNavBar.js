import { motion } from "framer-motion";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { subHeadings } from "../constants/constants";
import Link from "next/link";
import { Drawer } from 'antd';

function MobileNavBar() {
  const { asPath } = useRouter();
  const currentTab = asPath.split("/")[1];

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div
      class="mobile-nav-bar"
      className="center"
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
        borderBottom: "2px solid white",
      }}
    >
      {currentTab !== "" ? (
        <>
            <motion.h4
            className="center"
            style={{
                color: "white",
                width: "100%",
                textAlign: "center",
                fontSize: "15px",
                padding: "5px"
            }}
            whileTap={{ scale: 0.9 }}
            onClick={showDrawer}
            >
                - MAIN MENU -
            </motion.h4>
          <Drawer
            className="center"
            class="drawer"
            placement="top"
            closable={false}
            onClose={onClose}
            open={open}
            key={"top"}
          >
            {subHeadings.map((heading) => (
                <Link
                href={"/" + heading.path}
                style={{ textDecoration: "none", color: "black" }}
                >
                <div className="center">
                    <motion.h3
                    style={{
                        color: "white",
                        cursor: "pointer",
                        fontSize: "15px",
                        padding: "5px"
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    >
                    {currentTab.toLocaleUpperCase() !== heading.title
                        ? `${heading.title}`
                        : `- ${heading.title} -`}
                    </motion.h3>
                </div>
                </Link>
            ))}
          </Drawer>
        </>
      ) : (
        <motion.h4
          className="center"
          style={{
            color: "white",
            width: "100%",
            textAlign: "center",
            fontSize: "15px",
            padding: "5px"
          }}
        >
          CLICK THE LITTLE WALKING GUY TO GO HOME
        </motion.h4>
      )}
    </div>
  );
}

export default MobileNavBar;
