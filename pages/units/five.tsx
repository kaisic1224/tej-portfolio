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
          <div id='arduino-blink-with-nano' className='grid grid-cols-2'>
            <p>
              <video controls src='/unit5-l2.mp4'></video>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium z-10 px-2'>
                Lab - Lesson 2 - Arduino Blink w/ Nano
              </p>
            </TextCardBorder>
          </div>
          <div id='dc-motor-test' className='grid grid-cols-2'>
            <p>
              <a
                target='_blank'
                href='https://www.tinkercad.com/things/65efeKmUqJp-brave-densor-duup/editel?sharecode=CypakWGNZOWhV4A7jGFHtbD2GUedsTTGIBRwxFw2gp8'
              >
                Link
              </a>
              <video controls src='/unit5-l3.mp4'></video>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium z-10 px-2'>
                Lab - Lesson 3 - DC Motor Test
              </p>
            </TextCardBorder>
          </div>
          <div id='transistors-motors' className='grid grid-cols-2'>
            <p>
              <video controls src='/unit5-l4.mp4'></video>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium z-10 px-2'>
                Lab - Lesson 4 - Transistors NPN/PNP Motors
              </p>
            </TextCardBorder>
          </div>
          <div id='keyboard-led-input' className='grid grid-cols-2'>
            <p>
              <video controls src='/unit5-l5.mp4'></video>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium z-10 px-2'>
                Lab - Lesson 5 - Keyboard LED Input On/Off
              </p>
            </TextCardBorder>
          </div>
          <div id='motor-control-with-npn' className='grid grid-cols-2'>
            <p>
              <video controls src='/unit5-l6.mp4'></video>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium z-10 px-2'>
                Lab - Lesson 6 - Motor Control w/ NPN
              </p>
            </TextCardBorder>
          </div>
          <div id='h-bridge-with-switch' className='grid grid-cols-2'>
            <p>
              <video controls src='/unit5-l7.mp4'></video>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium z-10 px-2'>
                Lesson 7 - H Bridge w Transistor and Switch
              </p>
            </TextCardBorder>
          </div>
          <div id='h-bridge-with-arduino' className='grid grid-cols-2'>
            <p>
              <video controls>
                <source src='/unit5-l8.mkv' type='video/mp4' />
              </video>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium z-10 px-2'>
                Lesson 8 - H Bridge with Arduino
              </p>
            </TextCardBorder>
          </div>
          <div id='l293d-with-switch' className='grid grid-cols-2'>
            <p>
              <video controls src='/unit5-l9.mp4'></video>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium z-10 px-2'>
                Lesson 9 - L293D H bridge IC w Switch
              </p>
            </TextCardBorder>
          </div>
          <div id='l293d-with-arduino' className='grid grid-cols-2'>
            <p>
              <video controls src='/unit5-l10.mp4'></video>
            </p>
            <TextCardBorder bg='bg-purple-primary' bgBorder='border-cream'>
              <p className='font-medium z-10 px-2'>
                Lesson 10 - L293D w/ Arduino
              </p>
            </TextCardBorder>
          </div>
        </section>
      </div>
    </>
  );
};
export default five;
