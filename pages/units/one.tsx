import Head from "next/head";
import { motion } from "framer-motion";
import TextCardBorder from "../../components/TextCardBorder";

// REFLECTIONS ONLY AT THE END OF EACH UNIT NOT EACH EXERCISE
const one = () => {
  return (
    <>
      <Head>
        <title>Unit One | Vincent Fong</title>
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
              One
            </motion.span>
          </h1>
          <div
            id='discovering-your-computer'
            className='grid grid-cols-2 pb-8 mt-12 gap-8 px-8'
          >
            <p className='px-8 h-64 shadow'>
              <img
                className='mx-auto w-full'
                src='/unit1-discover-computer.png'
              />
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='lab-text'>
                Discovering Your Computer
                <a
                  className='text-xl font-bold'
                  target='_blank'
                  href='https://docs.google.com/document/d/1EIcM-HDQme6Tw77ABWHVPKQVN6XpssAgTihUtn0roTo/edit?usp=drive_web&authuser=1'
                >
                  Link
                </a>
              </p>
            </TextCardBorder>
          </div>
          <div
            id='hardware-key-terms'
            className='grid grid-cols-2 pb-8 mt-12 gap-8 px-8'
          >
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='lab-text'>
                Hardware Key Terms
                <a
                  className='text-xl font-bold'
                  target='_blank'
                  href='https://docs.google.com/spreadsheets/d/1Cb4adyqJ8DdgOcvF6EpXRwyNPy4rkuRMwSjJUHdjdTg/edit?usp=drive_web&authuser=1'
                >
                  Link
                </a>
              </p>
            </TextCardBorder>
            <p className='px-8 h-64'>
              <iframe
                className='w-full h-full'
                src='https://docs.google.com/spreadsheets/d/e/2PACX-1vTliR7NUoiDUB-sprXD7LBicr2sPas0lmDC17bWurBIOdvtQkzg-ADCEbwvt3EA1jnKd1KuYsxW_AOy/pubhtml?gid=1981747926&amp;single=true&amp;widget=true&amp;headers=false'
              ></iframe>
            </p>
          </div>
          <div
            id='parts-of-a-computer'
            className='grid place-items-center pb-8 mt-12 gap-8 px-8'
          >
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              Lab - Parts of a Computer
              <p className='lab-text h-64 w-[50vw]'>
                <a
                  className='text-xl font-bold'
                  target='_blank'
                  href='https://docs.google.com/document/d/13GRUiuP2SUbq3dRWnHGHJLeqeT4Fp3E-OxrSZQkZHFw/edit?usp=drive_web&authuser=1'
                >
                  Link
                </a>
              </p>
            </TextCardBorder>
          </div>
          <div
            id='future-of-tech'
            className='grid grid-cols-2 pb-8 mt-12 gap-8 px-8'
          >
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='lab-text'>
                Assignment - Future of Tech
                <a
                  className='text-xl font-bold'
                  target='_blank'
                  href='https://docs.google.com/presentation/d/1vmncWT3zEjRrOYvmsxzIv8JXHkT7D86Ag6OhuhCIy30/edit?usp=drive_web&authuser=1'
                >
                  Link
                </a>
              </p>
            </TextCardBorder>
            <p className='px-8 h-64 shadow'>
              <img src='/unit1-future.png' className='mx-auto w-full' alt='' />
            </p>
          </div>
          <div id='the-cpu' className='grid grid-cols-2 pb-8 mt-12 gap-8 px-8'>
            <p className='px-8 h-64 shadow'>
              <img className='w-full mx-auto' src='/unit1-cpu.png' alt='' />
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='lab-text'>
                Lab - The CPU
                <a
                  className='text-xl font-bold'
                  target='_blank'
                  href='https://docs.google.com/document/d/1k1Dm4_Qqq80XViqPy8C_pYORspCr9tXOEeEuY5Ukakg/edit?usp=drive_web&authuser=1'
                >
                  Link
                </a>
              </p>
            </TextCardBorder>
          </div>
          <div
            id='the-motherboard'
            className='grid grid-cols-2 pb-8 mt-12 gap-8 px-8'
          >
            <p className='px-8 h-64'>
              <a
                className='text-xl font-bold'
                target='_blank'
                href='https://docs.google.com/document/d/1-sPLQ3WfrimpAhsFhq-sxKvl4KSFFJ98gGWupWFTjwk/edit?usp=drive_web&authuser=1'
              >
                Link
              </a>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='lab-text'>Lab - The Motherboard</p>
            </TextCardBorder>
          </div>
          <div
            id='custom-pc-purchase'
            className='grid grid-cols-2 pb-8 mt-12 gap-8 px-8'
          >
            <p className='px-8 h-64'>
              <a
                className='text-xl font-bold'
                target='_blank'
                href='https://docs.google.com/document/d/12THJ7mOogYbsHT9UEm_QAPG9c4lGrN5HxToPjdLox2U/edit?usp=drive_web&authuser=1'
              >
                Link
              </a>
              <a
                className='text-xl font-bold'
                href='https://docs.google.com/spreadsheets/d/1mTtqZ-yIR5nsxdtzPjPkDsMDsRdjgeH2ghoAXc8qQMI/edit?usp=drive_web&authuser=1'
              >
                Link
              </a>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='lab-text'>Assignment - Custom PC Purchase</p>
            </TextCardBorder>
          </div>
        </section>
      </div>
    </>
  );
};
export default one;
