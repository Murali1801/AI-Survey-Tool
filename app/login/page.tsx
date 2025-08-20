import { GlasmorphismHeader } from "@/components/glassmorphism-header"
import { LoginForm } from "@/components/auth/login-form"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <GlasmorphismHeader />
      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          {/* Back to home link */}
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>

          {/* Header */}
          <div className="text-center">
            <h2 className="font-work-sans text-3xl font-bold text-foreground">Welcome back</h2>
            <p className="mt-2 text-muted-foreground">Sign in to your account to continue</p>
          </div>

          {/* Login Form */}
          <LoginForm />

          {/* Sign up link */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/signup" className="font-medium text-primary hover:text-primary/80 transition-colors">
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
