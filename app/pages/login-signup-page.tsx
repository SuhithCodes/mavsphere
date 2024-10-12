'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export function LoginSignupComponent() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="flex h-screen">
      {/* Hero Image Section (2/3 of the screen) */}
      <div className="hidden lg:block lg:w-2/3 bg-gray-200">
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Login/Signup Form Section (1/3 of the screen) */}
      <div className="w-full lg:w-1/3 p-8 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-6">
          {isLogin ? "Welcome Back to MavSphere" : "Join MavSphere"}
        </h1>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Enter your password" type="password" required />
          </div>
          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" placeholder="Confirm your password" type="password" required />
            </div>
          )}
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-sm">
              {isLogin ? "By logging in, you accept the " : "I agree to the "}
              <Link href="/terms" className="underline">
                terms and conditions
              </Link>
            </Label>
          </div>
          <Button className="w-full" type="submit">
            {isLogin ? "Login Now" : "Sign Up"}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <Button variant="link" className="p-0" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign up" : "Login"}
          </Button>
        </div>

        {isLogin && (
          <div className="mt-4 text-center">
            <Button variant="link" className="text-sm">
              Forgot password?
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}