"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { BsSend } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { PiReadCvLogo } from "react-icons/pi";
import { AnimatePresence, motion } from "motion/react";
const Home = () => {
  const [ActiveProfile, setActiveProfile] = useState(false);
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
        
<motion.div
  layoutId="profile"
  layout="position"
  onClick={() => setActiveProfile(!ActiveProfile)}
  ref={leftRef}
  className="w-fit left relative group cursor-pointer"
>
  <div className="relative profile-picture w-26 h-26 rounded-full overflow-hidden bg-(--profile)">
    <Image
      src="/images/profile.png"
      alt="Profile"
      className="object-cover object-top scale-140 hover:scale-150 transition-all"
      fill
      sizes="140px"
    />
  </div>

  <p className="absolute w-42 top-0 left-26 border px-3 py-1 rounded-full text-sm
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                pointer-events-none">
    Click To View Profile
  </p>
</motion.div>


         <AnimatePresence>
           {ActiveProfile && (
            <div  onClick={()=>setActiveProfile(!ActiveProfile)} className="img-container w-full h-screen flex items-center justify-center fixed top-0 left-0 z-99 bg-zinc-800/50 backdrop-blur-xs">
            <motion.div layoutId="profile" layout="position" onClick={(e)=>e.stopPropagation()} className="relative profile-picture w-42 h-42  rounded-full overflow-hidden bg-(--profile)">
              <Image
                src="/images/profile.png"
                alt=""
                className="object-cover object-top scale-150"
                fill
                sizes="140px"
              />
            </motion.div>
          </div>
          )}
         </AnimatePresence>
          <div ref={rightRef} className="right">
            <h1 className="font-bold text-md mt-3 dark:text-zinc-100 light:text-zinc-800"><span className="text-md">Hello, I'm,</span> <br /> <span className="text-4xl">Jitendra Biswas</span> <br /> A Full Stack <span className="text-(--profile-text)">Web Developer</span> </h1>
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
            <Image src="/images/ts.png" width={20} height={20} alt="ts" />
            TypeScript
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
          ,{" "}
          <span className="inline-flex text-sm items-center gap-1 px-2 py-1 rounded bg-popover dark:text-zinc-100 light:text-zinc-800 border-2 border-chart border-dotted font-medium align-middle">
            <Image
              src="/images/supabase.png"
              width={20}
              height={20}
              unoptimized
              alt="supabase"
            />{" "}
            Supabase
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
          and
          {" "}
          <span className="inline-flex text-sm items-center gap-1 px-2 py-1 rounded dark:bg-[#242424] dark:text-zinc-100 light:text-zinc-800 border-2 border-chart border-dotted font-medium align-middle">
            <img
              src="/images/framer.png"
              width={20}
              height={20}
              alt="framer"
            />
            Framer Motion
          </span>{" "}
          for creating smooth motion and animations.
        </p>
        

        <div ref={btnRef} className="buttons flex gap-2">
          <Link href="https://drive.google.com/file/d/1mxrVOzMPQ9vmWOLgt0RFtI1pRu6vcHps/view?usp=sharing" target="_blank" className="border-2 border-zinc-300 text-sm px-3 py-1 rounded-md flex items-center gap-1 cursor-pointer dark:text-zinc-100 light:text-zinc-800 hover:scale-105 transition-all"><PiReadCvLogo /> Resume/CV</Link>
          <Link href="#contact" className="border-2 border-zinc-300 text-sm px-3 py-1 rounded-md flex items-center gap-1 cursor-pointer text-black bg-zinc-100 hover:scale-105 transition-all"><BsSend /> Get in touch</Link>
        </div>

        <div ref={socialRef} className="social-media flex gap-3 mt-2">
          <Link href="https://github.com/jitendra-biswas" target="_blank" className="github dark:text-zinc-200 text-xl w-6 h-6 cursor-pointer hover:scale-120 transition-all"><FaGithub className="w-full h-full" /></Link>
          <Link href="https://www.linkedin.com/in/jitendra-biswas-603206361/" target="_blank" className="linkedin dark:text-zinc-200 text-xl w-6 h-6 cursor-pointer hover:scale-120 transition-all"><FaLinkedinIn className="w-full h-full" /></Link>
          <Link href="mailto:jitendrabiswas12344@gmail.com" target="_blank" className="gmail dark:text-zinc-200 text-xl w-7 h-7 cursor-pointer hover:scale-120 transition-all"><CgMail className="w-full h-full" /></Link>
        </div>
      </div>
  )
}

export default Home
