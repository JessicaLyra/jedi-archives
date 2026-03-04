"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionContext = createContext<any>(null);

export function useTransition() {
  return useContext(TransitionContext);
}

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pathname = usePathname();

  // 🔥 Quando a rota mudar, remove o overlay
  useEffect(() => {
    setIsTransitioning(false);
  }, [pathname]);

  return (
    <TransitionContext.Provider value={{ setIsTransitioning }}>
      {children}

      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-[9999] pointer-events-none"
          />
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}