'use client';
import { motion, MotionConfig } from 'framer-motion'
import React from 'react'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
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
        src="https://st.hzcdn.com/simgs/c573185c0196f1a1_3-3016/_.jpg" alt="" />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>
                System Administrator
            </h4>
            <p className='font-bold text-1xl mt-1'>
                Window Nation
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