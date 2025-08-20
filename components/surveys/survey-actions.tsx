'use client'

import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

interface SurveyActionsProps {
    surveyId: string;
}

export function SurveyActions({ surveyId }: SurveyActionsProps) {
    return (
        <Button variant="ghost" size="sm" className="text-muted-foreground">
            <MoreHorizontal className="h-4 w-4" />
        </Button>
    )
}
