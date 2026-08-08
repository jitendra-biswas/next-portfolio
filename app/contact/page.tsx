"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import React, { useRef } from 'react'
import { CiMail } from 'react-icons/ci'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { PiReadCvLogo } from 'react-icons/pi'

const page = () => {

    const contactDetail = [
        {
            icon:<CiMail className='text-5xl dark:bg-zinc-900 p-1 rounded' />,
            icon_name:"Gmail",
            contact_name:"jitendrabiswas12344@gmail.com",
            link:"mailto:jitendrabiswas12344@gmail.com",

        },
        {
            icon:<FaLinkedinIn  className='text-5xl dark:bg-zinc-900 p-1 rounded' />,
            icon_name:"Linkedin",
            contact_name:"Jitendra Biswas",
            link:"https://www.linkedin.com/in/jitendra-biswas-603206361/",

        },
        {
            icon:<FaGithub  className='text-5xl dark:bg-zinc-900 p-1 rounded' />,
            icon_name:"Github",
            contact_name:"Jitendra Biswas",
            link:"https://github.com/jitendra-biswas",

        },
        {
            icon:<PiReadCvLogo  className='text-5xl dark:bg-zinc-900 p-1 rounded' />,
            icon_name:"Resume/CV",
            contact_name:"View Resume",
            link:"https://drive.google.com/file/d/1mxrVOzMPQ9vmWOLgt0RFtI1pRu6vcHps/view?usp=drive_link",

        }
    ]

    const cardRef = useRef(null);

    useGSAP(() => {
  gsap.from(cardRef.current, {
    opacity: 0,
    y: 80,
   delay:0.2
  });
});

  return (
   <>
    <div ref={cardRef} className='pt-20 h-[90vh]'>
        <h1 className='heading text-3xl font-semibold mb-10'>Get In Touch</h1>

       <div className='flex flex-wrap gap-5 px-3'>
         {contactDetail.map((contact,idx:number)=>{
            return (

                <Link  key={idx} href={contact.link} target='_blank' className=" w-fit card flex items-center gap-3 bg-popover border-2 dark:border-[#1f1f1f] p-2 rounded-xl hover:scale-110 transition-all">
            <div className="left">{contact.icon}</div>
            <div className="right">
                <p className='text-sm text-zinc-400'>{contact.icon_name}</p>
                <p>{contact.contact_name}</p>
            </div>
        </Link>
            )
        })}
       </div>
    </div>
   </>
  )
}

export default page
