"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { BsSend } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { PiReadCvLogo } from "react-icons/pi";
const Home = () => {
  const leftRef = useRef("");
  const rightRef = useRef("");
  const paraRef = useRef("");
  const btnRef = useRef("");
  const socialRef = useRef("");
  useGSAP(()=>{
    const tl = gsap.timeline()
    gsap.from(leftRef.current,{
      opacity:0,
      y:100,
      delay:0.5
    })

    gsap.from(rightRef.current,{
      opacity:0,
      y:100,
      delay:0.6
    })
    gsap.from(paraRef.current,{
      opacity:0,
      y:100,
      delay:0.7
    })
    gsap.from(btnRef.current,{
      opacity:0,
      y:100,
      delay:0.8
    })
    gsap.from(socialRef.current,{
      opacity:0,
      y:100,
      delay:0.9
    })
  })
  return (
   <div className="w-full flex flex-col gap-7 pt-20 pb-32">
        <div className="info">
          <div ref={leftRef} className="left">
            <div className="relative profile-picture w-26 h-26  rounded-full overflow-hidden bg-[var(--profile)]">
              <Image
                src="/images/profile.png"
                alt=""
                className="object-cover object-top scale-150"
                fill
                sizes="140px"
              />
            </div>
          </div>
          <div ref={rightRef} className="right">
            <h1 className="font-bold text-md mt-3 dark:text-zinc-100 light:text-zinc-800"><span className="text-md">Hello, I'm,</span> <br /> <span className="text-4xl">Jitendra Biswas</span> <br /> A Full Stack <span className="text-[var(--profile-text)]">Web Developer</span> </h1>
            <p className="text-sm text-zinc-500">
              Intern at -{" "}
              <span className="text-xs font-semibold">Going Genius</span>
            </p>
          </div>
        </div>

        <p ref={paraRef} className="text-gray-400 leading-9 tracking-wider text-sm">
          I build interactive web applications using{" "}
          <span className="inline-flex text-sm items-center gap-1 px-2 py-1 rounded bg-popover dark:text-zinc-100 light:text-zinc-800 border-2 border-chart border-dotted font-medium align-middle">
            <Image src="/images/javascript.png" width={20} height={20} alt="js" />
            JavaScript
          </span>
          ,{" "}
          <span className="inline-flex text-sm items-center gap-1 px-2 py-1 rounded bg-popover dark:text-zinc-100 light:text-zinc-800 border-2 border-chart border-dotted font-medium align-middle">
            <Image src="/images/reactjs.png" width={20} height={20} alt="react" className="react"/>
            React
          </span>
          ,{" "}
          <span className="inline-flex text-sm items-center gap-1 px-2 py-1 rounded bg-popover dark:text-zinc-100 light:text-zinc-800 border-2 border-chart border-dotted font-medium align-middle">
            <Image src="/images/nextjs.png" width={20} height={20} unoptimized alt="nextjs" />{" "}
            Next.js
          </span>
          ,{" "}
          <span className="inline-flex text-sm items-center gap-1 px-2 py-1 rounded bg-popover dark:text-zinc-100 light:text-zinc-800 border-2 border-chart border-dotted font-medium align-middle">
            <Image src="/images/nodejs.png" width={20} height={20} unoptimized alt="nodejs" />
            Node.js
          </span>
          ,{" "}
          <span className="inline-flex text-sm items-center gap-1 px-2 py-1 rounded bg-popover dark:text-zinc-100 light:text-zinc-800 border-2 border-chart border-dotted font-medium align-middle">
            <Image
              src="/images/mongodb.png"
              width={20}
              height={20}
              unoptimized
              alt="mongodb"
            />{" "}
            MongoDB
          </span>
          , and{" "}
          <span className="inline-flex text-sm items-center gap-1 px-2 py-1 rounded bg-popover dark:text-zinc-100 light:text-zinc-800 border-2 border-chart border-dotted font-medium align-middle">
            <Image
              src="/images/tailwindcss.png"
              width={20}
              height={20}
              
              alt="tailwind"
            />
            Tailwind CSS
          </span>
          . I focus on creating intuitive{" "}
          <span className=" text-sm dark:text-zinc-100 light:text-black font-semibold">UI</span> and{" "}
          <span className="text-sm dark:text-zinc-100 light:text-black font-semibold">Functional</span>{" "}
          designs. I'm also enthusiastic about{" "}
          <span className="inline-flex text-sm items-center gap-1 px-2 py-1 rounded dark:bg-[#242424] dark:text-zinc-100 light:text-zinc-800 border-2 border-chart border-dotted font-medium align-middle">
            <img
              src="/images/gsap.png"
              width={42}
              height={24}
              alt="gsap"
            />
          </span>{" "}
          for creating smooth motion and animations.
        </p>

        <div ref={btnRef} className="buttons flex gap-2">
          <Link href="https://drive.google.com/file/d/1PwkjigeUaeIH6mtKs9dBz3HNMs1zPf-k/view?usp=drive_link" target="_blank" className="border-2 border-zinc-300 text-sm px-3 py-1 rounded-md flex items-center gap-1 cursor-pointer dark:text-zinc-100 light:text-zinc-800 hover:scale-105 transition-all"><PiReadCvLogo /> Resume/CV</Link>
          <Link href="/contact" className="border-2 border-zinc-300 text-sm px-3 py-1 rounded-md flex items-center gap-1 cursor-pointer text-black bg-zinc-100 hover:scale-105 transition-all"><BsSend /> Get in touch</Link>
        </div>

        <div ref={socialRef} className="social-media flex gap-3 mt-5">
          <Link href="https://github.com/jitendra-biswas" target="_blank" className="github dark:text-zinc-200 text-xl w-6 h-6 cursor-pointer hover:scale-120 transition-all"><FaGithub className="w-full h-full" /></Link>
          <Link href="https://www.linkedin.com/in/jitendra-biswas-603206361/" target="_blank" className="linkedin dark:text-zinc-200 text-xl w-6 h-6 cursor-pointer hover:scale-120 transition-all"><FaLinkedinIn className="w-full h-full" /></Link>
          <Link href="mailto:jitendrabiswas12344@gmail.com" target="_blank" className="gmail dark:text-zinc-200 text-xl w-7 h-7 cursor-pointer hover:scale-120 transition-all"><CgMail className="w-full h-full" /></Link>
        </div>
      </div>
  )
}

export default Home
