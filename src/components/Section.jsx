import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Section({ children, className }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`min-h-screen flex items-center justify-center p-8 ${className}`}
    >
      {children}
    </motion.section>
  );
}