import { motion } from "framer-motion";
import Head from "next/head";
import TextCardBorder from "../../components/TextCardBorder";

const two = () => {
  return (
    <>
      <Head>
        <title>Unit Two | Vincent Fong</title>
      </Head>
      <div className='min-h-screen bg-black text-cream pl-[50px] pb-8'>
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
              Two
            </motion.span>
          </h1>
          <div
            id='digital-logic-gates'
            className='grid grid-cols-2 pb-8 mt-12 gap-4 px-8'
          >
            <p className='px-8 h-64 shadow group'>
              <img src='/unit2-digital-logic.png' alt='' />
              <a
                className='lab-link'
                target='_blank'
                href='https://docs.google.com/document/d/1OJCPZT-dmUyds6xRZDyIyFdMYjsLlR-Uu2owEDUeXh4/edit?usp=drive_web&authuser=1'
              >
                Open in tab
              </a>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='lab-text text-4xl text-center'>
                Lab - Digital Logic Gates
              </p>
            </TextCardBorder>
          </div>
          <div
            id='construction-of-truth-tables'
            className='grid grid-cols-2 pb-8 mt-12 gap-4 px-8'
          >
            <p className='px-8 h-64 shadow group'>
              <img src='/unit2-construction-tables.png' alt='' />
              <a
                className='lab-link'
                target='_blank'
                href='https://docs.google.com/document/d/1DtV0rPj5gIGOVgmMJtwCdNje_sCxTC3SLLTnm0525YE/edit?usp=drive_web&authuser=1'
              >
                Open in tab
              </a>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='lab-text text-4xl text-center'>
                Lab A - Construction Of Truth Tables
              </p>
            </TextCardBorder>
          </div>
          <div
            id='combining-logic-gates'
            className='grid grid-cols-2 pb-8 mt-12 gap-4 px-8'
          >
            <p className='px-8 h-64 shadow group'>
              <img src='/unit2-combining.png' alt='' />
              <a
                className='lab-link'
                target='_blank'
                href='https://docs.google.com/document/d/1HxSJw7KNR0wyRk0IBelrK6GTycQxhsdtOLiwTmYGEnM/edit?usp=drive_web&authuser=1'
              >
                Open in tab
              </a>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='lab-text text-4xl text-center'>
                Lab B - Combining Logic Gates
              </p>
            </TextCardBorder>
          </div>
          <div
            id='booean-and-truth-tables-from-logic-diagrams'
            className='grid grid-cols-2 pb-8 mt-12 gap-4 px-8'
          >
            <p className='px-8 h-64 shadow group'>
              <img src='/unit2-boolean-expressions.png' alt='' />
              <a
                className='lab-link'
                target='_blank'
                href='https://docs.google.com/document/d/1_sDeybs3duXhIza-5ey5xdEuSwcbCAKrXYGZ7t5QqA8/edit?usp=drive_web&authuser=1'
              >
                Open in tab
              </a>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='lab-text text-4xl text-center'>
                Lab C - Boolean and Truth Tables from Logic Diagrams
              </p>
            </TextCardBorder>
          </div>
          <div
            id='logic-diagrams-from-boolean-expressions'
            className='grid grid-cols-2 pb-8 mt-12 gap-4 px-8'
          >
            <p className='px-8 h-64 shadow group'>
              <img src='/unit2-logic-diagrams.png' alt='' />
              <a
                className='lab-link'
                target='_blank'
                href='https://docs.google.com/document/d/1r6UU-7QBpY2hDtuh80vt5cH2jhTvFH2wHw80CtY4kvg/edit?usp=drive_web&authuser=1'
              >
                Open in tab
              </a>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='lab-text text-4xl text-center'>
                Lab - D Logic Diagrams from Boolean Expressions
              </p>
            </TextCardBorder>
          </div>
          <div
            id='wiring-the-logic-gates-and-circuits'
            className='grid grid-cols-2 pb-8 mt-12 gap-4 px-8'
          >
            <p className='px-8 h-64 shadow group'>
              <img src='/unit2-lab.png' alt='' />
              <a
                className='lab-link'
                target='_blank'
                href='https://docs.google.com/document/d/1UcZfrGrbjMT_yllDiJUjMXScfWqMLnhmTA3NENx-3Fw/edit?usp=drive_web&authuser=1'
              >
                Open in tab
              </a>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='lab-text text-4xl text-center'>
                Lab - Wiring the Logic Gates and Circuits
              </p>
            </TextCardBorder>
          </div>
        </section>
        <section className='relative px-16 overflow-x-hidden'>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className='h-1 bg-white mb-6'
          />
          <h2 className='text-center text-5xl'>Unit Reflection</h2>
          <p className='text-lg mt-6'>
            I think that this unit was pretty good. It was my first time working
            with breadboards, but it was pretty fun. I think it could've been
            more challenging, but also more interactive. I think that it was
            nice that we could do it at our own pace, but I think having
            groupmates or teacher feedback would make it easier for those who
            haven't done it before.
          </p>
        </section>
      </div>
    </>
  );
};
export default two;
