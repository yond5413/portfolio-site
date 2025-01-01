'use client'

import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

export default function DownloadResume() {
  const handleDownload = () => {
    // The PDF file should be stored in the public folder
    const pdfUrl = '/YonathanDaniel_Resume.pdf'
    
    // Create a link element
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'YonathanDaniel_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button 
      onClick={handleDownload} 
      variant="outline" 
      className="mt-4 border-white text-white hover:bg-white hover:text-blue-500 focus:ring-0"
    >
      <Download className="mr-2 h-4 w-4" /> Download Resume
    </Button>
  )
}

