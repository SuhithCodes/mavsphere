"use client";

import React, { useState } from "react";
import { ChevronRight as MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function MentorshipProgramComponent() {
  const [isDarkMode] = useState(false);

  const mentors = [
    {
      name: "Dr. Emily Johnson",
      title: "Professor of Computer Science",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      name: "Mark Thompson",
      title: "Senior Software Engineer",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      name: "Sarah Lee",
      title: "Data Scientist",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  ];

  const sphereMembers = [
    {
      name: "Alex Chen",
      title: "Graduate Student",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      name: "Olivia Brown",
      title: "Research Assistant",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      name: "Michael Davis",
      title: "PhD Candidate",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      name: "Emma Wilson",
      title: "Postdoctoral Researcher",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      name: "Daniel Kim",
      title: "Master's Student",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      name: "Sophia Rodriguez",
      title: "Undergraduate Researcher",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  ];

  return (
    <div
      className={`flex h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Mentorship Program Content */}
        <div className="p-6 flex flex-wrap">
          {/* Left side: Your Mentors and Your Sphere */}
          <div className="w-full lg:w-1/2 pr-3">
            <Card className={`mb-6 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
              <CardHeader>
                <CardTitle>Your Mentors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  {mentors.map((mentor, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage src={mentor.avatar} alt={mentor.name} />
                          <AvatarFallback>
                            {mentor.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{mentor.name}</p>
                          <p className="text-sm text-gray-500">
                            {mentor.title}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className={isDarkMode ? "bg-gray-800" : "bg-white"}>
              <CardHeader>
                <CardTitle>Your Sphere</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {sphereMembers.map((member, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback>
                            {member.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{member.name}</p>
                          <p className="text-sm text-gray-500">
                            {member.title}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  See More
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right side: Mentorship Program */}
          <div className="w-full lg:w-1/2 pl-3 mt-6 lg:mt-0">
            <Card className={isDarkMode ? "bg-gray-800" : "bg-white"}>
              <CardContent className="pt-6">
                <img
                  src="/placeholder.svg?height=200&width=600&text=Mentorship+Program"
                  alt="Mentorship Program"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-4">Mentorship Program</h3>
                <p className="mb-4">
                  The MavSphere Mentorship Program connects students with
                  experienced professionals and academics to foster growth,
                  learning, and career development. Our program offers
                  personalized guidance, networking opportunities, and
                  invaluable insights into your field of study.
                </p>
                <p className="mb-4">
                  Whether you&apos;re seeking academic advice, career guidance,
                  or research support, our mentors are here to help you navigate
                  your academic and professional journey.
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Apply Mentorship Program</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Mentorship Program Application</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input id="fullName" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" required />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="university">
                            University/Institution
                          </Label>
                          <Input id="university" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="program">
                            Current Academic Program
                          </Label>
                          <Input id="program" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Areas for Guidance</Label>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="academic" />
                            <Label htmlFor="academic">Academic guidance</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="career" />
                            <Label htmlFor="career">Career advice</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="research" />
                            <Label htmlFor="research">Research support</Label>
                          </div>
                        </div>
                        <Textarea
                          placeholder="Topic of Guidance"
                          className="mt-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Preferred Meeting Frequency</Label>
                        <RadioGroup defaultValue="weekly">
                          <div className="flex space-x-2">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="weekly" id="weekly" />
                              <Label htmlFor="weekly">Weekly</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="biweekly" id="biweekly" />
                              <Label htmlFor="biweekly">Bi-weekly</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="monthly" id="monthly" />
                              <Label htmlFor="monthly">Monthly</Label>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="startDate">Start Date</Label>
                          <Input id="startDate" type="date" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="endDate">End Date</Label>
                          <Input id="endDate" type="date" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="personalStatement">
                          Personal Statement
                        </Label>
                        <Textarea
                          id="personalStatement"
                          placeholder="Why do you want to join the mentorship program?"
                          className="h-24"
                          maxLength={150}
                        />
                        <p className="text-sm text-gray-500">Max 150 words</p>
                      </div>
                      <Button type="submit" className="w-full">
                        Submit Application
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
