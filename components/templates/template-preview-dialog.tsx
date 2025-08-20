'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

interface TemplatePreviewDialogProps {
  isOpen: boolean
  onClose: () => void
  template: {
    title: string
    description: string
    questions: any[]
  } | null
}

export function TemplatePreviewDialog({ isOpen, onClose, template }: TemplatePreviewDialogProps) {
  if (!template) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{template.title}</DialogTitle>
          <DialogDescription>{template.description}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 max-h-[70vh] overflow-y-auto p-4">
          {template.questions.map((question, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <p className="font-medium">{index + 1}. {question.title}</p>
              {question.description && <p className="text-sm text-muted-foreground">{question.description}</p>}
              <div className="mt-2 space-y-2">
                {question.options?.map((option: string, i: number) => (
                  <div key={i} className="flex items-center gap-2">
                    <input type={question.type === 'checkbox' ? 'checkbox' : 'radio'} name={`q_${index}`} />
                    <label>{option}</label>
                  </div>
                ))}
                {(question.type === 'text' || question.type === 'textarea' || question.type === 'rating') && (
                  <input type="text" placeholder="Answer..." className="w-full p-2 border rounded" />
                )}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
