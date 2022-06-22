import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

const vars = {
  hidden: {
    x: "-100%",
    opacity: 0
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 1
    }
  }
};

const vars2 = {
  show: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

const notes = () => {
  return (
    <>
      <Head>
        <title>Course Notes | Vincent Fong</title>
      </Head>
      <div className='min-h-screen bg-black text-cream pl-[50px] font-semibold text-xl'>
        <h1 className='px-8 underline text-center font-bold text-8xl uppercase'>
          Course Notes
        </h1>
        <section className='px-8 mb-32'>
          <motion.h2
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-4xl underline'
          >
            Week <span className='text-purple-accent'>1</span>
          </motion.h2>
          <motion.ul
            variants={vars2}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='flex flex-col list-disc pl-10'
          >
            <motion.li variants={vars}>Classroom Guidelines</motion.li>
            <motion.li variants={vars}>Course and classroom safety</motion.li>
          </motion.ul>
        </section>
        <section className='px-8 mb-32'>
          <motion.h2
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-4xl underline'
          >
            Week <span className='text-purple-accent'>2</span>
          </motion.h2>
          <motion.ul
            variants={vars2}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='flex flex-col list-disc pl-10'
          >
            <motion.li variants={vars}>Safety</motion.li>
            <motion.ul
              variants={vars2}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true }}
              className='flex flex-col list-disc pl-8'
            >
              <motion.li variants={vars}>Safety Doc</motion.li>
              <motion.li variants={vars}>General Safety Quiz</motion.li>
            </motion.ul>
            <motion.li variants={vars}>
              <Link href='/units/one#hardware-key-terms'>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 1 - Hardware Key Terms
                </a>
              </Link>
            </motion.li>
            <motion.li variants={vars}>
              <Link href='/units/one#parts-of-a-computer'>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 1 - Parts of a Computer
                </a>
              </Link>
            </motion.li>
          </motion.ul>
        </section>
        <section className='px-8 mb-32'>
          <motion.h2
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-4xl underline'
          >
            Week <span className='text-purple-accent'>3</span>
          </motion.h2>
          <motion.ul
            variants={vars2}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='flex flex-col list-disc pl-10'
          >
            <motion.li variants={vars}>
              <Link href='/units/one#future-of-tech'>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Future of Tech
                </a>
              </Link>
            </motion.li>
            <motion.li variants={vars}>
              <Link href=''>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 1 - The CPU
                </a>
              </Link>
            </motion.li>
            <motion.li variants={vars}>
              <Link href=''>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 1 - The Motherboard
                </a>
              </Link>
            </motion.li>
            <motion.li variants={vars}>
              <Link href='/units/one#custom-pc-purchase'>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 1 - Custom PC Purchase
                </a>
              </Link>
            </motion.li>
          </motion.ul>
        </section>
        <section className='px-8 mb-32'>
          <motion.h2
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-4xl underline'
          >
            Week <span className='text-purple-accent'>4</span>
          </motion.h2>
          <motion.ul
            variants={vars2}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='flex flex-col list-disc pl-10'
          >
            <motion.li variants={vars}>Breadboard Basics</motion.li>
            <motion.li variants={vars}>Reading chips and pins</motion.li>
            <motion.li variants={vars}>
              <Link href='/units/two#digital-logic-gates'>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 2 - Digital Logic Gates
                </a>
              </Link>
            </motion.li>
            <motion.ul
              variants={vars2}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true }}
              className='flex flex-col list-disc pl-8'
            >
              <motion.li variants={vars}>
                <Link href='/units/two#construction-of-truth-tables'>
                  <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                    Lab A - Construction Of Truth Tables
                  </a>
                </Link>
              </motion.li>
              <motion.li variants={vars}>
                <Link href='/units/two#combining-logic-gates'>
                  <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                    Lab B - Combining Logic Gates
                  </a>
                </Link>
              </motion.li>
              <motion.li variants={vars}>
                <Link href='/units/two#booean-and-truth-tables-from-logic-diagrams'>
                  <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                    Lab C - Boolean and Truth Tables
                  </a>
                </Link>
              </motion.li>
              <motion.li variants={vars}>
                <Link href='/units/two#logic-diagrams-from-boolean-expressions'>
                  <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                    Lab D - Logic Diagrams from Boolean Expressions
                  </a>
                </Link>
              </motion.li>
            </motion.ul>
          </motion.ul>
        </section>
        <section className='px-8 mb-32'>
          <motion.h2
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-4xl underline'
          >
            Week <span className='text-purple-accent'>5</span>
          </motion.h2>
          <motion.ul
            variants={vars2}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='flex flex-col list-disc pl-10'
          >
            <motion.li variants={vars}>
              Intro to Breadboarding + Tinkercad
            </motion.li>
            <motion.li variants={vars}>Digital Logic</motion.li>
            <motion.li variants={vars}>
              <Link href='/units/two#wiring-the-logic-gates-and-circuits'>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 2 - Wiring the Logic Gates and Circuits
                </a>
              </Link>
            </motion.li>
          </motion.ul>
        </section>
        <section className='px-8 mb-32'>
          <motion.h2
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-4xl underline'
          >
            Week <span className='text-purple-accent'>6</span> &{" "}
            <span className='text-purple-accent'>7</span>
          </motion.h2>
          <motion.ul
            variants={vars2}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='flex flex-col list-disc pl-10'
          >
            <motion.li variants={vars}>
              <Link href='/units/two#wiring-the-logic-gates-and-circuits'>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 2 - Wiring the Logic Gates and Circuits
                </a>
              </Link>
            </motion.li>
            <motion.li variants={vars}>
              <Link href='units/three#7-segment-display-with-switch'>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 3 - 7 Segment Display with Switch
                </a>
              </Link>
            </motion.li>
          </motion.ul>
        </section>
        <section className='px-8 mb-32'>
          <motion.h2
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-4xl underline'
          >
            Week <span className='text-purple-accent'>8</span>
          </motion.h2>
          <motion.ul
            variants={vars2}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='flex flex-col list-disc pl-10'
          >
            <motion.li variants={vars}>
              <Link href='/units/three#7-segment-display-with-decoder'>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 3 - 7 Segment Display with Decoder
                </a>
              </Link>
            </motion.li>
            <motion.li variants={vars}>
              <Link href='/units/three#half-adder-investigation'>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 3 - Half Adder Investigation
                </a>
              </Link>
            </motion.li>
            <motion.li variants={vars}>
              <Link href='/units/three#calculating-resistance'>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 3 - Calculating Resistance
                </a>
              </Link>
            </motion.li>
            <motion.li variants={vars}>
              <Link href='/units/three#electronics-101'>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 3 - Electronics 101
                </a>
              </Link>
            </motion.li>
          </motion.ul>
        </section>
        <section className='px-8 mb-32'>
          <motion.h2
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-4xl underline'
          >
            Week <span className='text-purple-accent'>9</span>
          </motion.h2>
          <motion.ul
            variants={vars2}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='flex flex-col list-disc pl-10'
          >
            <motion.li variants={vars}>
              <Link href='/units/four#digital-data'>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 4 - Digital Data
                </a>
              </Link>
            </motion.li>
          </motion.ul>
        </section>
        <section className='px-8 mb-32'>
          <motion.h2
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-4xl underline'
          >
            Week <span className='text-purple-accent'>10</span>
          </motion.h2>
          <motion.ul
            variants={vars2}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='flex flex-col list-disc pl-10'
          >
            <motion.li variants={vars}>
              <Link href='/units/four#numbering-systems'>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 4 - Numbering Systems
                </a>
              </Link>
            </motion.li>
            <motion.li variants={vars}>
              <Link href='/units/four#binary-addition'>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 4 - Binary Addition
                </a>
              </Link>
            </motion.li>
            <motion.li variants={vars}>
              <Link href='/units/four#ascii-code'>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 4 - ASCII Code
                </a>
              </Link>
            </motion.li>
            <motion.li variants={vars}>
              <Link href='/units/four#binary-dec-hex-octal'>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 4 - Quiz: Binary/Dec/Hex/Octal
                </a>
              </Link>
            </motion.li>
          </motion.ul>
        </section>
        <section className='px-8 mb-32'>
          <motion.h2
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-4xl underline'
          >
            Week <span className='text-purple-accent'>11</span>
          </motion.h2>
          <motion.ul
            variants={vars2}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='flex flex-col list-disc pl-10'
          >
            <motion.li variants={vars}>
              Unit 5 - Arduino Intro "Hello World"
            </motion.li>
            <motion.li variants={vars}>
              <Link href='/units/five#arduino-blink-with-nano'>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 5 - Arduino Blink w Nano
                </a>
              </Link>
            </motion.li>
            <motion.li variants={vars}>
              <Link href='/units/five#dc-motor-test'>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 5 - DC Motor Test
                </a>
              </Link>
            </motion.li>
            <motion.li variants={vars}>
              <Link href='/units/five#transistors-motors'>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 5 - Transistors NPN/PNP Motors
                </a>
              </Link>
            </motion.li>
          </motion.ul>
        </section>
        <section className='px-8 mb-32'>
          <motion.h2
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-4xl underline'
          >
            Week <span className='text-purple-accent'>12</span>
          </motion.h2>
          <motion.ul
            variants={vars2}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='flex flex-col list-disc pl-10'
          >
            <motion.li variants={vars}>
              <Link href='/units/five#keyboard-led-input'>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 5 - Keyboard LED Input On/Off
                </a>
              </Link>
            </motion.li>
            <motion.li variants={vars}>
              <Link href='/units/five#motor-control-with-npn'>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 5 - Motor Control w/ NPN
                </a>
              </Link>
            </motion.li>
            <motion.li variants={vars}>
              <Link href='/units/five#h-bridge-with-switch'>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 5 - H Bridge w Transistor and Switch
                </a>
              </Link>
            </motion.li>
          </motion.ul>
        </section>
        <section className='px-8 mb-32'>
          <motion.h2
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-4xl underline'
          >
            Week <span className='text-purple-accent'>13</span>
          </motion.h2>
          <motion.ul
            variants={vars2}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='flex flex-col list-disc pl-10'
          >
            <motion.li variants={vars}>
              <Link href='/units/five#h-bridge-with-arduino'>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 5 - H Bridge with Arduino
                </a>
              </Link>
            </motion.li>
            <motion.li variants={vars}>
              <Link href='/units/five#l293d-with-switch'>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 5 - L293D H bridge IC w Switch
                </a>
              </Link>
            </motion.li>
            <motion.li variants={vars}>
              <Link href='/units/five#l293d-with-arduino'>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 5 - L293D w/ Arduino
                </a>
              </Link>
            </motion.li>
          </motion.ul>
        </section>
        <section className='px-8 pb-32'>
          <motion.h2
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-4xl underline'
          >
            Week <span className='text-purple-accent'>14</span>
          </motion.h2>
          <motion.ul
            variants={vars2}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='flex flex-col list-disc pl-10'
          >
            <motion.li variants={vars}>
              <Link href='/units/six'>
                <a className='hover:underline text-purple-accent hover:text-purple-secondary'>
                  Unit 6 - Career Spotlight - Hardware/Software Engineering
                </a>
              </Link>
            </motion.li>
          </motion.ul>
        </section>
      </div>
    </>
  );
};
export default notes;
