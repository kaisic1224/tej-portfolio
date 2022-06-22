import { motion, MotionValue, useTransform } from "framer-motion";

const Rolldown = ({
  start,
  end,
  offset,
  children
}: {
  start: number;
  end: number;
  offset: MotionValue<number>;
  children: any;
}) => {
  const translateY = useTransform(offset, [start, (end + start) / 2], [0, 200]);
  const rotateX = useTransform(offset, [start, (end + start) / 2], [-90, 0]);
  const opacity = useTransform(offset, [start, (end + start) / 2], [0, 1]);
  return (
    <motion.div
      style={{
        transformStyle: "preserve-3d",
        perspective: "2000px",
        translateY,
        rotateX
      }}
    >
      {children}
    </motion.div>
  );
};
export default Rolldown;
