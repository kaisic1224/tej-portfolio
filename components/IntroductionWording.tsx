import {
  motion,
  MotionValue,
  useTransform,
  useViewportScroll
} from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const vars = {
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

const IntroductionWording = ({
  offsetY,
  start,
  end
}: {
  offsetY: MotionValue<number>;
  start: number;
  end: number;
}) => {
  const opacity = useTransform(offsetY, [start, end], [1, 0]);
  return (
    <>
      <motion.h2
        style={{ opacity }}
        variants={{
          show: { transition: { staggerChildren: 1, delayChildren: 1.5 } }
        }}
        initial='hidden'
        animate='show'
        className='font-semibold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-cream text-4xl'
      >
        <motion.span variants={vars}>Hey,</motion.span>
        <motion.span variants={vars}> I'm</motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className='text-purple-primary ml-1'
        >
          {" "}
          Vincent
        </motion.span>
      </motion.h2>

      <motion.div
        style={{ translateX: "-50%" }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          opacity: { delay: 4 }
        }}
        className='bottom-1/4 translate-y-10 left-1/2 absolute flex flex-col items-center gap-6'
      >
        <span className='italic text-center text-cream'>Scroll down!</span>
        <FaArrowDown className='fill-cream w-6 animate-bounce h-6' />
      </motion.div>
    </>
  );
};
export default IntroductionWording;
