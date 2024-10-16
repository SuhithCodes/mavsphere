"use client";
import React, { useState } from "react";
import { UserRoundPen, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

export function GettingStartedPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="container max-w-3xl mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Complete Your Profile</h1>
        <div className="space-y-2">
          <Progress value={(step / totalSteps) * 100} className="w-full" />
          <p className="text-muted-foreground">
            Step {step} of {totalSteps}
          </p>
        </div>
      </div>

      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>
              Let's start with your basic details and profile picture
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="h-32 w-32">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>UP</AvatarFallback>
              </Avatar>
              <Button>
                <UserRoundPen className="mr-2" /> Upload Picture
              </Button>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mentor">Mentor</SelectItem>
                    <SelectItem value="mentee">Mentee</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
            <CardDescription>
              Tell us about your educational background
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2 border p-4 rounded-lg">
              <Input placeholder="Degree Title" />
              <Input placeholder="Institution" />
              <div className="grid grid-cols-2 gap-2">
                <Input placeholder="Start Year" />
                <Input placeholder="End Year (or Expected)" />
              </div>
            </div>
            <Button variant="outline" className="w-full">
              + Add Another Degree
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
            <CardDescription>
              Share your professional experience
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2 border p-4 rounded-lg">
              <Input placeholder="Position Title" />
              <Input placeholder="Organization" />
              <div className="grid grid-cols-2 gap-2">
                <Input placeholder="Start Date" />
                <Input placeholder="End Date" />
              </div>
              <Textarea placeholder="Describe your responsibilities and achievements" />
            </div>
            <Button variant="outline" className="w-full">
              + Add Another Position
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 4 && (
        <Card>
          <CardHeader>
            <CardTitle>Skills & Publications</CardTitle>
            <CardDescription>
              Add your expertise and research work
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Technical Skills</Label>
              <Input placeholder="e.g., Python, Machine Learning, Data Analysis" />
            </div>
            <div className="space-y-2">
              <Label>Research Areas</Label>
              <Input placeholder="e.g., Robotics, AI, Control Systems" />
            </div>
            <div className="space-y-2">
              <Label>Publications</Label>
              <Textarea placeholder="List your publications (one per line)" />
            </div>
          </CardContent>
        </Card>
      )}

      <CardFooter className="flex justify-between mt-6">
        {step > 1 && (
          <Button variant="outline" onClick={prevStep}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
          </Button>
        )}
        <div className="flex-1" />
        {step < totalSteps ? (
          <Button onClick={nextStep}>
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button>Complete Profile</Button>
        )}
      </CardFooter>
    </div>
  );
}
