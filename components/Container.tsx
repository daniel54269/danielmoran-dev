import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
  size = "content",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "content" | "prose";
}) {
  return (
    <div className={cn("mx-auto px-5", size === "prose" ? "max-w-prose" : "max-w-content", className)}>
      {children}
    </div>
  );
}
