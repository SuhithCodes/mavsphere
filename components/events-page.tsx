"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Plus,
  X,
  Check,
  Globe,
  ChevronDownIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Helper function to generate dates for the current week
const getWeekDates = (date: Date) => {
  const week = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(date);
    day.setDate(date.getDate() - date.getDay() + i);
    week.push(day);
  }
  return week;
};

// Helper function to get dates for the mini calendar
const getMonthDates = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDay = firstDay.getDay();
  const monthDates = [];

  for (let i = 0; i < 42; i++) {
    if (i < startingDay || i >= startingDay + daysInMonth) {
      monthDates.push(null);
    } else {
      monthDates.push(new Date(year, month, i - startingDay + 1));
    }
  }

  return monthDates;
};

// Sample events data
const initialEvents = [
  {
    id: 1,
    title: "Team Meeting",
    date: new Date(2023, 5, 12, 10, 0),
    duration: 60,
    location: "Conference Room A",
    type: "meeting",
    website: "https://meet.google.com/abc-defg-hij",
  },
  {
    id: 2,
    title: "Project Deadline",
    date: new Date(2023, 5, 14, 17, 0),
    duration: 0,
    location: "Online",
    type: "deadline",
  },
  {
    id: 3,
    title: "Lunch with Mentor",
    date: new Date(2023, 5, 15, 12, 30),
    duration: 90,
    location: "Cafe Nero",
    type: "meeting",
  },
  {
    id: 4,
    title: "Workshop: AI Ethics",
    date: new Date(2023, 5, 16, 14, 0),
    duration: 120,
    location: "Auditorium",
    type: "seminar",
    website: "https://aiethics.workshop.com",
  },
  {
    id: 5,
    title: "Code Review",
    date: new Date(2023, 5, 16, 11, 0),
    duration: 60,
    location: "Online",
    type: "meeting",
    website: "https://zoom.us/j/123456789",
  },
  {
    id: 6,
    title: "Morning Workout",
    date: new Date(2023, 5, 17, 7, 0),
    duration: 60,
    location: "Gym",
    type: "workout",
  },
  {
    id: 7,
    title: "AI and Machine Learning Conference",
    date: new Date(2024, 10, 15, 9, 0),
    duration: 480,
    location: "Tech Center",
    type: "conference",
    website: "https://aimlconf2024.com",
  },
  {
    id: 8,
    title: "Cybersecurity Summit 2024",
    date: new Date(2024, 10, 28, 10, 0),
    duration: 480,
    location: "Security Hub",
    type: "conference",
    website: "https://cybersummit2024.com",
  },
  {
    id: 9,
    title: "Future of Web Development Conference",
    date: new Date(2024, 11, 5, 9, 30),
    duration: 480,
    location: "Dev Center",
    type: "conference",
    website: "https://webdevfuture2024.com",
  },
];

