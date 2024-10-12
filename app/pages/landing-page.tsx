'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import { Moon, Sun, Sparkles } from 'lucide-react';
import { FaFacebook, FaSquareXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6'; // Import social icons
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function LandingPageComponent() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const services = [
    {
      title: "Networking Opportunities",
      description: "Connect with professionals and peers in your field.",
      image: "/images/landing_page/undraw_social_networking_re_i1ex.svg?height=200&width=300&text=Networking"
    },
    {
      title: "Opportunities Board",
      description: "Find the latest job openings and internships.",
      image: "/images/landing_page/undraw_job_offers_re_634p.svg?height=200&width=300&text=Job+Board"
    },
    {
      title: "Career Development",
      description: "Access resources to boost your career growth.",
      image: "/images/landing_page/career-dev.svg?height=200&width=300&text=Career+Development"
    },
    {
      title: "Mentorship Program",
      description: "Get guidance from experienced professionals in your industry.",
      image: "/images/landing_page/undraw_candidate_ubwv.svg?height=200&width=300&text=Mentorship"
    },
    {
      title: "Skill and Role based Roadmaps",
      description: "Enhance your skills with our detailed Roadmaps.",
      image: "/images/landing_page/undraw_navigator_a479.svg?height=200&width=300&text=Workshops"
    },
    {
      title: "Industry Events",
      description: "Attend exclusive events and conferences in your field.",
      image: "/images/landing_page/undraw_events_re_98ue.svg?height=200&width=300&text=Events"
    },
    {
      title: "Forums",
      description: "Create and explore different interest-based forums.",
      image: "/images/landing_page/undraw_online_discussion_re_nn7e.svg?height=200&width=300&text=Resume+Builder"
    },
    {
      title: "News Articles",
      description: "Access news articles related to different fields of Computer Science.",
      image: "/images/landing_page/undraw_newspaper_re_syf5.svg?height=200&width=300&text=Interview+Prep"
    },
    {
      title: "Your Sphere",
      description: "Connect with a vast network of Master's students and Alumni.",
      image: "/images/landing_page/undraw_connected_world_wuay.svg?height=200&width=300&text=Alumni+Network"
    }
  ];

  const handleLearnMoreClick = () => {
    setShowAllServices(prev => !prev); // Toggle the state
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Sparkles className="h-6 w-6 mr-2" />
          <h1 className="text-3xl font-bold">MavSphere</h1>
        </div>
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" className={isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'}>About</Button>
          <Button variant="outline" className={isDarkMode ? 'text-white border-white bg-gray-900 hover:bg-gray-700 hover:text-gray-300' : 'text-gray-900 border-gray-900 hover:bg-gray-100'}>Login / Sign up</Button>
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Welcome to MavSphere</h2>
          <p className="text-xl mb-8">Your gateway to professional networking and career growth</p>
          <div className="flex justify-center space-x-4">
            <Button onClick={handleLearnMoreClick}>{showAllServices ? 'Show Less' : 'Learn More'}</Button> {/* Update button text */}
            <Button variant="outline" className={`${isDarkMode ? 'text-white border-white bg-gray-900 hover:bg-gray-700 hover:text-gray-300' : 'border-gray-900 text-gray-900 hover:bg-gray-100'} hover:bg-gray-800`} onClick={() => setIsContactFormOpen(true)}>Contact Us</Button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'} ${index > 2 && !showAllServices ? 'hidden' : ''}`}>
              <CardHeader>
                <CardTitle className={isDarkMode ? 'text-white' : 'text-gray-900'}>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={service.image} alt={service.title} className="w-full h-64 object-cover mb-4 rounded" /> {/* Updated height */}
                <CardDescription className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>

      <footer className={`mt-12 py-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <div className="container mx-auto px-4 flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Email: sxg0591@mavs.uta.edu</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul>
              <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-blue-400"><FaSquareXTwitter size={24} /></a>
              <a href="#" className="hover:text-pink-500"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-blue-700"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 text-center">
          <p>&copy; 2024 MavSphere. All rights reserved.</p>
        </div>
      </footer>

      <Dialog open={isContactFormOpen} onOpenChange={setIsContactFormOpen}>
        <DialogContent className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}>
          <DialogHeader>
            <DialogTitle>Contact Us</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={(e) => { e.preventDefault(); setIsContactFormOpen(false); }}>
            <div className="grid gap-4 py-4">
              <Input id="email" placeholder="Enter your email" type="email" required className={isDarkMode ? 'bg-gray-700 text-white' : ''} />
              <Input id="phone" placeholder="Enter your phone number" type="tel" className={isDarkMode ? 'bg-gray-700 text-white' : ''} />
              <Textarea id="message" placeholder="Enter your message" required className={isDarkMode ? 'bg-gray-700 text-white' : ''} />
            </div>
            <DialogFooter>
              <Button type="submit" className={isDarkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}>Submit</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
