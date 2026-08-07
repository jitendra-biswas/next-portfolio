"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Link from 'next/link'
import React, { useRef } from 'react'
import { RiContactsLine } from 'react-icons/ri'

const LetConnect = () => {
  const connectRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(()=>{
    gsap.from(connectRef.current,{
      opacity:0,
      y:100,
      scrollTrigger:{
        trigger:connectRef.current,
        scroller:"body",
        start:"top 80%"
      }
    })
  })

  return (
    <div ref={connectRef} className='w-full h-42 border-2 border-chart border-dashed rounded flex flex-col items-center justify-center gap-2 mb-20'>
      <p className='text-xl text-zinc-500'>Hey, you scrolled this far, let's talk.</p>
      <Link href="/contact" className='border-2 border-zinc-700 px-2 rounded border-dotted flex items-center gap-2 hover:scale-110 transition-all cursor-pointer'><RiContactsLine className='text-sm'/> Contact</Link>
    </div>
  )
}

export default LetConnect
