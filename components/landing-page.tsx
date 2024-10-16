"use client";

import React, { useState } from "react";
import {
  Moon,
  Sun,
  MessageSquare,
  Users,
  Briefcase,
  BookOpen,
  Calendar,
  ChevronRight,
} from "lucide-react";
import {
  FaFacebook,
  FaSquareXTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { GiCosmicEgg } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useRouter } from "next/navigation";

type LoginSignupProps = {
  isVisible: boolean;
  onClose: () => void;
  isDarkMode: boolean;
};

const LoginSignup: React.FC<LoginSignupProps> = ({
  isVisible,
  onClose,
  isDarkMode,
}) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState(""); // State to store email
  const [password, setPassword] = useState(""); // State to store password
  const router = useRouter(); // Create a router instance

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Authentication logic
    if (email === "john.doe@example.com" && password === "qwerty123") {
      // Navigate to the home page if authentication is successful
      router.push("/home");
    } else {
      // Optionally, you can handle authentication failure here
      alert("Invalid email or password"); // Alert user about failed login
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-end transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`w-full max-w-md ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        } h-full overflow-y-auto transition-transform duration-300 ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 flex flex-col h-full">
          <button onClick={onClose} className="self-end mb-4">
            Close
          </button>
          <h1 className="text-3xl font-bold mb-6">
            {isLogin ? "Welcome Back to MavSphere" : "Join MavSphere"}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 flex-grow">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                value={email} // Bind value to state
                onChange={(e) => setEmail(e.target.value)} // Update state on change
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
                value={password} // Bind value to state
                onChange={(e) => setPassword(e.target.value)} // Update state on change
                required
              />
            </div>
            {!isLogin && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    type="password"
                    required
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="signupAsMentor" />
                  <Label htmlFor="signupAsMentor" className="text-sm">
                    Sign up as a mentor (optional)
                  </Label>
                </div>
              </>
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
            <Button
              className={`w-full ${
                isDarkMode
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-primary hover:bg-primary/90"
              }`}
              type="submit"
            >
              {isLogin ? "Login Now" : "Sign Up"}
            </Button>
          </form>
          <div className="mt-6 text-center text-sm">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <Button
              variant="link"
              className={`p-0 ${
                isDarkMode
                  ? "text-blue-400 hover:text-blue-300"
                  : "text-primary hover:text-primary/90"
              }`}
              onClick={() => setIsLogin(!isLogin)}
            >
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
    </div>
  );
};

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isLoginSignupVisible, setIsLoginSignupVisible] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const services = [
    {
      title: "Networking Opportunities",
      description: "Connect with professionals and peers in your field.",
      image:
        "/images/landing_page/undraw_social_networking_re_i1ex.svg?height=200&width=300&text=Networking",
      icon: <Users className="h-6 w-6" />,
      action: "Explore Networks",
    },
    {
      title: "Opportunities Board",
      description: "Find the latest job openings and internships.",
      image:
        "/images/landing_page/undraw_job_offers_re_634p.svg?height=200&width=300&text=Job+Board",
      icon: <Briefcase className="h-6 w-6" />,
      action: "Browse Jobs",
    },
    {
      title: "Career Development",
      description: "Access resources to boost your career growth.",
      image:
        "/images/landing_page/career-dev.svg?height=200&width=300&text=Career+Development",
      icon: <BookOpen className="h-6 w-6" />,
      action: "View Resources",
    },
    {
      title: "Mentorship Program",
      description:
        "Get guidance from experienced professionals in your industry.",
      image:
        "/images/landing_page/undraw_candidate_ubwv.svg?height=200&width=300&text=Mentorship",
      icon: <Users className="h-6 w-6" />,
      action: "Find a Mentor",
    },
    {
      title: "Skill and Role based Roadmaps",
      description: "Enhance your skills with our detailed Roadmaps.",
      image:
        "/images/landing_page/undraw_navigator_a479.svg?height=200&width=300&text=Workshops",
      icon: <BookOpen className="h-6 w-6" />,
      action: "Explore Roadmaps",
    },
    {
      title: "Industry Events",
      description: "Attend exclusive events and conferences in your field.",
      image:
        "/images/landing_page/undraw_events_re_98ue.svg?height=200&width=300&text=Events",
      icon: <Calendar className="h-6 w-6" />,
      action: "View Calendar",
    },
  ];

  const handleLearnMoreClick = () => {
    setShowServices((prev) => !prev);
  };

  const teamMembers = [
    {
      name: "John Doe",
      avatar: "/placeholder.svg",
      designation: "Full Stack Developer",
      experience: "5 years",
      quote: "Innovation distinguishes between a leader and a follower.",
    },
    {
      name: "Jane Smith",
      avatar: "/placeholder.svg",
      designation: "UI/UX Designer",
      experience: "4 years",
      quote:
        "Design is not just what it looks like and feels like. Design is how it works.",
    },
    {
      name: "Mike Johnson",
      avatar: "/placeholder.svg",
      designation: "Data Scientist",
      experience: "6 years",
      quote:
        "Data is the new oil. It's valuable, but if unrefined it cannot really be used.",
    },
    {
      name: "Emily Brown",
      avatar: "/placeholder.svg",
      designation: "Machine Learning Engineer",
      experience: "3 years",
      quote:
        "Machine learning is the science of getting computers to learn without being explicitly programmed.",
    },
    {
      name: "Alex Lee",
      avatar: "/placeholder.svg",
      designation: "Project Manager",
      experience: "7 years",
      quote: "The art of management is to make difficult things easy.",
    },
  ];

  const recentActivities = [
    {
      activity: "New discussion: 'The Future of AI in Academia'",
      group: "AI Research Group",
      date: "2024-05-01",
    },
    {
      activity: "Job Posted: Assistant Professor in Computer Science",
      organization: "Tech University",
      date: "2024-04-28",
    },
    {
      activity: "New Resource: 'Guide to Publishing Your First Academic Paper'",
      author: "Dr. Jane Smith",
      date: "2024-04-25",
    },
    {
      activity: "Upcoming Event: International Conference on Climate Change",
      date: "2024-05-15",
    },
  ];

  const upcomingEvents = [
    {
      name: "AI and Machine Learning Symposium",
      date: "May 15-17, 2024",
      location: "Virtual",
    },
    {
      name: "Web Development Conference",
      date: "June 22-24, 2024",
      location: "Austin, TX",
    },
    {
      name: "Cybersecurity Summit",
      date: "July 10-12, 2024",
      location: "Dallas, TX",
    },
    {
      name: "Data Science Workshop",
      date: "August 5-7, 2024",
      location: "Houston, TX",
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <GiCosmicEgg className="h-8 w-8 mr-2" />
          <h1 className="text-3xl font-bold">MavSphere</h1>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Dashboard
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Networking</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <MessageSquare className="h-6 w-6 mb-2" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Messaging
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Connect with peers and professionals through direct
                          messaging.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/"
                      >
                        <div className="text-sm font-medium leading-none">
                          Group Chats
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Collaborate with others in topic-specific group chats.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/"
                      >
                        <div className="text-sm font-medium leading-none">
                          Forums
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Engage in discussions on various topics in our
                          community forums.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Opportunities</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/"
                      >
                        <div className="text-sm font-medium leading-none">
                          Job Listings
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Browse and apply for job opportunities in your field.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/"
                      >
                        <div className="text-sm font-medium leading-none">
                          Internship Listings
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Find internships to gain valuable experience in your
                          industry.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <BookOpen className="h-6 w-6 mb-2" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Career Development
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Access articles, tools, and tips to boost your career
                          growth.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/"
                      >
                        <div className="text-sm font-medium leading-none">
                          Mentorship Program
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Connect with experienced professionals for guidance
                          and support.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Events
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
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

      <main className="flex-grow container mx-auto px-4 py-12">
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
                    {service.icon}
                    <span className="ml-2">{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-40 object-cover mb-4 rounded"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
                    {recentActivities.map((activity, index) => (
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
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {upcomingEvents.map((event, index) => (
                      <TableRow key={index}>
                        <TableCell>{event.name}</TableCell>
                        <TableCell>{event.date}</TableCell>
                        <TableCell>{event.location}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <footer
        className={`mt-12 py-8 ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Email: sxg0591@mavs.uta.edu</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <FaSquareXTwitter />
              </a>
              <a
                href="#"
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </footer>

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

      <Drawer open={isAboutUsOpen} onOpenChange={setIsAboutUsOpen}>
        <DrawerContent className={isDarkMode ? "bg-gray-800 text-white" : ""}>
          <DrawerHeader>
            <DrawerTitle>About Us</DrawerTitle>
            <DrawerDescription className={isDarkMode ? "text-gray-300" : ""}>
              Team MavSphere consists of graduate students from a university in
              Texas who are passionate about technology and innovation. We aim
              to create a platform that connects students, professionals, and
              industry leaders to foster growth and collaboration in the tech
              community.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 flex flex-wrap justify-center gap-4">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className={`w-64 ${
                  isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100"
                }`}
              >
                <CardContent className="flex flex-col items-center p-4">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h4 className="text-lg font-semibold">{member.name}</h4>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-300" : "text-gray-500"
                    } mb-2`}
                  >
                    {member.designation} • {member.experience}
                  </p>
                  <p className="text-sm text-center italic">"{member.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </DrawerContent>
      </Drawer>

      <LoginSignup
        isVisible={isLoginSignupVisible}
        onClose={() => setIsLoginSignupVisible(false)}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default LandingPage;
