'use client';
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function About({ }: Props) {
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
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>


            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                src='https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/349599482_261052816410088_72280099188778311_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=7hU2TH9d3uAAX_7_2gV&_nc_oc=AQkKGotCdMWWKNFKFgHDQfJyzfvRqx-vDrT_owihJp0mBfgmO3mQ0AfIVh1_h-f_PKA&_nc_ht=scontent-sin6-1.xx&oh=00_AfD2qyvTyyq-FCCveoR45ng21zpHxGOzbqU_gWfCaecu1A&oe=648E5644'
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a <span className='underline decoration-[#651df5]/50'> little</span> {" "} background
                </h4>
                <p className='text-base'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc consequat interdum varius. Cursus metus aliquam eleifend mi in nulla posuere. Amet volutpat consequat mauris nunc. Urna condimentum mattis pellentesque id nibh. 
                    
                    Nibh praesent tristique magna sit amet. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Luctus venenatis lectus magna fringilla urna porttitor. Sit amet risus nullam eget. Eget aliquet nibh praesent tristique magna sit amet purus. Convallis tellus id interdum velit. Magna fermentum iaculis eu non. Quisque sagittis purus sit amet volutpat consequat. Vivamus at augue eget arcu dictum varius duis at consectetur. Sed adipiscing diam donec adipiscing.
                </p>
            </div>


        </motion.div>
    )
}

export default About