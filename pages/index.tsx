import type { NextPage } from "next";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const varChilds = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const varParents = {
  show: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const Home: NextPage = () => {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <motion.h1
        variants={varParents}
        initial='hidden'
        animate='show'
        className='bg-gradient-to-t from-purple-black via-purple-primary to-purple-secondary main-text-shadow
          font-bold bg-clip-text text-transparent text-9xl uppercase text-center flex flex-col mx-auto peer mt-8'
      >
        <motion.span className='inline-block' variants={varChilds}>
          TEJ20/TEJ3M
        </motion.span>{" "}
        <motion.span className='inline-block' variants={varChilds}>
          Vincent Fong
        </motion.span>{" "}
        <motion.span className='inline-block' variants={varChilds}>
          Comp Eng/Tech
        </motion.span>
      </motion.h1>
      <div
        className='w-5/6 transition-all delay-200 duration-300 mx-auto animate-pulse bg-purple-primary 
        shadow-purple-accent shadow-lg h-2 peer-hover:bg-purple-secondary peer-hover:shadow-cream -z-10 mt-3'
      />
      <p className='text-center text-transparent peer-hover:text-cream delay-500 duration-500 font-semibold'>
        Explore my digital portfolio throughout the 2021-2022 school year for
        this course...
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.7 }}
        className='flex items-center overflow-hidden justify-center mt-16'
      >
        <Link href={"/about"}>
          <motion.div
            className='rounded-full absolute mx-auto bg-purple-primary w-fit p-2 hover:p-3 cursor-pointer transition-all'
            layoutId='circle'
          >
            <a>
              <FaArrowRight className='w-6 h-6 fill-cream' />
            </a>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
