"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
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
      <div className="md:grid md:min-h-screen md:grid-cols-[240px_1fr]">
        {/* Desktop sidebar */}
        <div className="hidden md:block md:sticky md:top-0 md:h-screen md:overflow-y-auto">
          <Sidebar />
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="fixed inset-0 z-40 md:hidden" role="dialog" aria-modal="true">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-label="Close menu backdrop"
            />
            <div className="absolute inset-y-0 left-0 w-[80%] max-w-xs">
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
            </div>
          </div>
        )}

        {/* Main column */}
        <div className="flex min-h-screen flex-col">
          <TopBar onOpenMenu={() => setOpen(true)} />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}
