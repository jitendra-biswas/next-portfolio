import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { motion } from 'motion/react'

const ProjectCard = (props:any) => {
  return (
    <motion.div whileHover={{scale:1.1}} className=" bg-popover w-72 max-lg:w-full max-md:w-[85%] h-90 rounded-md overflow-hidden flex flex-col gap-3 border shrink-0">
        <div className="relative image w-full h-1/2 max-lg:h-96">
          <Image src={props.img} fill sizes='100' className='object-cover object-center' alt='k72'/>
        </div>
        <div className='px-3 flex flex-col gap-3'>
          <div className="title w-full flex items-center justify-between">
            <div className="left">{props.title}</div>
            <div className="right flex items-center gap-2">
              <Link href={props.github} target='_blank' className='hover:scale-110 transition-all'><FaGithub /></Link>
              <Link href={props.link} target='_blank' className='hover:scale-110 transition-all'><FiExternalLink /></Link>
            </div>
        </div>
        <div className="desc text-sm text-zinc-400">{props.desc}</div>
        <div className="technologies">
          <ul className='flex flex-wrap items-center gap-1 max-lg:pb-3'>
            
            {props.tech.map((techStack:any,idx:number)=>{
             return (
             <li key={idx} className='border border-muted rounded-full px-2 py-1 text-xs'>{techStack}</li>
             )
            })}
          </ul>
        </div>
        </div>
    </motion.div>
  )
}

export default ProjectCard
