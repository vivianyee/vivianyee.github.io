import React, { useEffect, useState } from "react";
import { Col, Row, Progress } from "antd";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRouter } from 'next/navigation';

export default function Thumbnail({ selection, title, col, selectionData }) {
  const [hoverSelect, setHoverSelect] = useState(selectionData[0]);
  const [percent, setPercent] = useState(0);
  const [increasePercent, setIncreasePercent] = useState(false);
  const { push } = useRouter();

  function onTapStart(data) {
    setHoverSelect(data);
    setIncreasePercent(true);
  }

  useEffect(()=>{
    if(increasePercent){
      if(percent > 120){
        push(`/${selection}/${hoverSelect.url}`);
      }else{
        setTimeout(() => {
          setPercent(percent+10);
          console.log(percent)
        }, 80);
      }
    }else{
      setPercent(0);
    }
  })

  return (
    <>
      <Head>
        <title></title>
        <link rel="icon" href="https://i.imgur.com/YuNLXe1.png" />
      </Head>
      <div
        class="mobile-adjust"
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
        <div className={"center"} style={{ width: "100%" }}>
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
          className="center thumbnail-border"
          style={{
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
        <Progress percent={percent} showInfo={false} trailColor="#18191A" strokeColor="#FFFFFF"/>
          <h3 class="nav-bar" style={{ marginBottom: "10px", textAlign: "center" }}>
            CHOOSE YOUR {title}
          </h3>
          <h3 class="mobile-nav-bar" style={{ marginBottom: "10px", textAlign: "center" }}>
            CLICK AND HOLD TO CHOOSE YOUR {title}
          </h3>
          <Row className="center" style={{ width: "100%", padding: "25px 0" }}>
            {selectionData.map((data) => (
              <Col span={col} className="center no_highlights" key={data.url}>
                <div>
                  <Link
                    class="nav-bar"
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
                  <div class="mobile-nav-bar">
                    <motion.h3
                      style={{
                        color: "white",
                        margin: "0 0 15px 0",
                        cursor: "pointer",
                      }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onTap={() => setIncreasePercent(false)}
                      onTapStart={() => onTapStart(data)}
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
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}
