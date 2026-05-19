"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { ScrollProgress } from "./ScrollProgress";
import { IconClose } from "./Icons";

export function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile sidebar on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while open
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="min-h-screen bg-ink-900 text-ink-100">
      <div className="md:grid md:min-h-screen md:grid-cols-[256px_1fr]">
        {/* Desktop sidebar */}
        <div className="hidden md:block md:sticky md:top-0 md:h-screen md:overflow-y-auto">
          <Sidebar />
        </div>

        {/* Mobile drawer — animated slide-in via Motion */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-40 md:hidden"
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            >
              <motion.div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setOpen(false)}
                aria-label="Close menu backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="absolute inset-y-0 left-0 w-[80%] max-w-xs"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 40,
                  mass: 0.6,
                }}
              >
                <div className="relative h-full">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="absolute top-3 right-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-md text-ink-300 hover:bg-ink-800 hover:text-ink-50"
                    aria-label="Close menu"
                  >
                    <IconClose />
                  </button>
                  <Sidebar onNavigate={() => setOpen(false)} />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main column */}
        <div className="flex min-h-screen flex-col">
          <TopBar onOpenMenu={() => setOpen(true)} />
          <ScrollProgress />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}
