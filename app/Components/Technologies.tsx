import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Technologies = () => {
  return (
    <>
      <div className="w-full h-fit pb-20 dark:text-zinc-200">
        <h1 className="heading text-3xl font-semibold">Tools & Technologies</h1>
        <div className="technologies w-[80%] flex flex-wrap gap-2">
          <div className="w-fit mt-2 border-2 border-chart text-sm px-3 py-1 rounded-md flex items-center gap-1  dark:text-zinc-100 bg-popover border-dotted ">
            <Image
              src="/images/javascript.png"
              width={20}
              height={20}
              alt="javascript"
            />{" "}
            JavaScript
          </div>
          <div className="w-fit mt-2 border-2 border-chart text-sm px-3 py-1 rounded-md flex items-center gap-1  dark:text-zinc-100 bg-popover border-dotted ">
            <Image
              src="/images/reactjs.png"
              width={20}
              height={20}
              alt="react"
            />{" "}
            React
          </div>
          <div className="w-fit mt-2 border-2 border-chart text-sm px-3 py-1 rounded-md flex items-center gap-1  dark:text-zinc-100 bg-popover border-dotted ">
            <Image
              src="/images/nextjs.png"
              width={20}
              height={20}
              alt="next"
            />{" "}
            Next.js
          </div>
          <div className="w-fit mt-2 border-2 border-chart text-sm px-3 py-1 rounded-md flex items-center gap-1  dark:text-zinc-100 bg-popover border-dotted ">
            <Image
              src="/images/nodejs.png"
              width={20}
              height={20}
              alt="node"
            />{" "}
            Node
          </div>
         
          <div className="w-fit mt-2 border-2 border-chart text-sm px-3 py-1 rounded-md flex items-center gap-1  dark:text-zinc-100 bg-popover border-dotted ">
            <Image
              src="/images/mongodb.png"
              width={20}
              height={20}
              alt="MongoDB"
            />{" "}
            MongoDB
          </div>
           <div className="w-fit mt-2 border-2 border-chart text-sm px-3 py-1 rounded-md flex items-center gap-1  dark:text-zinc-100 bg-popover border-dotted ">
            <Image
              src="/images/tailwindcss.png"
              width={20}
              height={20}
              alt="Tailwind CSS"
            />{" "}
            Tailwind CSS
          </div>
          <div className="w-fit mt-2 border-2 border-chart text-sm px-3 py-1 rounded-md flex items-center gap-1  dark:text-zinc-100 bg-popover border-dotted ">
            <img
              src="/images/gsap.png"
              width={40}
              height={20}
              alt="GSAP"
            />{" "}
            
          </div>
          <div className="w-fit mt-2 border-2 border-chart text-sm px-3 py-1 rounded-md flex items-center gap-1  dark:text-zinc-100 bg-popover border-dotted ">
            <FaGithub className="text-xl"/> GitHub
            
          </div>
            <div className="w-fit mt-2 border-2 border-chart text-sm px-3 py-1 rounded-md flex items-center gap-1  dark:text-zinc-100 bg-popover border-dotted ">
            <Image
              src="/images/postman.png"
              width={20}
              height={20}
              alt="postman"
            />{" "}
            Postman
          </div>
            <div className="w-fit mt-2 border-2 border-chart text-sm px-3 py-1 rounded-md flex items-center gap-1  dark:text-zinc-100 bg-popover border-dotted ">
            <Image
              src="/images/vercel.png"
              width={20}
              height={20}
              alt="vercel"
            />{" "}
            Vercel
          </div>
        </div>
        <ul className="mt-10 text-sm flex flex-col gap-3 text-zinc-400">
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
