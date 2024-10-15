"use client";

// React and hooks
import React, { useState } from "react";
// UI components from Lucide
import { Moon, Sun, Users, Briefcase, BookOpen, Calendar } from "lucide-react";
import { GiCosmicEgg } from "react-icons/gi";

// Custom UI components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// Custom components
import LoginSignup from "./page-components/landing-page/login-signup";
import NavigationItems from "./page-components/landing-page/NavigationItems";
import AboutUs from "./page-components/landing-page/AboutUs";

// Data imports
import servicesData from "@/app/data/landing-page/services.json";
import recentActivitiesData from "@/app/data/landing-page/recent-activities.json";
import upcomingEventsData from "@/app/data/landing-page/upcoming-events.json";

// Add this import
import Footer from "./page-components/landing-page/Footer";

const LandingPage = () => {
  // State management
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isLoginSignupVisible, setIsLoginSignupVisible] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Map of icon components
  const iconComponents = {
    Users,
    Briefcase,
    BookOpen,
    Calendar,
  };

  // Process services data to include icon components
  const services = servicesData.map((service) => ({
    ...service,
    icon: iconComponents[service.icon],
  }));

  // Handle "Learn More" button click
  const handleLearnMoreClick = () => {
    setShowServices((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo and site name */}
        <div className="flex items-center">
          <GiCosmicEgg className="h-8 w-8 mr-2" />
          <h1 className="text-3xl font-bold">MavSphere</h1>
        </div>

        {/* Navigation items */}
        <NavigationItems />

        {/* Header buttons */}
        <nav className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className={
              isDarkMode
                ? "text-white hover:text-gray-300"
                : "text-gray-900 hover:text-gray-700"
            }
            onClick={() => setIsAboutUsOpen(true)}
          >
            About Us
          </Button>
          <Button
            variant="outline"
            className={
              isDarkMode
                ? "text-white border-white bg-gray-900 hover:bg-gray-700 hover:text-gray-300"
                : "text-gray-900 border-gray-900 hover:bg-gray-100"
            }
            onClick={() => setIsLoginSignupVisible(true)}
          >
            Login / Sign up
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {isDarkMode ? (
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
          </Button>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Welcome section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Welcome to MavSphere</h2>
          <p className="text-xl mb-8">
            Your gateway to professional networking and career growth
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <Button
              onClick={handleLearnMoreClick}
              className={
                isDarkMode ? "bg-blue-600 hover:bg-blue-700 text-white" : ""
              }
            >
              {showServices ? "Show Less" : "Learn More"}
            </Button>
            <Button
              variant="outline"
              className={`${
                isDarkMode
                  ? "text-white border-white hover:bg-gray-700 hover:text-gray-300"
                  : "text-gray-900 border-gray-900 hover:bg-gray-100"
              }`}
              onClick={() => setIsContactFormOpen(true)}
            >
              Contact Us
            </Button>
          </div>
        </section>

        {/* Services section */}
        {showServices && (
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className={
                  isDarkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-gray-100 border-gray-200"
                }
              >
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {service.icon && <service.icon className="h-6 w-6" />}
                    <span className="ml-2">{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-75 object-cover mb-4 rounded"
                  />
                  <CardDescription
                    className={isDarkMode ? "text-gray-300" : "text-gray-600"}
                  >
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    {service.action}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </section>
        )}

        {/* Recent Activities and Upcoming Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Recent Activities */}
          <section>
            <h3 className="text-2xl font-bold mb-4">Recent Activities</h3>
            <Card className={isDarkMode ? "bg-gray-800" : "bg-gray-100"}>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Activity</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentActivitiesData.map((activity, index) => (
                      <TableRow key={index}>
                        <TableCell>{activity.activity}</TableCell>
                        <TableCell>{activity.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </section>

          {/* Upcoming Events */}
          <section>
            <h3 className="text-2xl font-bold mb-4">Upcoming Events</h3>
            <Card className={isDarkMode ? "bg-gray-800" : "bg-gray-100"}>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Event</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Call for Papers</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {upcomingEventsData.map((event, index) => (
                      <TableRow key={index}>
                        <TableCell>{event.name}</TableCell>
                        <TableCell>{event.date}</TableCell>
                        <TableCell>{event.location}</TableCell>
                        <TableCell>
                          {event.type === "conference" ? (
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Badge variant="outline">CTF</Badge>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>
                                    Submit your research papers for the upcoming
                                    &quot;{event.name}&quot;.
                                  </AlertDialogTitle>
                                  <AlertDialogDescription>
                                    The deadline for submissions is &quot;
                                    {event.date}&quot;. Visit the conference
                                    website for more details and guidelines on
                                    paper submission. Login to know more
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          ) : (
                            <span></span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      {/* Replace the old footer with the new Footer component */}
      <Footer isDarkMode={isDarkMode} />

      {/* Contact form dialog */}
      <Dialog open={isContactFormOpen} onOpenChange={setIsContactFormOpen}>
        <DialogContent className={isDarkMode ? "bg-gray-800 text-white" : ""}>
          <DialogHeader>
            <DialogTitle>Contact Us</DialogTitle>
            <DialogDescription className={isDarkMode ? "text-gray-300" : ""}>
              We&apos;d love to hear from you!
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

      {/* About Us component */}
      <AboutUs
        isOpen={isAboutUsOpen}
        onClose={() => setIsAboutUsOpen(false)}
        isDarkMode={isDarkMode}
      />

      {/* Login/Signup component */}
      <LoginSignup
        isVisible={isLoginSignupVisible}
        onClose={() => setIsLoginSignupVisible(false)}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default LandingPage;
