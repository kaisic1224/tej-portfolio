import { motion, useTransform, useViewportScroll } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import { useRef } from "react";
import IntroductionWording from "../components/IntroductionWording";
import Rolldown from "../components/Rolldown";
import RotateWord from "../components/RotateWord";
import useScrollportView from "../hooks/useScrollportDimensions";

export interface title {
  prefix?: string;
  title: string;
  position: number;
}

const propTitles = [
  { prefix: "a", title: "student.", position: 0 },
  { prefix: "a", title: "developer.", position: 1 },
  { prefix: "a", title: "gamer.", position: 2 },
  { prefix: "an", title: "anime watcher.", position: 3 }
];
const propTitles2 = [
  { title: "honest.", position: 0 },
  { title: "creative.", position: 1 },
  { title: "wild.", position: 2 },
  { title: "observant.", position: 3 }
];

const vars = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const letters = {
  hidden: {
    y: 200,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.6
    }
  }
};

const paras = {
  hidden: {
    y: 100,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const about = () => {
  const { scrollYProgress } = useViewportScroll();
  const [titles, setTitles] = useState<title[]>(propTitles);
  const [titles2, setTitles2] = useState<title[]>(propTitles2);
  const startingRef = useRef<HTMLElement>(null);
  const [introWordRef, introStart, introEnd] = useScrollportView(startingRef);
  const ref2 = useRef<HTMLElement>(null);
  const [wordRef2, rotateStart, rotateEnd] = useScrollportView(ref2);
  return (
    <>
      <Head>
        <title>About | Vincent Fong</title>
      </Head>
      <div className='min-h-screen bg-black text-cream pl-[50px]'>
        <section className='px-8 min-h-screen' ref={startingRef}>
          <motion.h1
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className='uppercase text-6xl font-bold relative after:absolute after:bg-purple-primary
          after:w-[12.5%] after:h-2 after:-bottom-3 after:left-0'
          >
            About <span className='text-purple-primary'>me</span>
          </motion.h1>
          <IntroductionWording
            offsetY={scrollYProgress}
            start={introStart as number}
            end={introEnd as number}
          />
        </section>
        <section ref={ref2} className='px-8 mt-[50vw] min-h-[200vh]'>
          <div className='text-6xl font-bold h-full overflow-hidden lowercase'>
            <motion.h2
              variants={vars}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true }}
              className='pb-4 inline-block relative'
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ ease: "easeOut", duration: 0.6 }}
                className='absolute bottom-0 left-0 bg-purple-primary h-1'
              />
              {"Myself".split("").map((letter) => {
                return (
                  <motion.span
                    className='tracking-wide inline-block'
                    variants={letters}
                    key={letter}
                  >
                    {letter}
                  </motion.span>
                );
              })}
            </motion.h2>
          </div>

          <motion.div
            variants={{
              show: {
                transition: { staggerChildren: 0.25, delayChildren: 1 }
              }
            }}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='grid grid-cols-2'
          >
            <motion.img variants={paras} src='' alt='ggottem' />
            <motion.p variants={paras}>
              Hi, I'm Vincent! I love to code and create websites. I also love{" "}
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
          >
            <RotateWord titles={titles} />
          </motion.div>
        </section>
      </div>
    </>
  );
};
export default about;
