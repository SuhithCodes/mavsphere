'use client'

import React, { useState } from 'react'
import { Save, Eye, EyeOff } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

export function SettingsPageComponent() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const username = 'John Doe'

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    // Apply dark mode to the entire document
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <ScrollArea className="h-screen">
        <div className="p-6 bg-background text-foreground">
          <Card className="bg-card text-card-foreground">
            <CardContent className="p-6">
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                  <TabsTrigger value="preferences">Preferences</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Card className="p-2">
                      <Avatar className="h-40 w-40">
                        <AvatarImage src="/placeholder.svg?height=160&width=160" alt={username} />
                        <AvatarFallback className="text-4xl">{username.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </Card>
                    <div className="space-y-2 flex-1">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input id="fullName" defaultValue={username} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="john.doe@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <div className="relative">
                          <Input
                            id="newPassword"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter new password"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-full px-3"
                            onClick={togglePasswordVisibility}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirm new password"
                        />
                      </div>
                      <Button>Change Profile Picture</Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn Profile</Label>
                      <Input id="linkedin" defaultValue="https://www.linkedin.com/in/johndoe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="currentPosition">Current Position</Label>
                      <Input id="currentPosition" defaultValue="PhD in Mechanical Engineering" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="university">University</Label>
                      <Input id="university" defaultValue="University of Technology" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="graduation">Expected Graduation</Label>
                      <Input id="graduation" type="month" defaultValue="2025-05" />
                    </div>
                    <div className="space-y-2 col-span-2">
                      <Label htmlFor="educationHistory">Education History</Label>
                      <Textarea id="educationHistory" defaultValue="Master of Science in Mechanical Engineering, University of Science, 2021
Bachelor of Science in Mechanical Engineering, Tech Institute, 2019" />
                    </div>
                    <div className="space-y-2 col-span-2">
                      <Label htmlFor="researchAreas">Research Areas</Label>
                      <Input id="researchAreas" defaultValue="Robotics, Machine Learning, Autonomous Systems, Control Systems" />
                    </div>
                    <div className="space-y-2 col-span-2">
                      <Label htmlFor="publications">Publications</Label>
                      <Textarea id="publications" defaultValue="Machine Learning Approaches in Robotic Control Systems, Journal of Robotics, 2023
Autonomous Navigation in Unstructured Environments, IEEE Conference on Automation, 2022"
                      />
                    </div>
                    <div className="space-y-2 col-span-2">
                      <Label htmlFor="technicalSkills">Technical Skills</Label>
                      <Input id="technicalSkills" defaultValue="Python, MATLAB, C++, ROS, TensorFlow, CAD (SolidWorks), LabVIEW, Data Analysis, 3D Printing" />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="notifications" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="emailNotifications">Email Notifications</Label>
                    <Switch id="emailNotifications" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="pushNotifications">Push Notifications</Label>
                    <Switch id="pushNotifications" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="messageNotifications">Message Notifications</Label>
                    <Switch id="messageNotifications" />
                  </div>
                </TabsContent>
                <TabsContent value="preferences" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="darkMode">Dark Mode</Label>
                    <Switch id="darkMode" checked={isDarkMode} onCheckedChange={toggleDarkMode} />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="profileVisibility">Profile Visibility</Label>
                    <Switch id="profileVisibility" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="showEmail">Show Email to Other Users</Label>
                    <Switch id="showEmail" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="showLinkedIn">Show LinkedIn Profile</Label>
                    <Switch id="showLinkedIn" />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          <div className="mt-6 flex justify-end">
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}