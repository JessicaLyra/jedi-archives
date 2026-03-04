"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "@/components/TransitionProvider";

export default function TransitionLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();
  const { setIsTransitioning } = useTransition();

  const handleClick = () => {
    setIsTransitioning(true);
    router.push(href); // 🔥 sem delay
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}