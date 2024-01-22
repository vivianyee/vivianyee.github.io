import { motion } from "framer-motion";
import { Col, Row } from "antd";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { subHeadings } from "../constants/constants";
import Link from "next/link";

function NavBar() {
  const { asPath } = useRouter();
  const currentTab = asPath.split("/")[1];

  const [hoverHeading, setHoverHeading] = useState(
    currentTab.toLocaleUpperCase()
  );

  return (
    <div
      className="center, nav-bar"
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
        borderBottom: "2px solid white",
      }}
    >
      {currentTab !== "" ? (
        <>
          <Row style={{ margin: "auto", width: "80%", padding: "20px 0" }}>
            {subHeadings.map((heading) => (
              <Col
                key={heading.title}
                className="center"
                style={{
                  alignItems: "center",
                  flexDirection: "column",
                }}
                span={6}
              >
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
                      }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onHoverStart={() => setHoverHeading(heading.title)}
                      onHoverEnd={() => setHoverHeading("")}
                    >
                      {currentTab.toLocaleUpperCase() !== heading.title
                        ? `${heading.title}`
                        : `- ${heading.title} -`}
                    </motion.h3>
                    {hoverHeading === heading.title && (
                      <motion.h3
                        style={{
                          color: "white",
                          position: "absolute",
                          marginTop: "40px",
                        }}
                      >
                        ^
                      </motion.h3>
                    )}
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <motion.h4
          className="center"
          style={{
            color: "white",
            width: "100%",
            textAlign: "center",
            padding: "20px",
            fontSize: "15px",
          }}
        >
          CLICK THE LITTLE WALKING GUY TO GO HOME
        </motion.h4>
      )}
    </div>
  );
}

export default NavBar;
