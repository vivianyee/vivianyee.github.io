import { motion } from "framer-motion";
import React, { useState } from "react";
import { Col, Row } from "antd";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Thumbnail({ selection, title, col, selectionData }) {
  const [hoverSelect, setHoverSelect] = useState(selectionData[0]);

  return (
    <>
      <Head>
        <title></title>
        <link rel="icon" href="https://i.imgur.com/YuNLXe1.png" />
      </Head>
      <div
        style={{
          // border: "3px solid black",
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 class="description-header" style={{ marginBottom: "10px" }}>
          {title} SELECTION
        </h1>
        <div className={"center"} style={{ height: "35vh", width: "100%" }}>
          {hoverSelect ? (
            <div
              className="center"
              style={{
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Image
                class="description-image"
                alt="Char Image"
                src={require(`../images/${hoverSelect.image}`)}
              />
              <h2>{hoverSelect.dataName}</h2>
            </div>
          ) : null}
        </div>
        <div
          className="center"
          style={{
            borderTop: "1px solid white",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{ marginBottom: "10px", textAlign: "center" }}>
            CHOOSE YOUR {title}
          </h3>
          <Row className="center" style={{ width: "100%", padding: "25px 0" }}>
            {selectionData.map((data) => (
              <Col span={col} className="center" key={data.url}>
                <Link
                  href={`/${selection}/${data.url}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <motion.h3
                    style={{
                      color: "white",
                      margin: "0 0 15px 0",
                      cursor: "pointer",
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onHoverStart={() => setHoverSelect(data)}
                  >
                    {data.name}
                  </motion.h3>
                  <motion.h2
                    style={{
                      color: "white",
                      textAlign: "center",
                      margin: "0px",
                    }}
                  >
                    &nbsp;
                    {hoverSelect && hoverSelect.name === data.name && <>^</>}
                    &nbsp;
                  </motion.h2>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}
