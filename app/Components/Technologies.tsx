"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useRef } from "react";
import { FaGithub } from "react-icons/fa";

const Technologies = () => {
  const headRef = useRef(null)
  const infoRef = useRef(null)
     gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
      gsap.from(headRef.current,{
         opacity:0,
         y:100,
         delay:0.1,
         scrollTrigger:{
          trigger:headRef.current,
          scroller:"body",
          start:"top 85%"
         }
    })
    gsap.utils.toArray(".technology").forEach((card:any) => {
    gsap.from(card, {
      opacity: 0,
      y: 100,
      delay:0.2,
      scrollTrigger: {
        trigger: card,
        scroller:"body"
      },
    });
  });

  gsap.from(infoRef.current,{
         opacity:0,
         y:100,
         delay:0.3,
         scrollTrigger:{
          trigger:headRef.current,
          scroller:"body",
          start:"top 85%"
         }
    })
    })
  return (
    <>
      <div className="w-full h-fit pb-20 dark:text-zinc-200">
        <h1 ref={headRef} className="heading text-3xl font-semibold">Tools & Technologies</h1>
        <div className="technologies w-[80%] flex flex-wrap gap-2 pr-30 max-lg:pr-0">
          <div className="technology w-fit mt-2 border-2 border-chart text-sm px-3 py-1 rounded-md flex items-center gap-1  dark:text-zinc-100 bg-popover border-dotted ">
            <Image
              src="/images/javascript.png"
              width={20}
              height={20}
              alt="javascript"
            />{" "}
            JavaScript
          </div>
          <div className="technology w-fit mt-2 border-2 border-chart text-sm px-3 py-1 rounded-md flex items-center gap-1  dark:text-zinc-100 bg-popover border-dotted ">
            <Image
              src="/images/reactjs.png"
              width={20}
              height={20}
              alt="react"
              className="react"
            />{" "}
            React
          </div>
          <div className="technology w-fit mt-2 border-2 border-chart text-sm px-3 py-1 rounded-md flex items-center gap-1  dark:text-zinc-100 bg-popover border-dotted ">
            <Image
              src="/images/nextjs.png"
              width={20}
              height={20}
              alt="next"
            />{" "}
            Next.js
          </div>
          <div className="technology w-fit mt-2 border-2 border-chart text-sm px-3 py-1 rounded-md flex items-center gap-1  dark:text-zinc-100 bg-popover border-dotted ">
            <Image
              src="/images/nodejs.png"
              width={20}
              height={20}
              alt="node"
            />{" "}
            Node
          </div>
         
          <div className="technology w-fit mt-2 border-2 border-chart text-sm px-3 py-1 rounded-md flex items-center gap-1  dark:text-zinc-100 bg-popover border-dotted ">
            <Image
              src="/images/mongodb.png"
              width={20}
              height={20}
              alt="MongoDB"
            />{" "}
            MongoDB
          </div>
           <div className="technology w-fit mt-2 border-2 border-chart text-sm px-3 py-1 rounded-md flex items-center gap-1  dark:text-zinc-100 bg-popover border-dotted ">
            <Image
              src="/images/tailwindcss.png"
              width={20}
              height={20}
              alt="Tailwind CSS"
            />{" "}
            Tailwind CSS
          </div>
          <div className="technology w-fit mt-2 border-2 border-chart text-sm px-3 py-1 rounded-md flex items-center gap-1  dark:text-zinc-100 bg-popover border-dotted ">
            <img
              src="/images/gsap.png"
              width={40}
              height={20}
              alt="GSAP"
            />{" "}
            
          </div>
          <div className="technology w-fit mt-2 border-2 border-chart text-sm px-3 py-1 rounded-md flex items-center gap-1  dark:text-zinc-100 bg-popover border-dotted ">
            <FaGithub className="text-xl"/> GitHub
            
          </div>
            <div className="technology w-fit mt-2 border-2 border-chart text-sm px-3 py-1 rounded-md flex items-center gap-1  dark:text-zinc-100 bg-popover border-dotted ">
            <Image
              src="/images/postman.png"
              width={20}
              height={20}
              alt="postman"
            />{" "}
            Postman
          </div>
            <div className="technology w-fit mt-2 border-2 border-chart text-sm px-3 py-1 rounded-md flex items-center gap-1  dark:text-zinc-100 bg-popover border-dotted ">
            <Image
              src="/images/vercel.png"
              width={20}
              height={20}
              alt="vercel"
            />{" "}
            Vercel
          </div>
        </div>
        <ul ref={infoRef} className="mt-10 text-sm flex flex-col gap-3 text-zinc-400">
            <li className="list-disc">Architected and developed responsive, high-performance web applications using React, Next.js, and the MERN stack.</li>
            <li className="list-disc">Built reusable, scalable UI components and integrated RESTful APIs with efficient data fetching and error handling.</li>
            <li className="list-disc">Created smooth, interactive user experiences with GSAP animations while following accessibility and responsive design principles.</li>
            <li className="list-disc">Optimized application performance through code splitting, image optimization, SEO best practices, and clean, maintainable code.</li>
          </ul>
      </div>
    </>
  );
};

export default Technologies;
