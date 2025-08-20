'use client'
import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    console.log('[v0] Theme toggle mounted, current theme:', theme, 'resolved:', resolvedTheme)
  }, [theme, resolvedTheme])

  if (!mounted) {
    return (
      <Button variant='ghost' size='sm' className='glass h-9 w-9 px-0'>
        <Sun className='h-[1.2rem] w-[1.2rem]' />
        <span className='sr-only'>Toggle theme</span>
      </Button>
    )
  }

  const handleThemeChange = (newTheme: string) => {
    console.log('[v0] Attempting to change theme from', theme, 'to', newTheme)
    console.log('[v0] Document class before:', document.documentElement.className)
    setTheme(newTheme)

    // Check after a short delay to see if the change took effect
    setTimeout(() => {
      console.log('[v0] Theme after change:', theme, 'resolved:', resolvedTheme)
      console.log('[v0] Document class after:', document.documentElement.className)
    }, 100)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='sm' className='glass h-9 w-9 px-0 hover:bg-primary/10 transition-colors'>
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='glass-card border-border/50'>
        <DropdownMenuItem
          onClick={() => handleThemeChange('light')}
          className={`cursor-pointer ${theme === 'light' ? 'bg-primary/20 text-primary' : ''}`}>
          <Sun className='mr-2 h-4 w-4' />
          <span>Light</span>
          {theme === 'light' && <span className='ml-auto text-xs'>✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleThemeChange('dark')}
          className={`cursor-pointer ${theme === 'dark' ? 'bg-primary/20 text-primary' : ''}`}>
          <Moon className='mr-2 h-4 w-4' />
          <span>Dark</span>
          {theme === 'dark' && <span className='ml-auto text-xs'>✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleThemeChange('system')}
          className={`cursor-pointer ${theme === 'system' ? 'bg-primary/20 text-primary' : ''}`}>
          <Monitor className='mr-2 h-4 w-4' />
          <span>System</span>
          {theme === 'system' && <span className='ml-auto text-xs'>✓</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
