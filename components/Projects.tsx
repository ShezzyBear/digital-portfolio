'use client';
import { motion } from 'framer-motion';
import React from 'react';

type Props = {}

function Projects({ }: Props) {
    const projects = [1, 2, 3];
    return (
        <motion.div
        initial={{
            opacity: 0
        }}
        whileInView={{
            opacity: 1
        }}
        transition={{
            duration: 1.5
        }}
        className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#651df5]/80'>
                {projects.map((project, i) => (
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                        <motion.img
                        initial={{
                            y: -300
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 1.2
                        }}
                        viewport={{
                            once: true
                        }}
                            src="https://www.sanity.io/static/images/logo_rounded_square.png"
                            alt=""
                            className='w-32 h-32 xl:w-64 xl:h-64'
                        />

                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#7326de]/50'>Case Study {i + 1} of {projects.length}:
                                </span>{" "}
                                Help Desk Automation
                            </h4>
                            <p className='text-lg text-center md:text-left'>
                                at ReactDevOverlay (webpack-internal:///(sc_client)/./node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:66:9 at HotReload (webpack-internal:///(sc_client) /./node_modules /next/dist/client/components/react-dev-overlay/hot
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#7326de]/30 left-0 h-[500px] -skew-y-12'>

            </div>
        </motion.div>
    )
}

export default Projects