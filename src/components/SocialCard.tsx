// social media card component alongside the contact form

import React from 'react';
import {cn} from "@/lib/utils.ts";
import {buttonVariants} from "@/components/ui/button.tsx";

interface SocialCardProps {
    link: {
        icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
        label: string;
        href: string;
        value: string;
    }
}

export default function SocialCard({link}: SocialCardProps) {
    const Icon = link.icon
    return (
        <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                buttonVariants({ variant: 'outline' }),
                'h-auto w-full justify-start gap-3 p-4 text-left'
            )}
        >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15">
                      <Icon className="h-5 w-5" />
                    </span>
            <span className="flex flex-col">
                      <span className="text-base font-semibold text-slate-100">{link.label}</span>
                      <span className="text-sm text-slate-400">{link.value}</span>
                    </span>
        </a>
    )
}