import { motion } from "framer-motion";
import React, { useState } from "react";
import { CloseOutlined, LoadingOutlined } from "@ant-design/icons";
import { Drawer, Space } from "antd";
import Image from "next/image";
import { FormData } from "@shared/lib/types";

export default function Header() {
  const defaultForm: FormData = {
    name: "",
    email: "",
    text: "",
  };

  const [open, setOpen] = useState<boolean>(false);
  const [form, setForm] = useState<FormData>(defaultForm);
  const [viewForm, setViewForm] = useState<boolean>(true);
  const [sending, setSending] = useState<boolean>(false);

  const sendEmail = async (event) => {
    event.preventDefault();
    const body = {
      name: form.name,
      email: form.email,
      text: form.text,
    };
    setSending(true);
    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(body),
    });
    setSending(false);
    setViewForm(false);
    setForm(defaultForm);
  };

  return (
    <>
      <div className="text-lg py-3 absolute center top-0 w-[100%] cursor-pointer">
        <motion.h3 onClick={() => setOpen(true)} className="md:w-2/4 w-11/12">
          <div className="ribbon"></div>
        </motion.h3>
      </div>
      <Drawer
        title=" "
        className="bg-[#18191A]"
        size="large"
        placement="top"
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
        extra={
          <Space>
            <motion.h3
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.5 }}
              className="text-sm md:text-base w-fit mb-2 md:mb-5 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <CloseOutlined />
            </motion.h3>
          </Space>
        }
      >
        {viewForm ? (
          <>
            {sending ? (
              <div className="center pt-6 w-full flex flex-col items-center">
                <h2 className="pb-24 font-medium">Sending email...</h2>
                <LoadingOutlined className="text-3xl" />
              </div>
            ) : (
              <form
                onSubmit={sendEmail}
                className="w-full flex flex-col items-center"
              >
                <h2 className="pb-3 font-medium">Leave a message!</h2>
                <div className="mb-5 w-full md:w-2/4">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-base font-medium"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                  />
                </div>
                <div className="mb-5 w-full md:w-2/4">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-base font-medium"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="example@domain.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                  />
                </div>
                <div className="mb-5 w-full md:w-2/4">
                  <label
                    htmlFor="message"
                    className="mb-3 block text-base font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Type your message"
                    required
                    value={form.text}
                    onChange={(e) => setForm({ ...form, text: e.target.value })}
                    className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full md:w-2/4 transition-all hover:bg-slate-400 rounded-md bg-white my-3 py-2 px-4 text-base font-semibold text-black outline-none"
                >
                  Submit
                </button>
              </form>
            )}
          </>
        ) : (
          <div className="w-full flex flex-col items-center justify-center">
            <h2 className="pb-4 pt-6 font-medium">Email sent!</h2>
            <Image
              alt="OOPS"
              src={`${process.env.NEXT_PUBLIC_AWS_URL}/click.png`}
              width={150}
              height={150}
            />
            <button
              onClick={() => setViewForm(true)}
              className="mt-4 w-full md:w-1/4 transition-all hover:bg-slate-400 rounded-md bg-white py-2 px-4 text-base font-semibold text-black outline-none"
            >
              Send another email
            </button>
          </div>
        )}
      </Drawer>
    </>
  );
}
