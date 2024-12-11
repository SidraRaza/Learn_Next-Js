'use client'
import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

const page = () => {
  const ref = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  useGSAP(()=>{
   gsap.timeline([ref.current,ref2.current,ref3.current]).to(ref.current,{
   x:1200,
   duration:1,
   borderRadius:500,
   rotate:360,
   }).to(ref2.current,{
    x:1200,
    duration:1,
   }).to(ref3.current,{
    x:1200,
    duration:1,
    scale:0.7
   })
  })
  return (
    <div>
      <h1 ref={ref} className='bg-red-500 p-16 w-[300px] h-[300px]'>Sidra</h1>
      <h1 ref={ref2} className='bg-blue-400 p-16 w-[300px] h-[300px]'>Ahmed</h1>
      <h1 ref={ref3} className='bg-pink-400 p-16 w-[300px] h-[300px]'>Iqra</h1>
    </div>
  )
}

export default page