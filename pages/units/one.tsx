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
      <div className='min-h-screen bg-black text-cream pl-[50px] pb-8'>
        <section className='px-8 overflow-x-hidden'>
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
            <motion.p
              initial={{ x: "-100%" }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='mx-auto h-64 w-fit shadow group relative'
            >
              <a
                className='lab-link'
                target='_blank'
                href='https://docs.google.com/document/d/1EIcM-HDQme6Tw77ABWHVPKQVN6XpssAgTihUtn0roTo/edit?usp=drive_web&authuser=1'
              >
                Open in tab
              </a>
              <img className='w-full' src='/unit1-discover-computer.png' />
            </motion.p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <motion.p
                initial={{ x: "100%" }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='lab-text text-center text-4xl'
              >
                Discovering Your Computer
              </motion.p>
            </TextCardBorder>
          </div>
          <div
            id='hardware-key-terms'
            className='grid grid-cols-2 pb-8 mt-12 gap-8 px-8'
          >
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <motion.p
                initial={{ x: "-100%" }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='lab-text text-center text-4xl'
              >
                Hardware Key Terms
                <a
                  className='font-bold text-xl hover:underline'
                  target='_blank'
                  href='https://docs.google.com/spreadsheets/d/1Cb4adyqJ8DdgOcvF6EpXRwyNPy4rkuRMwSjJUHdjdTg/edit?usp=drive_web&authuser=1'
                >
                  Link
                </a>
              </motion.p>
            </TextCardBorder>
            <motion.p
              initial={{ x: "100%" }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='px-8 h-64'
            >
              <iframe
                className='w-full h-full'
                src='https://docs.google.com/spreadsheets/d/e/2PACX-1vTliR7NUoiDUB-sprXD7LBicr2sPas0lmDC17bWurBIOdvtQkzg-ADCEbwvt3EA1jnKd1KuYsxW_AOy/pubhtml?gid=1981747926&amp;single=true&amp;widget=true&amp;headers=false'
              ></iframe>
            </motion.p>
          </div>
          <div
            id='parts-of-a-computer'
            className='grid place-items-center pb-8 mt-12 gap-8 px-8'
          >
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='lab-text text-center text-4xl h-64 w-[50vw]'>
                Lab - Parts of a Computer
                <a
                  className='text-xl font-bold hover:underline'
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
              <motion.p
                initial={{ x: "-100%" }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='lab-text text-center text-4xl'
              >
                Assignment - Future of Tech
              </motion.p>
            </TextCardBorder>
            <motion.p
              initial={{ x: "100%" }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='px-8 h-64 shadow group'
            >
              <a
                className='lab-link'
                target='_blank'
                href='https://docs.google.com/presentation/d/1vmncWT3zEjRrOYvmsxzIv8JXHkT7D86Ag6OhuhCIy30/edit?usp=drive_web&authuser=1'
              >
                Open in tab
              </a>
              <img src='/unit1-future.png' className='mx-auto w-full' alt='' />
            </motion.p>
          </div>
          <div id='the-cpu' className='grid grid-cols-2 pb-8 mt-12 gap-8 px-8'>
            <motion.p
              initial={{ x: "-100%" }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='px-8 h-64 shadow group'
            >
              <img className='w-full mx-auto' src='/unit1-cpu.png' alt='' />
              <a
                className='lab-link'
                target='_blank'
                href='https://docs.google.com/document/d/1k1Dm4_Qqq80XViqPy8C_pYORspCr9tXOEeEuY5Ukakg/edit?usp=drive_web&authuser=1'
              >
                Open in tab
              </a>
            </motion.p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <motion.p
                initial={{ x: "100%" }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='lab-text text-center text-4xl'
              >
                Lab - The CPU
              </motion.p>
            </TextCardBorder>
          </div>
          <div
            id='the-motherboard'
            className='grid grid-cols-2 pb-8 mt-12 gap-8 px-8'
          >
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <motion.p
                initial={{ x: "-100%" }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='lab-text text-center text-4xl'
              >
                Lab - The Motherboard
              </motion.p>
            </TextCardBorder>
            <motion.p
              initial={{ x: "100%" }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='px-8 h-64 shadow group'
            >
              <img src='/unit1-motherboard.png' className='w-full mx-auto' />
              <a
                className='lab-link'
                target='_blank'
                href='https://docs.google.com/document/d/1-sPLQ3WfrimpAhsFhq-sxKvl4KSFFJ98gGWupWFTjwk/edit?usp=drive_web&authuser=1'
              >
                Open in tab
              </a>
            </motion.p>
          </div>
          <div
            id='custom-pc-purchase'
            className='grid grid-cols-2 pb-8 mt-12 gap-8 px-8'
          >
            <motion.p
              initial={{ x: "-100%" }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='px-8 h-64'
            >
              <iframe
                className='w-full h-full'
                src='https://docs.google.com/spreadsheets/d/e/2PACX-1vTIe7qkxuIDOhLSa_dwVRtipy9-zfhoIEKzsyUk3TOULnO-CFZiagn7JqaqM1PhkTKYwTOZYVOoiNEg/pubhtml?gid=43276332&amp;single=true&amp;widget=true&amp;headers=false'
              ></iframe>
            </motion.p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <motion.p
                initial={{ x: "100%" }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='lab-text text-center text-4xl'
              >
                Assignment - Custom PC Purchase
                <a
                  className='font-bold text-xl hover:underline'
                  target='_blank'
                  href='https://docs.google.com/document/d/12THJ7mOogYbsHT9UEm_QAPG9c4lGrN5HxToPjdLox2U/edit?usp=drive_web&authuser=1'
                >
                  Doc Questions
                </a>
                <a
                  className='font-bold text-xl hover:underline'
                  target='_blank'
                  href='https://docs.google.com/spreadsheets/d/1mTtqZ-yIR5nsxdtzPjPkDsMDsRdjgeH2ghoAXc8qQMI/edit?usp=drive_web&authuser=1'
                >
                  Spreadsheet Planning
                </a>
              </motion.p>
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
            I think that this unit was alright, it wasn't the most interesting
            but it did go over a lot of basics and fundamentals. I think the
            custom PC assignment and future of tech were the most interesting
            and fun assignments of this unit. I really liked listening to other
            people's presentations and I thought it was pretty interesting.
          </p>
        </section>
      </div>
    </>
  );
};
export default one;
