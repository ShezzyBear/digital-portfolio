'use client';
import { motion, MotionConfig } from 'framer-motion'
import React from 'react'

type Props = {}

export default function ExperienceCard3({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={{
            y: -100,
            opacity: 0
        }}
        whileInView={{
            opacity: 1,
            y: 0
        }}
        viewport={{
            once: true
        }}
        transition={{
            duration: 1.2
        }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src="data:image/png;base64,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"
        alt="" />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>
                Field Technician
            </h4>
            <p className='font-bold text-1xl mt-1'>
                Bravas
            </p>
            <div className='flex space-x-2 my-2'>
                { /* Tech Used */ }
                <img
                className='h-10 w-10 rounded-full'
                src="https://camo.githubusercontent.com/5c4953fcea09dd42144c846ec5b4b541e8756cbb9b70f944223059f093660521/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f706f7765727368656c6c2e706e67"
                alt="" />
                { /* Tech Used */ }
                <img
                className='h-10 w-10 rounded-full'
                src="https://camo.githubusercontent.com/655177bfec18f3ff43066085b0bb5e29d0c12d2b0908220998b0f4d703d38826/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6d6963726f736f66745f617a7572652d69636f6e2e737667"
                alt="" />
                { /* Tech Used */ }
                <img
                className='h-10 w-10 rounded-full'
                src="https://camo.githubusercontent.com/21a4abb131c492719457b1113d7535ccff599d9c7fb1e1b53b816befc3e4d1c3/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f61646f62657072656d6965726570726f2e706e67"
                alt="" />
            </div>
            <p>
                Started work... - Ended...
            </p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary Points Summary Points Summary Points Summary Points</li>
                <li>Summary Points Summary Points Summary Points Summary Points</li>
                <li>Summary Points Summary Points Summary Points Summary Points</li>
                <li>Summary Points Summary Points Summary Points Summary Points</li>
                <li>Summary Points Summary Points Summary Points Summary Points</li>
            </ul>

        </div>
    </article>
    
  )
}