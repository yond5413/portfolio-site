'use client'

import { useState } from 'react'
import { Button } from "../../components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog"
import { Mail } from 'lucide-react'

export default function EmailDialog() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="border-white text-white hover:bg-white hover:text-blue-500 focus:ring-0"
        >
          <Mail className="mr-2 h-4 w-4" /> Email
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Information</DialogTitle>
          <DialogDescription>
            You can reach me at the following email address:
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center p-4">
          <a href="mailto:yd2696@columbia.edu" className="text-blue-500 hover:underline">
            yd2696@columbia.edu
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}

