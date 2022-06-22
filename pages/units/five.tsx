import TextCardBorder from "../../components/TextCardBorder";
import { motion } from "framer-motion";
import Head from "next/head";

const five = () => {
  return (
    <>
      <Head>
        <title>Unit Five | Vincent Fong</title>
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
              Five
            </motion.span>
          </h1>
          <div
            id='arduino-blink-with-nano'
            className='grid grid-cols-2 pb-8 mt-24'
          >
            <p className='px-8'>
              <iframe
                className='w-full aspect-video'
                src='https://drive.google.com/file/d/1qSKUKDFD6ZhkSG_50tCBbAY0_KmTOBll/preview'
                allow='autoplay'
              ></iframe>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium text-4xl text-center z-10 px-2'>
                Lab - Lesson 2 - Arduino Blink w/ Nano
              </p>
            </TextCardBorder>
          </div>
          <div id='dc-motor-test' className='grid grid-cols-2 pb-8'>
            <p className='px-8'>
              <iframe
                className='w-full aspect-video'
                src='https://drive.google.com/file/d/1GK5GqBEXgAVedG0bxWpk18ZpEP6mgR5a/preview'
                allow='autoplay'
              ></iframe>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium text-4xl text-center z-10 px-2 flex flex-col'>
                Lab - Lesson 3 - DC Motor Test
                <a
                  className='font-bold text-xl hover:underline'
                  target='_blank'
                  href='https://www.tinkercad.com/things/65efeKmUqJp-brave-densor-duup/editel?sharecode=CypakWGNZOWhV4A7jGFHtbD2GUedsTTGIBRwxFw2gp8'
                >
                  Tinkercad Design
                </a>
              </p>
            </TextCardBorder>
          </div>
          <div id='transistors-motors' className='grid grid-cols-2 pb-8'>
            <p className='px-8'>
              <iframe
                className='w-full aspect-video'
                src='https://drive.google.com/file/d/11rYInZLu9vkcKqpcoOf7eHbF0VbiAnDd/preview'
                allow='autoplay'
              ></iframe>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium text-4xl text-center z-10 px-2'>
                Lab - Lesson 4 - Transistors NPN/PNP Motors
              </p>
            </TextCardBorder>
          </div>
          <div id='keyboard-led-input' className='grid grid-cols-2 pb-8'>
            <p className='px-8'>
              <iframe
                className='w-full aspect-video'
                src='https://drive.google.com/file/d/1EeLJ2vpILQm67T2dFD-vs_RwfH4MhDJu/preview'
                allow='autoplay'
              ></iframe>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium text-4xl text-center z-10 px-2'>
                Lab - Lesson 5 - Keyboard LED Input On/Off
              </p>
            </TextCardBorder>
          </div>
          <div id='motor-control-with-npn' className='grid grid-cols-2 pb-8'>
            <p className='px-8'>
              <iframe
                className='w-full aspect-video'
                src='https://drive.google.com/file/d/1ruMqA-MmnSGs64yCag9HALNomGtkD8i4/preview'
                allow='autoplay'
              ></iframe>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium text-4xl text-center z-10 px-2'>
                Lab - Lesson 6 - Motor Control w/ NPN
              </p>
            </TextCardBorder>
          </div>
          <div id='h-bridge-with-switch' className='grid grid-cols-2 pb-8'>
            <p className='px-8'>
              <iframe
                className='w-full aspect-video'
                src='https://drive.google.com/file/d/1sU416OMitnuMskBUPQH47j9cwmqhQyMl/preview'
                allow='autoplay'
              ></iframe>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium text-4xl text-center z-10 px-2'>
                Lesson 7 - H Bridge w Transistor and Switch
              </p>
            </TextCardBorder>
          </div>
          <div id='h-bridge-with-arduino' className='grid grid-cols-2 pb-8'>
            <p className='px-8'>
              <iframe
                className='w-full aspect-video'
                src='https://drive.google.com/file/d/1HewkzBOkANuii9sQgFCB8ap_lVXrJrNs/preview'
                allow='autoplay'
              ></iframe>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium text-4xl text-center z-10 px-2'>
                Lesson 8 - H Bridge with Arduino
              </p>
            </TextCardBorder>
          </div>
          <div id='l293d-with-switch' className='grid grid-cols-2 pb-8'>
            <p className='px-8'>
              <iframe
                className='w-full aspect-video'
                src='https://drive.google.com/file/d/1In9RMck_lccBQapHgBahwGyeqmV_uFM8/preview'
                allow='autoplay'
              ></iframe>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium text-4xl text-center z-10 px-2'>
                Lesson 9 - L293D H bridge IC w Switch
              </p>
            </TextCardBorder>
          </div>
          <div id='l293d-with-arduino' className='grid grid-cols-2 pb-8'>
            <p className='px-8'>
              <iframe
                className='w-full aspect-video'
                src='https://drive.google.com/file/d/1m83040IAq2GF8Gv7lcu-boNFGpPWGcCA/preview'
                allow='autoplay'
              ></iframe>{" "}
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium text-4xl text-center z-10 px-2'>
                Lesson 10 - L293D w/ Arduino
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
            I think that this unit was really fun. It is a bit hard to
            understand, but the arduino was really cool to use at first, and the
            introduction to motors was also really fun and interesting to use
            and play with. I think it was a really good hands-on experience, but
            I think more resources or guidance could make it an easier time.
          </p>
        </section>
      </div>
    </>
  );
};
export default five;
