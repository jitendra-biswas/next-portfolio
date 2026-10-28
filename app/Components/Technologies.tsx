"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const Technologies = () => {
  const AllTechnologies = [
    {
      icon: "/images/javascript.png",
      name: "JavaScript",
    },
    {
      icon: "/images/ts.png",
      name: "TypeScript",
    },
    {
      icon: "/images/reactjs.png",
      name: "React.js",
    },
    {
      icon: "/images/nextjs.png",
      name: "Next.js",
    },
    {
      icon: "/images/nodejs.png",
      name: "Node.js",
    },
    {
      icon: "/images/mongodb.png",
      name: "MongoDB",
    },
    {
      icon: "/images/supabase.png",
      name: "Supabase",
    },
    {
      icon: "/images/tailwindcss.png",
      name: "Tailwind CSS",
    },
    {
      icon: "/images/gsaptech.png",
      name: "GSAP",
    },
    {
      icon: "/images/framer.png",
      name: "Framer Motion",
    },
    {
      icon: "/images/github.png",
      name: "Git Hub",
    },
  ];

  const headRef = useRef(null);
  const infoRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(headRef.current, {
      opacity: 0,
      y: 100,
      delay: 0.1,
      scrollTrigger: {
        trigger: headRef.current,
        scroller: "body",
        start: "top 85%",
      },
    });
    gsap.utils.toArray(".technology").forEach((card: any) => {
      gsap.from(card, {
        opacity: 0,
        y: 100,
        delay: 0.2,
        scrollTrigger: {
          trigger: card,
          scroller: "body",
        },
      });
    });

    gsap.from(infoRef.current, {
      opacity: 0,
      y: 100,
      delay: 0.3,
      scrollTrigger: {
        trigger: headRef.current,
        scroller: "body",
        start: "top 85%",
      },
    });
  });
  return (
    <>
      <div id="skill" className=" w-full h-fit pb-20 dark:text-zinc-200">
        <h1 ref={headRef} className="heading text-3xl font-semibold">
          Tools & Technologies
        </h1>
        <Marquee direction="left" speed={30} gradient gradientColor="black" className="mt-5">
          {AllTechnologies.map((technology, idx) => {
            return (
              <div className="technology w-fit mt-2 border-2 border-chart text-sm px-3 py-1 rounded-md flex items-center dark:text-zinc-100 bg-popover border-dotted mr-5">
                <div className="relative w-7 h-7 shrink-0">
                  <Image
                    src={technology.icon}
                    fill
                    alt={technology.name}
                    sizes="20px"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                {technology.name}
              </div>
            );
          })}
        </Marquee>
        <Marquee direction="right" speed={30} gradient gradientColor="black">
          {AllTechnologies.map((technology, idx) => {
            return (
              <div className="technology w-fit mt-2 border-2 border-chart text-sm px-3 py-1 rounded-md flex items-center dark:text-zinc-100 bg-popover border-dotted mr-5">
                <div className="relative w-7 h-7 shrink-0">
                  <Image
                    src={technology.icon}
                    fill
                    alt={technology.name}
                    sizes="20px"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                {technology.name}
              </div>
            );
          })}
        </Marquee>

        <ul
          ref={infoRef}
          className="mt-10 text-sm flex flex-col gap-3 text-zinc-400"
        >
          <li className="list-disc">
            Architected and developed responsive, high-performance web
            applications using React, Next.js, and the MERN stack.
          </li>
          <li className="list-disc">
            Built reusable, scalable UI components and integrated RESTful APIs
            with efficient data fetching and error handling.
          </li>
          <li className="list-disc">
            Created smooth, interactive user experiences with GSAP animations
            while following accessibility and responsive design principles.
          </li>
          <li className="list-disc">
            Optimized application performance through code splitting, image
            optimization, SEO best practices, and clean, maintainable code.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Technologies;
