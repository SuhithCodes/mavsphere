"use client";

import React from "react";
import { Mail, MapPin, GraduationCap } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ProfileContent() {
  const username = "John Doe";

  return (
    <div className="p-6">
      <div className="grid grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="col-span-1 space-y-6">
          {/* Basic Information */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage
                    src="/placeholder.svg?height=96&width=96"
                    alt={username}
                  />
                  <AvatarFallback>{username.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-2">{username}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  PhD in Mechanical Engineering
                </p>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">University of Technology</span>
                </div>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">john.doe@example.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <FaLinkedin className="h-4 w-4" />
                  <a
                    href="https://www.linkedin.com/in/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>Python</Badge>
                <Badge>MATLAB</Badge>
                <Badge>C++</Badge>
                <Badge>ROS</Badge>
                <Badge>TensorFlow</Badge>
                <Badge>CAD (SolidWorks)</Badge>
                <Badge>LabVIEW</Badge>
                <Badge>Data Analysis</Badge>
                <Badge>3D Printing</Badge>
              </div>
            </CardContent>
          </Card>
          {/* Research Interests */}
          <Card>
            <CardHeader>
              <CardTitle>Research Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Research Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Robotics</Badge>
                    <Badge>Machine Learning</Badge>
                    <Badge>Autonomous Systems</Badge>
                    <Badge>Control Systems</Badge>
                  </div>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2">Publications</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-blue-500 hover:underline">
                        Machine Learning Approaches in Robotic Control Systems
                      </a>
                      <p className="text-sm text-gray-500">
                        Journal of Robotics, 2023
                      </p>
                    </li>
                    <li>
                      <a href="#" className="text-blue-500 hover:underline">
                        Autonomous Navigation in Unstructured Environments
                      </a>
                      <p className="text-sm text-gray-500">
                        IEEE Conference on Automation, 2022
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="col-span-2 space-y-6">
          {/* Academic Background */}
          <Card>
            <CardHeader>
              <CardTitle>Academic Background</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold flex items-center">
                    <GraduationCap className="h-4  w-4 mr-2" />
                    Current Position
                  </h4>
                  <p>PhD in Mechanical Engineering</p>
                  <p>University of Technology</p>
                  <p className="text-sm text-gray-500">
                    Expected Graduation: May 2025
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2">Education History</h4>
                  <ul className="space-y-2">
                    <li>
                      <p>Master of Science in Mechanical Engineering</p>
                      <p className="text-sm text-gray-500">
                        University of Science, 2021
                      </p>
                    </li>
                    <li>
                      <p>Bachelor of Science in Mechanical Engineering</p>
                      <p className="text-sm text-gray-500">
                        Tech Institute, 2019
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Experience */}
          <Card>
            <CardHeader>
              <CardTitle>Professional Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-semibold">Research Assistant</h4>
                  <p className="text-sm text-gray-500">
                    University of Technology, Robotics Lab
                  </p>
                  <p className="text-sm text-gray-500">
                    September 2021 - Present
                  </p>
                  <ul className="list-disc list-inside mt-2 text-sm">
                    <li>
                      Developing machine learning algorithms for robotic control
                      systems
                    </li>
                    <li>
                      Collaborating on autonomous navigation research projects
                    </li>
                  </ul>
                </li>
                <Separator />
                <li>
                  <h4 className="font-semibold">
                    Mechanical Engineering Intern
                  </h4>
                  <p className="text-sm text-gray-500">TechCorp Industries</p>
                  <p className="text-sm text-gray-500">
                    June 2020 - August 2020
                  </p>
                  <ul className="list-disc list-inside mt-2 text-sm">
                    <li>
                      Assisted in the design and prototyping of mechanical
                      components
                    </li>
                    <li>Conducted performance tests and data analysis</li>
                  </ul>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
