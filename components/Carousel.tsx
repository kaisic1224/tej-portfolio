import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Carousel = ({ imgs }: { imgs: String[] }) => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((previousActive) => previousActive + 1);
      if (active === 4) setActive(() => 0);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [active]);
  return (
    <div className='overflow-hidden flex'>
      <AnimatePresence>
        <motion.img
          key={`${imgs[active]}`}
          src={`${imgs[active]}`}
          className='w-full aspect-video object-cover'
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </AnimatePresence>
    </div>
  );
};
export default Carousel;
