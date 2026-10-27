"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { BsSend } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { PiReadCvLogo } from "react-icons/pi";
import { AnimatePresence, motion } from "motion/react";
import { CiMail } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
const Home = () => {
  const [ActiveProfile, setActiveProfile] = useState(false);
  const leftRef = useRef("");
  const rightRef = useRef("");
  const paraRef = useRef("");
  const btnRef = useRef("");
  const socialRef = useRef("");
  useGSAP(() => {
    gsap.from(rightRef.current, {
      opacity: 0,
      y: 100,
      delay: 0.6,
    });
    gsap.from(paraRef.current, {
      opacity: 0,
      y: 100,
      delay: 0.7,
    });
    gsap.from(btnRef.current, {
      opacity: 0,
      y: 100,
      delay: 0.8,
    });
    gsap.from(socialRef.current, {
      opacity: 0,
      y: 100,
      delay: 0.9,
    });
  });
  return (
    <div className="w-full flex flex-col gap-7 pt-20 pb-32">
      <div className="info">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          layoutId="profile"
          layout="position"
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setActiveProfile(!ActiveProfile)}
          ref={leftRef}
          className="w-fit left relative group cursor-pointer"
        >
          <div className="relative profile-picture w-32 h-32 rounded-full overflow-hidden bg-(--profile)">
            <Image
              src="/images/profile.png"
              alt="Profile"
              className="object-cover object-top scale-140 hover:scale-150 transition-all"
              fill
              sizes="140px"
            />
          </div>

          <p
            className="absolute w-42 top-0 left-26 border px-3 py-1 rounded-full text-sm
                opacity-0 group-hover:opacity-100 transition-opacity duration-220
                pointer-events-none"
          >
            Click To View Profile
          </p>
        </motion.div>

        <AnimatePresence>
          {ActiveProfile && (
            <div
              onClick={() => setActiveProfile(!ActiveProfile)}
              className="img-container w-full h-screen flex items-center justify-center fixed top-0 left-0 z-99 bg-zinc-800/50 backdrop-blur-xs"
            >
              <motion.div
                layoutId="profile"
                layout="position"
                onClick={(e) => e.stopPropagation()}
                className="w-[32vw] max-md:w-full h-fit bg-zinc-800 rounded-xl border border-zinc-700 px-7 py-6 max-md:p-2 border-t-yellow-500"
              >
                <div className="flex gap-5">
                  <motion.div className="relative max-md:hidden profile-picture w-32 h-32  rounded-full overflow-hidden bg-(--profile) shadow-2xl">
                    <Image
                      src="/images/profile.png"
                      alt=""
                      className="object-cover object-top scale-150"
                      fill
                      sizes="140px"
                    />
                  </motion.div>
                  
                  <div>
                    <h1 className="text-3xl font-semibold text-zinc-300">Jitendra Biswas</h1>
                    <h2 className="text-sm font-semibold text-gray-300">
                      Full Stack Web Developer
                    </h2>
                    <h3 className="text-xs font-semibold text-gray-400">
                      Intern at - Going Genius
                    </h3>
                    <div className="flex gap-3 mt-3">
                      <Image
                        src="/images/ts.png"
                        width={25}
                        height={22}
                        alt="typescript"
                      />
                      <Image
                        src="/images/reactjs.png"
                        width={25}
                        height={25}
                        alt="reactjs"
                        className="react"
                      />
                      <Image
                        src="/images/nodejs.png"
                        width={25}
                        height={25}
                        alt="nodejs"
                      />
                      <Image
                        src="/images/nextjs.png"
                        width={25}
                        height={25}
                        alt="nextjs"
                      />
                      <Image
                        src="/images/tailwindcss.png"
                        width={25}
                        height={25}
                        alt="tailwindcss"
                      />
                      <Image
                        src="/images/mongodb.png"
                        width={25}
                        height={25}
                        alt="mongodb"
                      />
                      <Image
                        src="/images/supabase.png"
                        width={25}
                        height={25}
                        alt="supabase"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Contacts */}
                <div className="flex justify-between items-center mr-5 max-md:mr-0">
                  <div className="mt-5 flex flex-col gap-2">
                 <div className="flex gap-2 items-center">
                   <CiMail className="text-xl" /> <p className="text-sm text-zinc-220">jitendrabiswas12344@gmail.com</p>
                 </div>
                 <div className="flex gap-2 items-center">
                   <IoMdCall className="text-xl" /> <p className="text-sm text-zinc-220">+977-9819999854</p>
                 </div>
                 <div className="flex gap-2 items-center">
                   <IoLocationOutline className="text-xl" /> <p className="text-sm text-zinc-220">Kathmandu, Nepal</p>
                 </div>
                 

                 <div className="flex">
                  <div className="flex gap-2 mt-3 ">
                  <Link href="https://github.com/jitendra-biswas" target="_blank">
                  <FaGithub className="text-xl" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/jitendra-biswas-603206361/" target="_blank">
                  <FaLinkedinIn className="text-xl" />
                  </Link>
                  <Link href="https://www.instagram.com/biswashanish/" target="_blank">
                  <FaInstagram  className="text-xl" />
                  </Link>
                 </div>
                 </div>
                </div>
                <div className="w-24 h-24 border-2 border-gray-100 rounded overflow-hidden">
                  <img src="/whatsapp.png" alt="" />
                </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        <div ref={rightRef} className="right">
          <h1 className="font-bold text-md mt-3 dark:text-zinc-100 light:text-zinc-800">
            <span className="text-md">Hello, I'm,</span> <br />{" "}
            <span className="text-4xl">Jitendra Biswas</span> <br /> A Full
            Stack{" "}
            <span className="text-(--profile-text)">Web Developer</span>{" "}
          </h1>
          <p className="text-sm text-zinc-500">
            Intern at -{" "}
            <span className="text-xs font-semibold">Going Genius</span>
          </p>
        </div>
      </div>

      <p
        ref={paraRef}
        className="text-gray-400 leading-9 tracking-wider text-sm"
      >
        I build interactive web applications using{" "}
        <span className="inline-flex text-sm items-center gap-1 px-2 py-1 rounded bg-popover dark:text-zinc-100 light:text-zinc-800 border-2 border-chart border-dotted font-medium align-middle">
          <Image src="/images/javascript.png" width={22} height={22} alt="js" />
          JavaScript
        </span>
        ,{" "}
        <span className="inline-flex text-sm items-center gap-1 px-2 py-1 rounded bg-popover dark:text-zinc-100 light:text-zinc-800 border-2 border-chart border-dotted font-medium align-middle">
          <Image src="/images/ts.png" width={22} height={22} alt="ts" />
          TypeScript
        </span>
        ,{" "}
        <span className="inline-flex text-sm items-center gap-1 px-2 py-1 rounded bg-popover dark:text-zinc-100 light:text-zinc-800 border-2 border-chart border-dotted font-medium align-middle">
          <Image
            src="/images/reactjs.png"
            width={22}
            height={22}
            alt="react"
            className="react"
          />
          React
        </span>
        ,{" "}
        <span className="inline-flex text-sm items-center gap-1 px-2 py-1 rounded bg-popover dark:text-zinc-100 light:text-zinc-800 border-2 border-chart border-dotted font-medium align-middle">
          <Image
            src="/images/nextjs.png"
            width={22}
            height={22}
            unoptimized
            alt="nextjs"
          />{" "}
          Next.js
        </span>
        ,{" "}
        <span className="inline-flex text-sm items-center gap-1 px-2 py-1 rounded bg-popover dark:text-zinc-100 light:text-zinc-800 border-2 border-chart border-dotted font-medium align-middle">
          <Image
            src="/images/nodejs.png"
            width={22}
            height={22}
            unoptimized
            alt="nodejs"
          />
          Node.js
        </span>
        ,{" "}
        <span className="inline-flex text-sm items-center gap-1 px-2 py-1 rounded bg-popover dark:text-zinc-100 light:text-zinc-800 border-2 border-chart border-dotted font-medium align-middle">
          <Image
            src="/images/mongodb.png"
            width={22}
            height={22}
            unoptimized
            alt="mongodb"
          />{" "}
          MongoDB
        </span>
        ,{" "}
        <span className="inline-flex text-sm items-center gap-1 px-2 py-1 rounded bg-popover dark:text-zinc-100 light:text-zinc-800 border-2 border-chart border-dotted font-medium align-middle">
          <Image
            src="/images/supabase.png"
            width={22}
            height={22}
            unoptimized
            alt="supabase"
          />{" "}
          Supabase
        </span>
        , and{" "}
        <span className="inline-flex text-sm items-center gap-1 px-2 py-1 rounded bg-popover dark:text-zinc-100 light:text-zinc-800 border-2 border-chart border-dotted font-medium align-middle">
          <Image
            src="/images/tailwindcss.png"
            width={22}
            height={22}
            alt="tailwind"
          />
          Tailwind CSS
        </span>
        . I focus on creating intuitive{" "}
        <span className=" text-sm dark:text-zinc-100 light:text-black font-semibold">
          UI
        </span>{" "}
        and{" "}
        <span className="text-sm dark:text-zinc-100 light:text-black font-semibold">
          Functional
        </span>{" "}
        designs. I'm also enthusiastic about{" "}
        <span className="inline-flex text-sm items-center gap-1 px-2 py-1 rounded dark:bg-[#242424] dark:text-zinc-100 light:text-zinc-800 border-2 border-chart border-dotted font-medium align-middle">
          <img src="/images/gsap.png" width={42} height={24} alt="gsap" />
        </span>{" "}
        and{" "}
        <span className="inline-flex text-sm items-center gap-1 px-2 py-1 rounded dark:bg-[#242424] dark:text-zinc-100 light:text-zinc-800 border-2 border-chart border-dotted font-medium align-middle">
          <img src="/images/framer.png" width={22} height={22} alt="framer" />
          Framer Motion
        </span>{" "}
        for creating smooth motion and animations.
      </p>

      <div ref={btnRef} className="buttons flex gap-2">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link
            href="https://drive.google.com/file/d/1mxrVOzMPQ9vmWOLgt0RFtI1pRu6vcHps/view?usp=sharing"
            target="_blank"
            className="border-2 border-zinc-220 text-sm px-3 py-1 rounded-md flex items-center gap-1 cursor-pointer dark:text-zinc-100 light:text-zinc-800  transition-all"
          >
            <PiReadCvLogo /> Resume/CV
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link
            href="#contact"
            className="border-2 border-zinc-220 text-sm px-3 py-1 rounded-md flex items-center gap-1 cursor-pointer text-black bg-zinc-100 transition-all"
          >
            <BsSend /> Get in touch
          </Link>
        </motion.div>
      </div>

      <div ref={socialRef} className="social-media flex gap-3 mt-2">
        <motion.div whileHover={{ scale: 1.4 }}>
          <Link
            href="https://github.com/jitendra-biswas"
            target="_blank"
            className="github dark:text-zinc{220 text-xl w-6 h-6 cursor-pointer transition-all"
          >
            <FaGithub className="w-full h-full" />
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.4 }}>
          <Link
            href="https://www.linkedin.com/in/jitendra-biswas-60{226361/"
            target="_blank"
            className="linkedin dark:text-zinc{220 text-xl w-6 h-6 cursor-pointer transition-all"
          >
            <FaLinkedinIn className="w-full h-full" />
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.4 }}>
          <Link
            href="mailto:jitendrabiswas12344@gmail.com"
            target="_blank"
            className="gmail dark:text-zinc{220 text-xl w-7 h-7 cursor-pointer transition-all"
          >
            <CgMail className="w-full h-full" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
