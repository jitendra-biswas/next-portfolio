"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Image from 'next/image'
import { useRef } from 'react'

const About = () => {
  const headRef = useRef(null);
  const profileRef = useRef(null);
  const profileInfoRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
   useGSAP(()=>{
    gsap.from(headRef.current,{
         opacity:0,
         y:100,
         scrollTrigger:{
          trigger:headRef.current,
          scroller:"body",
          start:"top 80%"
         }
    })
    gsap.from(profileRef.current,{
         opacity:0,
         y:100,
         delay:0.2,
         scrollTrigger:{
          trigger:headRef.current,
          scroller:"body",
          start:"top 85%"
         }
    })
    gsap.from(profileInfoRef.current,{
         opacity:0,
         x:100,
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
    <div className='flex flex-col gap-5'>
      <h1 ref={headRef} className='heading text-3xl font-semibold'>About Me</h1>
     <div className='flex max-md:flex-col gap-3 mb-20'>
        <div ref={profileRef} className="left">
            <div className=" relative profile-image w-42 h-42 bg-[var(--profile)] rounded overflow-hidden">
                <Image src="/images/profile.png" fill alt='profile image' className='object-cover object-top scale-130' loading='eager' sizes='200' />
            </div>
        </div>
        <div ref={profileInfoRef} className="right">
          <h1 className='text-xl font-semibold'>Jitendra Biswas</h1>
            <p className='text-sm text-gray-400'>I'm a MERN Stack Developer who enjoys building modern, responsive, and interactive web applications. I love turning ideas into clean, user-friendly digital experiences.</p>
            <div className="skills">
              <h1 className='text-sm font-semibold mt-4 text-zinc-400'>Skills</h1>
              <div className="techs flex flex-wrap items-center gap-2">
                <Image src="/images/javascript.png" width={20} height={20} alt='javascript'/>
                <Image src="/images/reactjs.png" width={20} height={20} alt='reactjs' className='react'/>
                <Image src="/images/nodejs.png" width={20} height={20} alt='nodejs'/>
                <Image src="/images/nextjs.png" width={20} height={20} alt='nextjs'/>
                <Image src="/images/tailwindcss.png" width={20} height={20} alt='tailwindcss'/>
                <Image src="/images/mongodb.png" width={20} height={20} alt='mongodb'/>
                <img src="/images/gsap.png" className='h-3' alt='gsap'/>
              </div>
            </div>
        </div>
     </div>
    </div>
    </>
  )
}

export default About
