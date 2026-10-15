"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import React, { useRef } from "react";
import { RiContactsLine, RiSendInsLine } from "react-icons/ri";
import { motion } from "motion/react";

const LetConnect = () => {
  const connectRef = useRef(null);
  const messageRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(connectRef.current, {
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: connectRef.current,
        scroller: "body",
        start: "top 80%",
      },
    });
    gsap.from(messageRef.current, {
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: messageRef.current,
        scroller: "body",
        start: "top 80%",
      },
    });
  });

  return (
    <>
      <div
        ref={connectRef}
        className="w-full h-42 border-2 border-chart border-dashed rounded flex flex-col items-center justify-center gap-2 mb-10"
      >
        <p className="text-xl text-zinc-500">
          Hey, you scrolled this far, let's talk.
        </p>
        <Link
          href="mailto:jitendrabiswas12344@gmail.com"
          target="_blank"
          className="border-2 border-zinc-700 px-2 rounded border-dotted flex items-center gap-2 hover:scale-110 transition-all cursor-pointer"
        >
          <RiContactsLine className="text-sm" /> Contact
        </Link>
      </div>

      <div ref={messageRef} className="mb-10 ">
        <h1 className="heading  text-3xl font-semibold mb-4">Send Message</h1>
        <form
        autoComplete="off"
          action="https://api.web3forms.com/submit"
          method="POST"
          className="flex flex-col gap-3 "
        >
          <input
            type="hidden"
            name="access_key"
            value="44181882-fe37-4b7f-903b-4c5886b30631"
          />
          <div className="flex w-full gap-3 max-md:flex-col">
            <motion.div whileHover={{scale:1.1}} className=" w-fit max-md:w-full card flex items-center gap-3 bg-popover border-2 dark:border-[#1f1f1f] p-2 rounded-md ">
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                required
                className="border-0 outline-0 w-full h-full text-sm cursor-pointer"
              />
            </motion.div>
            <motion.div whileHover={{scale:1.1}} className=" w-1/3 max-md:w-full card flex items-center gap-3 bg-popover border-2 dark:border-[#1f1f1f] p-2 rounded-md ">
              <input
                type="email"
                placeholder="example@gmail.com"
                name="email"
                required
                className="border-0 outline-0 w-full h-full text-sm cursor-pointer"
              />
            </motion.div>
          </div>
          <motion.div whileHover={{scale:1.0}} className=" w-[60%] max-md:w-full h-32 card flex items-center gap-3 bg-popover border-2 dark:border-[#1f1f1f] p-2 rounded-md hover:scale-105 transition-all">
            <textarea
              name="message"
              placeholder="message..."
              required
              className="w-full h-full text-sm cursor-pointer outline-0 border-0"
            ></textarea>
          </motion.div>
          <motion.button
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
            type="submit"
            className=" w-fit card flex items-center gap-3 bg-popover border-2 dark:border-[#1f1f1f] p-2 rounded-md  text-sm"
          >
            <RiSendInsLine /> Send message
          </motion.button>
        </form>
      </div>
    </>
  );
};

export default LetConnect;
