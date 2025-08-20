'use client'

import { useState } from "react"
import { UploadCloud } from "lucide-react"

export function FileUpload() {
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (e.dataTransfer.files) {
      setFile(e.dataTransfer.files[0])
    }
  }

  return (
    <div
      className="border-2 border-dashed border-muted-foreground/50 rounded-lg p-6 sm:p-12 text-center"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <UploadCloud className="mx-auto h-12 w-12 text-muted-foreground" />
      <p className="mt-4 text-muted-foreground">
        Drag and drop your file here, or click to select a file.
      </p>
      <input
        type="file"
        className="hidden"
        id="file-upload"
        onChange={handleFileChange}
      />
      <label
        htmlFor="file-upload"
        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 cursor-pointer"
      >
        Select File
      </label>
      {file && (
        <div className="mt-4 text-sm text-muted-foreground">
          <p>Selected file: {file.name}</p>
          <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
        </div>
      )}
    </div>
  )
}
