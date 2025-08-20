'use client'

import { useState } from "react"
import { TemplateCard } from "./template-card"
import { TemplatePreviewDialog } from "./template-preview-dialog"

const templates = [
  {
    title: "Customer Satisfaction",
    description: "Measure customer satisfaction with your products or services.",
    questions: [
      {
        id: "q1",
        type: "rating",
        title: "How would you rate your overall satisfaction with our service?",
        required: true,
      },
      {
        id: "q2",
        type: "textarea",
        title: "What could we do to improve your experience?",
        required: false,
      },
    ],
  },
  {
    title: "Employee Engagement",
    description: "Gauge employee engagement and identify areas for improvement.",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        title: "I am proud to work for this company.",
        required: true,
        options: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
      },
      {
        id: "q2",
        type: "textarea",
        title: "What makes you feel connected to this company?",
        required: false,
      },
    ],
  },
  {
    title: "Market Research",
    description: "Gather insights into your target market and customer preferences.",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        title: "How often do you purchase our products?",
        required: true,
        options: ["Daily", "Weekly", "Monthly", "Rarely", "Never"],
      },
      {
        id: "q2",
        type: "checkbox",
        title: "Where do you typically hear about our products?",
        required: false,
        options: ["Social Media", "Friends or Family", "Advertising", "News Articles"],
      },
    ],
  },
  {
    title: "Event Feedback",
    description: "Collect feedback from attendees after an event.",
    questions: [
      {
        id: "q1",
        type: "rating",
        title: "How would you rate the event overall?",
        required: true,
      },
      {
        id: "q2",
        type: "multiple-choice",
        title: "What was your favorite part of the event?",
        required: false,
        options: ["The speakers", "The networking opportunities", "The venue", "The food"],
      },
    ],
  },
]

export function TemplateList() {
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  const handlePreview = (template: any) => {
    setSelectedTemplate(template)
    setIsPreviewOpen(true)
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template, index) => (
          <TemplateCard
            key={index}
            template={template}
            onPreview={() => handlePreview(template)}
          />
        ))}
      </div>
      <TemplatePreviewDialog
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        template={selectedTemplate}
      />
    </>
  )
}