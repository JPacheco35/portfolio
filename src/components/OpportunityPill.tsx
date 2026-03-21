import {Badge} from "@/components/ui/badge.tsx";

interface OpportunityPillProps {
    isLookingForOpportunities: boolean;
}

export default function OpportunityPill({isLookingForOpportunities}:OpportunityPillProps) {
    return (
        isLookingForOpportunities ? (
            <div className="mb-2 flex justify-center">
                <Badge
                    variant="opportunity"
                    className={`px-4 py-1 text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-700 ${'translate-y-0 opacity-100'}`}
                >
                    Open to Opportunities
                </Badge>
            </div>
        ) : null
    )
}