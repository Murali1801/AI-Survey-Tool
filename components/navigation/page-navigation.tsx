"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

interface PageNavigationProps {
  previousPage?: {
    title: string
    href: string
  }
  nextPage?: {
    title: string
    href: string
  }
}

export function PageNavigation({ previousPage, nextPage }: PageNavigationProps) {
  if (!previousPage && !nextPage) return null

  return (
    <div className="flex justify-between items-center pt-8 border-t border-white/20">
      {previousPage ? (
        <Link href={previousPage.href}>
          <Button variant="outline" className="glassmorphism border-white/20 bg-transparent">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {previousPage.title}
          </Button>
        </Link>
      ) : (
        <div />
      )}

      {nextPage ? (
        <Link href={nextPage.href}>
          <Button variant="outline" className="glassmorphism border-white/20 bg-transparent">
            {nextPage.title}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}
