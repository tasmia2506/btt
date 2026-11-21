import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { Slot } from "@radix-ui/react-slot"

const badgeVariants = cva(
  "group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden border font-oswald uppercase tracking-wide font-semibold whitespace-nowrap transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        outline: "border-current/30 bg-transparent text-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
      },
      shape: {
        chip: "rounded-sm",
        pill: "rounded-full",
      },
      size: {
        default: "px-3 py-1 text-[11px]",
        sm: "px-2.5 py-0.5 text-[10px]",
      },
    },
    defaultVariants: {
      variant: "default",
      shape: "chip",
      size: "default",
    },
  }
)

function Badge({
  className,
  variant,
  shape,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant, shape, size }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