export default function EventsPageComponent() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [events, setEvents] = useState(initialEvents);
  const [eventFilters, setEventFilters] = useState(["all"]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    duration: "",
    location: "",
    type: "",
    description: "",
    website: "",
    notes: "",
    priority: "medium",
  });
  const [newFilter, setNewFilter] = useState("");

  const weekDates = getWeekDates(currentDate);
  const monthDates = getMonthDates(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  const handlePrevWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setCurrentDate(date);
  };

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const filteredEvents = events.filter(
    (event) =>
      event.date.getDate() === selectedDate.getDate() &&
      event.date.getMonth() === selectedDate.getMonth() &&
      event.date.getFullYear() === selectedDate.getFullYear() &&
      (eventFilters.includes("all") || eventFilters.includes(event.type))
  );

  const upcomingConferences = events
    .filter((event) => event.type === "conference" && event.date > new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 3)
    .map((conference) => ({
      ...conference,
    }));

  const handleAddEvent = () => {
    const dateTime = new Date(`${newEvent.date}T${newEvent.time}`);
    const newEventObject = {
      id: events.length + 1,
      title: newEvent.title,
      date: dateTime,
      duration: parseInt(newEvent.duration),
      location: newEvent.location,
      type: newEvent.type,
      description: newEvent.description,
      website: newEvent.website,
      notes: newEvent.notes,
      priority: newEvent.priority,
    };
    setEvents([...events, newEventObject]);
    setNewEvent({
      title: "",
      date: "",
      time: "",
      duration: "",
      location: "",
      type: "",
      description: "",
      website: "",
      notes: "",
      priority: "medium",
    });
  };

  return (
    <div
      className={`flex h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 pr-0 lg:pr-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div className="flex items-center space-x-2 mb-4 sm:mb-0">
                <Button variant="outline" size="icon" onClick={handlePrevWeek}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm font-medium">
                  {weekDates[0].toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}{" "}
                  -{" "}
                  {weekDates[6].toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <Button variant="outline" size="icon" onClick={handleNextWeek}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Add event</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Add New Event</SheetTitle>
                      <SheetDescription>
                        Fill in the details for the new event.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-right">
                          Title
                        </Label>
                        <Input
                          id="title"
                          value={newEvent.title}
                          onChange={(e) =>
                            setNewEvent({ ...newEvent, title: e.target.value })
                          }
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="date" className="text-right">
                          Date
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          value={newEvent.date}
                          onChange={(e) =>
                            setNewEvent({ ...newEvent, date: e.target.value })
                          }
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="time" className="text-right">
                          Time
                        </Label>
                        <Input
                          id="time"
                          type="time"
                          value={newEvent.time}
                          onChange={(e) =>
                            setNewEvent({ ...newEvent, time: e.target.value })
                          }
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="duration" className="text-right">
                          Duration (minutes)
                        </Label>
                        <Input
                          id="duration"
                          type="number"
                          value={newEvent.duration}
                          onChange={(e) =>
                            setNewEvent({
                              ...newEvent,
                              duration: e.target.value,
                            })
                          }
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="location" className="text-right">
                          Location
                        </Label>
                        <Input
                          id="location"
                          value={newEvent.location}
                          onChange={(e) =>
                            setNewEvent({
                              ...newEvent,
                              location: e.target.value,
                            })
                          }
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="type" className="text-right">
                          Type
                        </Label>
                        <Select
                          onValueChange={(value) =>
                            setNewEvent({ ...newEvent, type: value })
                          }
                        >
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="workout">Workout</SelectItem>
                            <SelectItem value="meeting">Meeting</SelectItem>
                            <SelectItem value="seminar">Seminar</SelectItem>
                            <SelectItem value="deadline">Deadline</SelectItem>
                            <SelectItem value="conference">
                              Conference
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="website" className="text-right">
                          Website
                        </Label>

                        <Input
                          id="website"
                          type="url"
                          value={newEvent.website}
                          onChange={(e) =>
                            setNewEvent({
                              ...newEvent,
                              website: e.target.value,
                            })
                          }
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="priority" className="text-right">
                          Priority
                        </Label>
                        <Select
                          onValueChange={(value) =>
                            setNewEvent({ ...newEvent, priority: value })
                          }
                        >
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                          Description
                        </Label>
                        <Textarea
                          id="description"
                          value={newEvent.description}
                          onChange={(e) =>
                            setNewEvent({
                              ...newEvent,
                              description: e.target.value,
                            })
                          }
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="notes" className="text-right">
                          Notes
                        </Label>
                        <Textarea
                          id="notes"
                          value={newEvent.notes}
                          onChange={(e) =>
                            setNewEvent({ ...newEvent, notes: e.target.value })
                          }
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end mt-4">
                      <Button
                        variant="outline"
                        onClick={() =>
                          setNewEvent({
                            title: "",
                            date: "",
                            time: "",
                            duration: "",
                            location: "",
                            type: "",
                            description: "",
                            website: "",
                            notes: "",
                            priority: "medium",
                          })
                        }
                        className="mr-2"
                      >
                        <X className="h-4 w-4 mr-2" />
                        Cancel
                      </Button>
                      <Button onClick={handleAddEvent}>
                        <Check className="h-4 w-4 mr-2" />
                        Add Event
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-4">
              {weekDates.map((date, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`flex flex-col items-stretch h-full p-0 ${
                    isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                  } ${
                    date.toDateString() === selectedDate.toDateString()
                      ? isDarkMode
                        ? "bg-blue-900"
                        : "bg-blue-100"
                      : isDarkMode
                      ? "bg-gray-800"
                      : "bg-white"
                  }`}
                  onClick={() => handleDateClick(date)}
                >
                  <div
                    className={`p-2 text-center ${
                      date.toDateString() === new Date().toDateString()
                        ? isDarkMode
                          ? "bg-gray-700"
                          : "bg-gray-200"
                        : ""
                    }`}
                  >
                    <div className="text-sm font-medium">
                      {date.toLocaleDateString("en-US", { weekday: "short" })}
                    </div>
                    <div className="text-2xl font-bold">{date.getDate()}</div>
                  </div>
                  <ScrollArea className="flex-1 p-2">
                    {events
                      .filter(
                        (event) =>
                          event.date.toDateString() === date.toDateString() &&
                          (eventFilters.includes("all") ||
                            eventFilters.includes(event.type))
                      )
                      .map((event) => (
                        <Card
                          key={event.id}
                          className={`mb-2 ${isDarkMode ? "bg-gray-700" : ""}`}
                        >
                          <CardContent className="p-2">
                            <div className="text-sm font-semibold truncate">
                              {event.title}
                            </div>
                            <div
                              className={`text-xs ${
                                isDarkMode ? "text-gray-400" : "text-gray-500"
                              }`}
                            >
                              {event.date.toLocaleTimeString("en-US", {
                                hour: "numeric",
                                minute: "2-digit",
                              })}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </ScrollArea>
                </Button>
              ))}
            </div>

            {/* Event Details */}
            <Card
              className={`mt-6 ${
                isDarkMode ? "bg-gray-800 border-gray-700" : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="text-lg">
                  Events on{" "}
                  {selectedDate.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {filteredEvents.length === 0 ? (
                  <p className={isDarkMode ? "text-gray-400" : "text-gray-500"}>
                    No events scheduled for this day.
                  </p>
                ) : (
                  filteredEvents.map((event) => (
                    <div
                      key={event.id}
                      className={`mb-4 p-4 border rounded-lg ${
                        isDarkMode ? "border-gray-700" : ""
                      }`}
                    >
                      <h3 className="text-lg font-semibold mb-2">
                        {event.title}
                      </h3>
                      <div
                        className={`flex items-center text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-500"
                        } mb-2`}
                      >
                        <Clock className="mr-2 h-4 w-4" />
                        {event.date.toLocaleTimeString("en-US", {
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                        {event.duration > 0 &&
                          ` - ${new Date(
                            event.date.getTime() + event.duration * 60000
                          ).toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "2-digit",
                          })}`}
                      </div>
                      <div
                        className={`flex items-center text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-500"
                        } mb-2`}
                      >
                        <MapPin className="mr-2 h-4 w-4" />
                        {event.location}
                      </div>
                      {event.website && (
                        <div
                          className={`flex items-center text-sm ${
                            isDarkMode ? "text-gray-400" : "text-gray-500"
                          } mb-2`}
                        >
                          <Globe className="mr-2 h-4 w-4" />
                          <a
                            href={event.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                          >
                            {event.website}
                          </a>
                        </div>
                      )}
                      <Badge>{event.type}</Badge>
                      {event.priority && (
                        <Badge
                          className="ml-2"
                          variant={
                            event.priority === "high"
                              ? "destructive"
                              : event.priority === "medium"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {event.priority}
                        </Badge>
                      )}
                      {event.description && (
                        <p
                          className={`mt-2 text-sm ${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {event.description}
                        </p>
                      )}
                      {event.notes && (
                        <p
                          className={`mt-2 text-sm ${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          <strong>Notes:</strong> {event.notes}
                        </p>
                      )}
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div
            className={`w-full lg:w-96 mt-6 lg:mt-0 ${
              isDarkMode ? "bg-gray-800" : "bg-gray-100"
            } p-6 rounded-lg`}
          >
            {/* Mini Calendar */}
            <Card className={`mb-6 ${isDarkMode ? "bg-gray-700" : "bg-white"}`}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Button variant="ghost" size="sm" onClick={handlePrevMonth}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <CardTitle className="text-lg">
                    {currentDate.toLocaleString("default", {
                      month: "long",
                      year: "numeric",
                    })}
                  </CardTitle>
                  <Button variant="ghost" size="sm" onClick={handleNextMonth}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                    <div key={day} className="font-medium">
                      {day}
                    </div>
                  ))}
                  {monthDates.map((date, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className={`p-1 ${
                        date
                          ? date.toDateString() === selectedDate.toDateString()
                            ? isDarkMode
                              ? "bg-blue-600 text-white"
                              : "bg-blue-100 text-blue-600"
                            : date.toDateString() === new Date().toDateString()
                            ? isDarkMode
                              ? "bg-gray-600 text-blue-400"
                              : "bg-gray-200 text-blue-600"
                            : ""
                          : "invisible"
                      }`}
                      onClick={() => date && handleDateClick(date)}
                    >
                      {date ? date.getDate() : ""}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Conferences */}
            <Card className={`${isDarkMode ? "bg-gray-700" : "bg-white"}`}>
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Conferences</CardTitle>
              </CardHeader>
              <CardContent>
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left pb-2">Conference</th>
                      <th className="text-left pb-2">Date</th>
                      <th className="text-right pb-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {upcomingConferences.map((conference) => (
                      <tr
                        key={conference.id}
                        className="border-b last:border-b-0"
                      >
                        <td className="py-2">
                          <div className="font-semibold">
                            {conference.title}
                          </div>
                        </td>
                        <td className="py-2">
                          {conference.date.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </td>
                        <td className="py-2 text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <ChevronDownIcon className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem
                                onClick={() =>
                                  navigator.clipboard.writeText(
                                    conference.title
                                  )
                                }
                              >
                                Copy Conference Title
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem
                                onClick={() => setIsContactFormOpen(true)}
                              >
                                Contact Us
                              </DropdownMenuItem>
                              <DropdownMenuItem>Apply now</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Dialog open={isContactFormOpen} onOpenChange={setIsContactFormOpen}>
        <DialogContent className={isDarkMode ? "bg-gray-800 text-white" : ""}>
          <DialogHeader>
            <DialogTitle>Contact Us</DialogTitle>
            <DialogDescription className={isDarkMode ? "text-gray-300" : ""}>
              We'd love to hear from you!
            </DialogDescription>
          </DialogHeader>
          <form>
            <Input placeholder="Your Name" className="mb-4" />
            <Input placeholder="Your Email" className="mb-4" />
            <Input placeholder="Your Phone Number" className="mb-4" />
            <Input placeholder="Subject" className="mb-4" />
            <Textarea placeholder="Your Message" rows={4} className="mb-4" />
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsContactFormOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Send</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
