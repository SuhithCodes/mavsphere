"use client";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import { Save, UserRoundPen, BadgeInfo } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export default function SettingsPageComponent() {
  const [isDarkMode] = useState(false);
  const username = "John Doe";

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="p-4 bg-background text-foreground">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Information Section */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <h2 className="text-xl font-semibold">Profile Information</h2>
            </CardHeader>
            <CardContent className="flex space-x-8">
              <Card className="p-6 flex flex-col items-center space-y-4">
                <Avatar className="h-56 w-56 mb-4">
                  <AvatarImage
                    src="/placeholder.svg?height=160&width=160"
                    alt={username}
                  />
                  <AvatarFallback className="text-6xl">
                    {username.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                {/* Badge with icon */}
                <Badge className="mb-2 flex items-center text-base">
                  <BadgeInfo className="h-4 w-4 mr-1" /> mentor
                </Badge>

                <Button className="justify-center text-base">
                  <UserRoundPen className="mr-2" /> Profile Picture
                </Button>
              </Card>

              <Tabs defaultValue="account" className="w-[1000px]">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                  <TabsTrigger value="links">Profile Links</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account</CardTitle>
                      <CardDescription>
                        Make changes to your account here. Click save when
                        you&apos;re done.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue="John Doe" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          defaultValue="john.doe@example.com"
                          id="email"
                          type="email"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" defaultValue="@john.doe" />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="password">
                  <Card>
                    <CardHeader>
                      <CardTitle>Password</CardTitle>
                      <CardDescription>
                        Change your password here. After saving, you&apos;ll be
                        logged out.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="current">Current password</Label>
                        <Input id="current" type="password" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="new">New password</Label>
                        <Input id="new" type="password" />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="links">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Links</CardTitle>
                      <CardDescription>
                        Add or update your professional profile links.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="linkedin">LinkedIn Profile</Label>
                        <Input
                          id="linkedin"
                          defaultValue="https://www.linkedin.com/in/johndoe"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="github">GitHub Profile</Label>
                        <Input
                          id="github"
                          defaultValue="https://github.com/johndoe"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="kaggle">Kaggle Profile</Label>
                        <Input
                          id="kaggle"
                          defaultValue="https://www.kaggle.com/johndoe"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Notification Settings and Preferences Card */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <h2 className="text-xl font-semibold">Notification Settings</h2>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="emailNotifications" className="text-base">
                    Email Notifications
                  </Label>
                  <Switch id="emailNotifications" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="pushNotifications" className="text-base">
                    Push Notifications
                  </Label>
                  <Switch id="pushNotifications" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="messageNotifications" className="text-base">
                    Message Notifications
                  </Label>
                  <Switch id="messageNotifications" />
                </div>
              </div>
              <Separator className="my-4" />

              {/* Preferences Section */}
              <div className="mt-6">
                <h2 className="text-xl font-semibold">Preferences</h2>
                <div className="flex flex-col space-y-4 mt-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="profileVisibility" className="text-base">
                      Profile Visibility
                    </Label>
                    <Switch id="profileVisibility" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="showEmail" className="text-base">
                      Show Email to Other Users
                    </Label>
                    <Switch id="showEmail" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="showLinkedIn" className="text-base">
                      Show LinkedIn Profile
                    </Label>
                    <Switch id="showLinkedIn" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="showGithub" className="text-base">
                      Show GitHub Profile
                    </Label>
                    <Switch id="showGithub" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="showKaggle" className="text-base">
                      Show Kaggle Profile
                    </Label>
                    <Switch id="showKaggle" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 1: Education */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Education</h2>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-2">
                <Label htmlFor="currentPosition">Current Position</Label>
                <Input
                  id="currentPosition"
                  defaultValue="Masters in Computer Science"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="university">University</Label>
                <Input
                  id="university"
                  defaultValue="University of Texas at Arlington"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="graduationYear">Graduation Year</Label>
                <Input id="graduationYear" defaultValue="2025" />
              </div>
            </CardContent>
          </Card>

          {/* Card 2: Skills & Research */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Skills & Research</h2>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-2">
                <Label htmlFor="publications">Publications</Label>
                <Textarea
                  id="publications"
                  defaultValue="Machine Learning Approaches in Robotic Control Systems, Journal of Robotics, 2023
          Autonomous Navigation in Unstructured Environments, IEEE Conference on Automation, 2022"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="researchAreas">Research Areas</Label>
                <Input
                  id="researchAreas"
                  defaultValue="Robotics, Machine Learning, Autonomous Systems, Control Systems"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="technicalSkills">Technical Skills</Label>
                <Input
                  id="technicalSkills"
                  defaultValue="Python, MATLAB, C++, ROS, TensorFlow, CAD (SolidWorks), LabVIEW, Data Analysis, 3D Printing"
                />
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Save Button */}
        <div className="mt-6 flex justify-end">
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
