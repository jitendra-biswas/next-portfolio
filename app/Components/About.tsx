import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
    <div className='flex flex-col gap-5'>
      <h1 className='heading text-3xl font-semibold'>About Me</h1>
     <div className='flex gap-3 mb-20'>
        <div className="left">
            <div className=" relative profile-image w-42 h-42 bg-[var(--profile)] rounded overflow-hidden">
                <Image src="/images/profile.png" fill alt='profile image' className='object-cover object-top scale-130' sizes='200' />
            </div>
        </div>
        <div className="right">
          <h1 className='text-xl font-semibold'>Jitendra Biswas</h1>
            <p className='text-sm text-gray-400'>I'm a MERN Stack Developer who enjoys building modern, responsive, and interactive web applications. I love turning ideas into clean, user-friendly digital experiences.</p>
            <div className="skills">
              <h1 className='text-sm font-semibold mt-4 text-zinc-400'>Skills</h1>
              <div className="techs flex items-center gap-2">
                <Image src="/images/javascript.png" width={20} height={20} alt='javascript'/>
                <Image src="/images/reactjs.png" width={20} height={20} alt='reactjs'/>
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
