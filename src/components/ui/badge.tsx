/* eslint-disable react-refresh/only-export-components */

import type { HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-blue-600 text-white',
        secondary: 'border-blue-400/30 bg-blue-500/10 text-blue-300',
        outline: 'border-blue-400/30 text-blue-300',
        opportunity:
          'border-emerald-300/50 bg-emerald-500/15 text-emerald-200 shadow-[0_0_18px_rgba(16,185,129,0.35)] backdrop-blur-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Badge({
  className,
  variant,
  ...props
}: HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }


