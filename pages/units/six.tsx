import Head from "next/head";
import { motion } from "framer-motion";
import TextCardBorder from "../../components/TextCardBorder";

const six = () => {
  return (
    <>
      <Head>
        <title>Unit Six | Vincent Fong</title>
      </Head>
      <div className='min-h-screen bg-black text-cream pl-[50px]'>
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
              Six
            </motion.span>
          </h1>
          <div id='arduino-blink-with-nano' className='grid grid-cols-2'>
            <p>
              <a
                target='_blank'
                href='https://docs.google.com/document/d/1AoXa5Bqg5_RIX0SI0qNdguiaH8kJ2_cFho79r4MEyJU/edit?usp=drive_web&authuser=1'
              >
                Link
              </a>
            </p>
            <TextCardBorder bg='bg-purple-secondary' bgBorder='border-white'>
              <p className='font-medium z-10 px-2'>
                Career Spotlight - Hardware/Software Engineering
              </p>
            </TextCardBorder>
          </div>
        </section>
      </div>
    </>
  );
};
export default six;
