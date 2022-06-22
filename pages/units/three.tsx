import Head from "next/head";
import { motion } from "framer-motion";
import TextCardBorder from "../../components/TextCardBorder";
import { useEffect, useRef, useState } from "react";
import VideoLoader from "../../components/VideoLoader";

const three = () => {
  return (
    <>
      <Head>
        <title>Unit Three | Vincent Fong</title>
      </Head>
      <div className='min-h-screen pb-8 bg-black text-cream pl-[50px]'>
        <section className='px-8'>
          <h1 className='text-center font-bold text-8xl uppercase flex gap-2'>
            <motion.span
              className='inline-block bg-gradient-to-t from-purple-black to-purple-secondary bg-clip-text text-transparent'
              initial={{ x: "-50vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Unit
            </motion.span>
            <motion.span
              className='inline-block'
              initial={{ x: "50vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Three
            </motion.span>
          </h1>
          <div id='7-segment-display-with-switch' className='grid grid-cols-2'>
            <p className='px-8 h-64'>
              <a
                target='_blank'
                href='https://www.tinkercad.com/things/jtf9sKEanJd-7-segment-with-switch/editel?sharecode=Hf5eIFvfDS58nJ5CZGiNjxFthgk4Vb1ZfV431s7zexY'
              >
                Link
              </a>
              <video preload='load' controls>
                <source src='/Unit3-7-segment-vid.mkv' type='video/mp4' />
              </video>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium z-10 px-2'>
                Lab - 7 Segment Display w/ Switch
              </p>
            </TextCardBorder>
          </div>
          <div id='7-segment-display-with-decoder' className='grid grid-cols-2'>
            <p className='px-8 h-64'>
              <a
                target='_blank'
                href='https://docs.google.com/document/d/1fhGmpvYx9M36kMDO-x4LbdeYxLWwUnQja2DdPGQ-2qg/edit?usp=drive_web&authuser=1'
              >
                Link
              </a>
              <video preload='load' controls>
                <source src='/unit3-7segdecoder.mkv' type='video/mp4' />
              </video>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium z-10 px-2'>
                Lab - 7 Segment Display w/ Decoder
              </p>
            </TextCardBorder>
          </div>
          <div id='half-adder-investigation' className='grid grid-cols-2'>
            <p className='px-8 h-64'>
              <a
                target='_blank'
                href='https://docs.google.com/document/d/1TRuNB-qivFuiiGqJ2mbTxAlSLtohrMYS0dTPx9PUdNQ/edit?usp=drive_web&authuser=1'
              >
                Link
              </a>
              <a
                target={"_blank"}
                href='https://www.tinkercad.com/things/9C92m6SoLQF-brave-migelo-kasi/editel?sharecode=Gp026sGj8-c-LTSY5PpaaN_IeTDP3pFZp7tSgoDrFrQ'
              ></a>
              <video preload='load' controls>
                <source src='/unit3-half-adder.mkv' type='video/mp4' />
              </video>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium z-10 px-2'>
                Lab - Half Adder Investigation
              </p>
            </TextCardBorder>
          </div>
          <div id='calculating-resistance' className='grid grid-cols-2'>
            <p className='px-8 h-64'>
              <a
                target='_blank'
                href='https://docs.google.com/document/d/1Atnkmaf88v0HN-H_8UpqE6pmcBgBGmSJApfXhx7aupE/edit?usp=drive_web&authuser=1'
              >
                Link
              </a>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium z-10 px-2'>
                Lab - Calculating Resistance
              </p>
            </TextCardBorder>
          </div>
          <div id='electronics-101' className='grid grid-cols-2'>
            <p className='px-8 h-64'>
              <a
                target='_blank'
                href='https://docs.google.com/document/d/1o2KqIIzmFnZ7SLLoJ5z1fgBOw96OF8bmHlKbbypyTp0/edit?usp=drive_web&authuser=1'
              >
                Link
              </a>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium z-10 px-2'>Lab - Electronics 101</p>
            </TextCardBorder>
          </div>
        </section>
      </div>
    </>
  );
};
export default three;
