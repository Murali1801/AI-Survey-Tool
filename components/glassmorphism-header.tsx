'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { BarChart3, User, Settings, LogOut, Menu, Plus, FileText } from "lucide-react"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useAuth } from "@/hooks/use-auth"
import { signOut } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { useRouter } from "next/navigation"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { name: "Surveys", href: "/surveys", icon: FileText },
  { name: "Profile", href: "/profile", icon: User },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function GlasmorphismHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const { user } = useAuth()
  const isLandingPage = pathname === "/"
  const isSurveyResponsePage = pathname.startsWith("/survey/")
  const isAuthPage = pathname === "/login" || pathname === "/signup"
  const showNav = !isLandingPage && !isSurveyResponsePage && !isAuthPage

  const handleSignOut = async () => {
    await signOut(auth)
    router.push("/")
  }

  return (
    <header className="sticky top-0 z-50 w-full glass-header">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={user ? "/dashboard" : "/"} className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <BarChart3 className="h-5 w-5" />
            </div>
            <span className="font-work-sans font-bold text-base sm:text-lg text-foreground">AI Survey Tool</span>
          </Link>

          {/* Desktop Navigation */}
          {showNav && (
            <nav className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                return (
                  <Link key={item.name} href={item.href}>
                    <Button
                      variant={isActive ? "secondary" : "ghost"}
                      size="sm"
                      className={cn("glass transition-all duration-200", isActive && "bg-primary/20 text-primary")}
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {item.name}
                    </Button>
                  </Link>
                )
              })}

              <Link href="/surveys/create">
                <Button size="sm" className="bg-primary hover:bg-primary/90 ml-2">
                  <Plus className="mr-2 h-4 w-4" />
                  New Survey
                </Button>
              </Link>
            </nav>
          )}

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />

            {isLandingPage ? (
              <>
                <div className="hidden sm:flex items-center space-x-2">
                  <Link href="/login">
                    <Button variant="ghost" size="sm" className="glass">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      Get Started
                    </Button>
                  </Link>
                </div>
                <div className="sm:hidden">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="glass">
                        <Menu className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="glass-card">
                      <DropdownMenuItem asChild>
                        <Link href="/login">
                          Sign In
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="bg-primary text-primary-foreground focus:bg-primary/90 focus:text-primary-foreground">
                        <Link href="/signup">
                          Get Started
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </>
            ) : (
              showNav && (
                <Button variant="ghost" size="sm" className="glass" onClick={handleSignOut}>
                  <LogOut className="h-4 w-4" />
                  <span className="sr-only">Sign out</span>
                </Button>
              )
            )}

            {/* Mobile menu */}
            {showNav && (
              <div className="md:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="glass">
                      <Menu className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="glass-card">
                    {navigation.map((item) => {
                      const Icon = item.icon
                      return (
                        <DropdownMenuItem key={item.name} asChild>
                          <Link href={item.href} className="flex items-center">
                            <Icon className="mr-2 h-4 w-4" />
                            {item.name}
                          </Link>
                        </DropdownMenuItem>
                      )
                    })}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/surveys/create" className="flex items-center">
                        <Plus className="mr-2 h-4 w-4" />
                        New Survey
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}