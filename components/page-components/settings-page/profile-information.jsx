"use client";
import React from "react";
import { UserRoundPen, BadgeInfo, GraduationCap } from "lucide-react";
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
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

/**
 * @param {Object} props
 * @param {string} props.username
 * @param {number} [props.graduationYear]
 * @param {'mentor' | 'mentee'} props.role
 */
export function ProfileInformation({ username, graduationYear, role }) {
  const getStudentStatus = () => {
    const currentYear = new Date().getFullYear();
    return graduationYear && graduationYear < currentYear
      ? "Alumni"
      : "Student";
  };

  return (
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

          <Button className="justify-center text-base">
            <UserRoundPen className="mr-2" /> Profile Picture
          </Button>
          <div className="flex flex-row gap-2">
            <Badge variant="secondary" className="text-base">
              <BadgeInfo className="h-4 w-4 mr-1" /> {role}
            </Badge>

            <Badge variant="secondary" className="text-base">
              <GraduationCap className="h-4 w-4 mr-1" /> {getStudentStatus()}
            </Badge>
          </div>
        </Card>

        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="links">Profile Links</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you&apos;re
                  done.
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
                  Change your password here. After saving, you&apos;ll be logged
                  out.
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
          <TabsContent value="education">
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
                <CardDescription>
                  Add your complete educational background.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Degrees</Label>
                  <div className="space-y-4">
                    <div className="space-y-2 border p-4 rounded-lg">
                      <Input placeholder="Degree Title (e.g., Master of Science in Mechanical Engineering)" />
                      <Input placeholder="Institution" />
                      <div className="grid grid-cols-2 gap-2">
                        <Input placeholder="Start Year" />
                        <Input placeholder="End Year" />
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    + Add Another Degree
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="experience">
            <Card>
              <CardHeader>
                <CardTitle>Professional Experience</CardTitle>
                <CardDescription>
                  Add your work and research experience.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Positions</Label>
                  <div className="space-y-4">
                    <div className="space-y-2 border p-4 rounded-lg">
                      <Input placeholder="Position Title" />
                      <Input placeholder="Organization" />
                      <div className="grid grid-cols-2 gap-2">
                        <Input placeholder="Start Date" />
                        <Input placeholder="End Date" />
                      </div>
                      <Textarea placeholder="Responsibilities and achievements" />
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    + Add Another Position
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Skills & Research</CardTitle>
                <CardDescription>
                  Add your publications, research areas, and technical skills.
                </CardDescription>
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
  );
}
