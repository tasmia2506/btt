import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type Highlight = { icon: LucideIcon; text: string };

export default function HighlightGrid({
  items,
  tone = "dark",
  className,
}: {
  items: Highlight[];
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div className={cn("grid sm:grid-cols-2 gap-4", className)}>
      {items.map(({ icon: Icon, text }) => (
        <div key={text} className="flex items-start gap-3">
          <span
            className={cn(
              "shrink-0 w-9 h-9 rounded-full flex items-center justify-center",
              tone === "dark" ? "bg-ice" : "bg-ice/10"
            )}
          >
            <Icon size={16} className={tone === "dark" ? "text-moss" : "text-lichen"} />
          </span>
          <p className={cn("text-sm", tone === "dark" ? "text-slag/80" : "text-ice/80")}>{text}</p>
        </div>
      ))}
    </div>
  );
}
