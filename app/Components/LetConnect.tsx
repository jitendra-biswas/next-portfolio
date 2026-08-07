import Link from 'next/link'
import React from 'react'
import { RiContactsLine } from 'react-icons/ri'

const LetConnect = () => {
  return (
    <div className='w-full h-42 border-2 border-chart border-dashed rounded flex flex-col items-center justify-center gap-2 mb-20'>
      <p className='text-xl text-zinc-500'>Hey, you scrolled this far, let's talk.</p>
      <Link href="/contact" className='border-2 border-zinc-700 px-2 rounded border-dotted flex items-center gap-2 hover:scale-110 transition-all cursor-pointer'><RiContactsLine className='text-sm'/> Contact</Link>
    </div>
  )
}

export default LetConnect
