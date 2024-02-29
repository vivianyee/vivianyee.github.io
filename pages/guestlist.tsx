import Layout from "@shared/components/Layout";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { GuestContext } from "./_app";
import Subheading from "@shared/components/Subheading";
import { LoadingOutlined } from "@ant-design/icons";

export default function GuestList() {
  const guestContext = useContext(GuestContext);
  const [guestList, setGuestList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/api/guestlist", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGuestList(data.data);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log(`Error fetching guest list ${e}`);
      });
  }, [guestContext.submitForm]);

  return (
    <div className="centralBody">
      <Layout>
        <Head>
          <title>The Guest Book</title>
          <link rel="icon" href="https://i.imgur.com/YuNLXe1.png" />
        </Head>
        <div className="max-h-[60vh] inline-flex flex-col w-full">
          <Subheading />

          <h3 className="text-2xl md:text-4xl pb-1 md:pb-3 m-0">
            The Guest Book
          </h3>
          <h4 className="text-sm md:text-lg pb-1 md:pb-3">
            Post by clicking the ribbon above and sending a message!
          </h4>
          {loading ? (
            <div className="text-4xl md:text-5xl py-5 text-center"><LoadingOutlined/></div>
          ) : (
            <div className="overflow-y-scroll description">
              {[...guestList].reverse().map((guest, i) => {
                const guestDate = new Date(guest.date);
                return (
                  <div
                    className="border-white border-t-2 flex justify-between p-2"
                    key={guest.name + i}
                  >
                    <div className="pr-3">
                      <h4 className="text-sm md:text-base">{guest.name}</h4>
                      <h4 className="text-xs md:text-s">
                        {guestDate.toLocaleDateString("en-US")} {}
                      </h4>
                    </div>
                    <h4 className="text-sm md:text-base">{guest.text}</h4>
                  </div>
                );
              })}
            </div>
          )}
          <h4 className="text-sm md:text-lg py-3 md:pb-3 text-center">
            You&apos;ve recently posted {guestContext.submitForm} message
            {guestContext.submitForm !== 1 && "s"}!
          </h4>
        </div>
      </Layout>
    </div>
  );
}
