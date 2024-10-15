"use client";
import React, { useState } from "react";
import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ProfileInformation } from "@/components/page-components/settings-page/profile-information";

export default function SettingsPageComponent() {
  const [isDarkMode] = useState(false);
  const username = "John Doe";

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="h-screen bg-background text-foreground">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Profile Information Section */}
          <div className="lg:col-span-2 h-fit">
            <ProfileInformation
              username={username}
              role="mentor"
              graduationYear={2023}
            />
          </div>

          {/* Notification Settings Card */}
          <Card className="h-full">
            <CardHeader>
              <h2 className="text-lg font-semibold">Notification Settings</h2>
            </CardHeader>
            <CardContent className="space-y-4">
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
            </CardContent>
          </Card>

          {/* Preferences Card */}
          <Card className="h-full">
            <CardHeader>
              <h2 className="text-lg font-semibold">Preferences</h2>
            </CardHeader>
            <CardContent className="space-y-4">
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
            </CardContent>
          </Card>
        </div>
        {/* Save Button */}
        <div className="mt-3 flex justify-end">
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
