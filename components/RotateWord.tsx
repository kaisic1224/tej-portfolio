import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { title } from "../pages/about";

const RotateWord = ({ titles }: { titles: title[] }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((previousActive) => previousActive + 1);
      if (active === 3) setActive(() => 0);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [active]);

  return (
    <h2 className='text-cream flex gap-2 font-bold text-3xl mt-8'>
      I am{" "}
      <div className='relative flex flex-col w-[17ch] overflow-y-hidden'>
        {titles.map((title) => (
          <span
            key={title.position}
            className={`block absolute top-full transition-all duration-500 ${
              active === title.position ? "-translate-y-full" : "select-none"
            }`}
          >
            {title.prefix ?? <></>}{" "}
            <span className='text-purple-secondary'>{title.title}</span>
          </span>
        ))}
      </div>
    </h2>
  );
};
export default RotateWord;
