import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export type InfoPill = { icon: LucideIcon; label: string; accent?: boolean };

export default function InfoPills({ items }: { items: InfoPill[] }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map(({ icon: Icon, label, accent }) => (
        <Badge
          key={label}
          variant={accent ? undefined : "outline"}
          shape="pill"
          className={
            accent
              ? "bg-lichen text-slag gap-1.5"
              : "border-ice/30 text-ice/90 gap-1.5"
          }
        >
          <Icon size={12} /> {label}
        </Badge>
      ))}
    </div>
  );
}
