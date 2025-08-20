'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SurveyPreviewProps {
    surveyId: string;
}

export function SurveyPreview({ surveyId }: SurveyPreviewProps) {
    return (
        <Card className="glassmorphism border-white/20">
            <CardHeader>
                <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Survey preview will be shown here.</p>
            </CardContent>
        </Card>
    )
}
