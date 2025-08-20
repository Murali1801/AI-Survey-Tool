'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SurveyAnalyticsProps {
    surveyId: string;
}

export function SurveyAnalytics({ surveyId }: SurveyAnalyticsProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Analytics</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Analytics charts will be shown here.</p>
            </CardContent>
        </Card>
    )
}
