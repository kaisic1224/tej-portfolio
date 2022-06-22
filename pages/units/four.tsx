import Head from "next/head";
import TextCardBorder from "../../components/TextCardBorder";
import { motion } from "framer-motion";

const four = () => {
  return (
    <>
      <Head>
        <title>Unit Four | Vincent Fong</title>
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
              Four
            </motion.span>
          </h1>
          <div id='digital-data' className='grid grid-cols-2'>
            <p>
              <a
                target='_blank'
                href='https://docs.google.com/document/d/1wZbMqE74MugfQdpzyDe4tqGxIV4O9BmUqj_oVA5kpKM/edit?usp=drive_web&authuser=1'
              >
                Link
              </a>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium z-10 px-2'>Lab - Digital Data</p>
            </TextCardBorder>
          </div>
          <div id='numbering-systems' className='grid grid-cols-2'>
            <p>
              <a
                target='_blank'
                href='https://docs.google.com/document/d/1Jp9HxxszAinhvKf_pv6IMC6W6LBzlsceXWYDM38Emwk/edit?usp=drive_web&authuser=1'
              >
                Binary to Decimal
              </a>
              <a
                target='_blank'
                href='https://docs.google.com/document/d/1UjaRLjSHAU9FOYe5uQpAk8rClhMbOjoia8mm_ciIjsI/edit?usp=drive_web&authuser=1'
              >
                Octa to Decimal
              </a>
              <a
                target='_blank'
                href='https://docs.google.com/document/d/1O9OCwBjEVESjaw6ZryVJtf8OqOa2FAjEBEk9zA9tvG0/edit?usp=drive_web&authuser=1'
              >
                Hexadecimal to Decimal
              </a>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium z-10 px-2'>
                Lab - Numbering Systems (Dec, Bin, Hex, Oct)
              </p>
            </TextCardBorder>
          </div>
          <div id='binary-addition' className='grid grid-cols-2'>
            <p>
              <a
                target='_blank'
                href='https://docs.google.com/document/d/1irPEhE1Hswzyv3Lbem2qqZ-zvbsoYtx-LEsV3rqqJ8U/edit?usp=drive_web&authuser=1'
              >
                Link
              </a>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium z-10 px-2'>Lab - Binary Addition</p>
            </TextCardBorder>
          </div>
          <div id='ascii-code' className='grid grid-cols-2'>
            <p>
              <a
                target='_blank'
                href='https://docs.google.com/document/d/10sHd1TYR3_OxRvqmaEJaLSnvS1465qkfjwr-jJHRX5M/edit?usp=drive_web&authuser=1'
              >
                Link
              </a>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium z-10 px-2'>Lab - ASCII Code</p>
            </TextCardBorder>
          </div>
          <div id='binary-dec-hex-octal' className='grid grid-cols-2'>
            <p>
              <a
                target='_blank'
                href='https://drive.google.com/file/d/1LaLALG5u3Vr1mcrE7-_3gaoOJW0ApRfW/view?usp=drive_web&authuser=1'
              >
                Link
              </a>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium z-10 px-2'>
                Quiz - #3 - Binary/Dec/Hex/Octal
              </p>
            </TextCardBorder>
          </div>
        </section>
      </div>
    </>
  );
};
export default four;
