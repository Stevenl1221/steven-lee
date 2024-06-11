"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useState, useEffect } from "react";

const pageTransitionVariants = {
  initial: { opacity: 0, y: 200 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.85 } },
};

const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isMounted && (
        <motion.div
          key={pathname}
          variants={pageTransitionVariants}
          initial="initial"
          animate="animate"
          style={{ position: "absolute", width: "100%" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
