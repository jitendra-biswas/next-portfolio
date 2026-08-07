import React from "react";
import ProjectCard from "@/app/Components/ProjectCard";

const Project = (props) => {
  const projectData = [
    {
      img:"/images/project_image/img1.png",
      title:"K72 Ui Clone",
      desc:"Responsive K72 website clone built with React, Tailwind CSS, and GSAP animations.",
      github:"https://github.com/jitendra-biswas/K72_UI_Clone",
      link:"https://k72-ui-clone.vercel.app/",
      tech:["React.js","Tailwind","GSAP"]
    },
    {
      img:"/images/project_image/img2.png",
      title:"URL Shortner",
      desc:"Shortens long URLs into secure, shareable links with instant redirection.",
      github:"https://github.com/jitendra-biswas/urlshortner",
      link:"https://oneurlshortner.vercel.app/",
      tech:["React.js","Node.js","Express.js","MongoDB"]
    },
    {
      img:"/images/project_image/img3.png",
      title:"LinkHub",
      desc:"LinkHub is a tool to organize and share multiple important links in one place.",
      github:"https://github.com/jitendra-biswas/LinkHub",
      link:"https://linkhubn.netlify.app/",
      tech:["React.js","Tailwind"]
    },
    
  ]
  return (
    <>
    <h1 className="heading w-fit text-3xl font-semibold">Featured Projects</h1>
      <div className="w-full h-fit flex flex-wrap gap-3 mt-5 pb-20">
        {projectData.map((project,idx)=>{
          return (
            <ProjectCard key={idx} img={project.img} title={project.title} desc={project.desc} github={project.github} link={project.link} tech={project.tech}/>
          )
        })}
      </div>
    </>
  );
};

export default Project;
