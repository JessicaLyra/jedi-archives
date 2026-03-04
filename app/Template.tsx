"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);

    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setIsAnimating(false);
    }, 300); // tempo da animação

    return () => clearTimeout(timeout);
  }, [pathname, children]);

  return (
    <>
      {displayChildren}

      {isAnimating && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black z-50 pointer-events-none"
        />
      )}
    </>
  );
}