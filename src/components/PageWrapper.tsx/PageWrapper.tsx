import type React from 'react';
import type { Props } from '../../interfaces/framerMotion';
import { useReducedMotion, type MotionProps,motion } from 'framer-motion';





const variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 }
};

export const PageWrapper: React.FC<Props> = ({ children, className }) => {
  const reduce = useReducedMotion();
  const transition: MotionProps["transition"] = reduce ? { duration: 0 } : { duration: 0.35, ease: "easeInOut" };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
      style={{ position: "relative" }}>
    
      {children}
    </motion.div>
  )
}
