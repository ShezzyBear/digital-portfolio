'use client';
import { filterProps } from 'framer-motion';
import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Shez Bhagwandin",
            "Azure Administrator",
            "Microsoft Developer",
            "Leader",
            "Learner",
        ],
        loop: true,
        delaySpeed: 800,
    });

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img
                className='relative rounded-full h-40 w-30 mx-auto object-cover'
                src="https://techprofile.blob.core.windows.net/images/_L9_D-Iw2U2DvNPJuSI8uQ.png?8DAB37"
                alt="" />

            <div className='z-20'>
                <h2 className='text-sm uppdercase text-gray-500 pb-2 tracking-[13px]' >
                    System Administrator
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor="#651DF5" />
                </h1>

                <div className='pt-5'>
                    <Link href= "#about">
                    <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                    </Link>
                </div>

            </div>

        </div>
    );
}