"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

export function BreadcrumbNav() {
  const pathname = usePathname()
  const pathSegments = pathname.split("/").filter(Boolean)

  if (pathSegments.length === 0) return null

  const breadcrumbs = [
    { name: "Home", href: "/" },
    ...pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/")
      const name = segment.charAt(0).toUpperCase() + segment.slice(1)
      return { name, href }
    }),
  ]

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={breadcrumb.href} className="flex items-center">
          {index === 0 && <Home className="h-4 w-4 mr-1" />}
          {index < breadcrumbs.length - 1 ? (
            <Link href={breadcrumb.href} className="hover:text-foreground transition-colors">
              {breadcrumb.name}
            </Link>
          ) : (
            <span className="text-foreground font-medium">{breadcrumb.name}</span>
          )}
          {index < breadcrumbs.length - 1 && <ChevronRight className="h-4 w-4 mx-2" />}
        </div>
      ))}
    </nav>
  )
}
