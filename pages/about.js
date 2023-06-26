import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>ABOUT</title>
        <link rel="icon" href="https://i.imgur.com/YuNLXe1.png" />
      </Head>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "75%",
        }}
      >
        <h1>Vivian Yee</h1>
        <Image
          alt="Char Image"
          style={{
            width: "10rem",
            height: "11rem",
          }}
          src={require("../public/images/me.jpg")}
        />
        <h3>
          &emsp; Hello! I'm Vivian Yee, a frontend focused software engineer
          with a passion for creating intuitive and engaging user experiences. I
          am dedicated to crafting robust and scalable web applications and thrive on frontend
          technologies.
          <br />
          &emsp; I delved into frontend development, honing my skills in HTML,
          CSS, and JavaScript. I am well experienced in frontend libraries like React and
          frameworks like Angular to build scalable applications. I am
          well-versed in modern development tools and have a solid understanding
          of version control systems such as Git.
          <br />
          &emsp; I am excited to contribute my passion for frontend development,
          attention to detail, and eagerness to learn in a dynamic and
          collaborative environment. If you're looking for a dedicated software
          engineer who is committed to delivering high-quality user experiences,
          I would love to connect and explore how we can work together!
        </h3>
      </div>
    </>
  );
}
