'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ResponsesTableProps {
    surveyId: string;
}

export function ResponsesTable({ surveyId }: ResponsesTableProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Responses</CardTitle>
            </CardHeader>
            <CardContent>
                <p>A table of responses will be shown here.</p>
            </CardContent>
        </Card>
    )
}
