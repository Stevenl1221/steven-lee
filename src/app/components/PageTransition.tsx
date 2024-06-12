"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useState, useEffect } from "react";
import { Navbar } from "./nav";

const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  /* <motion.div
//     key={pathname + children?.toString}
//     initial={{ y: 10, opacity: 0 }}
//     animate={{ y: 0, opacity: 1 }}
//     exit={{ y: 10, opacity: 0 }}
//     transition={{ duration: 0.2 }}
//   >
//     {children}
//   </motion.div> */
  /* {children} */

  return <div>{children}</div>;
};

export default PageTransition;
