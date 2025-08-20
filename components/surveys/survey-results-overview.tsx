'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SurveyResultsOverviewProps {
    surveyId: string;
}

export function SurveyResultsOverview({ surveyId }: SurveyResultsOverviewProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Results Overview</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Results overview will be shown here.</p>
            </CardContent>
        </Card>
    )
}
