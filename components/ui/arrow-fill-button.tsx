import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Car } from "lucide-react";

// Each variant is a complete color treatment for one background context —
// pick by where the button sits, not by hand-tuning colors per call site.
// The hover glow uses the brand color that stays visible on that background
// (lichen everywhere except solidLight, which already sits on a lichen section).
const arrowButtonVariants = cva(
  "inline-flex w-fit items-center justify-between rounded-full border whitespace-nowrap font-medium leading-none transition-shadow duration-300 focus-visible:outline-none motion-reduce:transition-none",
  {
    variants: {
      variant: {
        primary:
          "border-lichen bg-lichen text-slag hover:shadow-[0_0_22px_-4px_var(--lichen)] focus-visible:shadow-[0_0_22px_-4px_var(--lichen)]",
        outlineLight:
          "border-ice bg-transparent text-ice hover:shadow-[0_0_22px_-4px_var(--lichen)] focus-visible:shadow-[0_0_22px_-4px_var(--lichen)]",
        solidDark:
          "border-slag bg-slag text-ice hover:shadow-[0_0_22px_-4px_var(--lichen)] focus-visible:shadow-[0_0_22px_-4px_var(--lichen)]",
        outlineDark:
          "border-slag bg-transparent text-slag hover:shadow-[0_0_22px_-4px_var(--lichen)] focus-visible:shadow-[0_0_22px_-4px_var(--lichen)]",
        solidLight:
          "border-ice bg-ice text-slag hover:shadow-[0_0_22px_-4px_var(--slag)] focus-visible:shadow-[0_0_22px_-4px_var(--slag)]",
        accentDark:
          "border-slag bg-slag text-ice hover:shadow-[0_0_22px_-4px_var(--lichen)] focus-visible:shadow-[0_0_22px_-4px_var(--lichen)]",
      },
      size: {
        default: "h-12 sm:h-14 pl-6 sm:pl-7 pr-2 sm:pr-2.5 gap-3 sm:gap-4 text-sm sm:text-base",
        compact: "h-10 pl-4 pr-1.5 gap-2.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

const ICON_STYLES = {
  primary: "bg-slag text-lichen",
  outlineLight: "bg-ice text-slag",
  solidDark: "bg-ice text-slag",
  outlineDark: "bg-slag text-ice",
  solidLight: "bg-slag text-ice",
  accentDark: "bg-ice text-slag",
} as const;

const ICON_SIZES = { default: "size-9 sm:size-10", compact: "size-7" } as const;
const GLYPH_SIZES = { default: "size-4 sm:size-[18px]", compact: "size-3.5" } as const;

export interface ArrowFillButtonProps
  extends ComponentProps<"a">,
    VariantProps<typeof arrowButtonVariants> {
  btnText?: string;
}

function ArrowFillButton({
  btnText = "Hover Me",
  href = "#",
  className,
  size,
  variant,
  ...props
}: ArrowFillButtonProps) {
  const resolvedVariant = variant ?? "primary";
  const resolvedSize = size ?? "default";

  return (
    <a
      href={href}
      {...props}
      className={cn(arrowButtonVariants({ variant: resolvedVariant, size: resolvedSize }), className)}
    >
      <span className="pb-px">{btnText}</span>
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex shrink-0 items-center justify-center rounded-full",
          ICON_STYLES[resolvedVariant],
          ICON_SIZES[resolvedSize]
        )}
      >
        <Car className={GLYPH_SIZES[resolvedSize]} strokeWidth={1.8} />
      </span>
    </a>
  );
}

export default ArrowFillButton;
