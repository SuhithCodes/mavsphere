"use client";

import { useState } from "react";
import {
  Users,
  MessageSquare,
  TrendingUp,
  Plus,
  Search,
  Bell,
  Settings,
  CheckCircle,
  PlusCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ForumComponent() {
  const [selectedForum, setSelectedForum] = useState("General");

  const subscribedForums = [
    {
      name: "General",
      description: "Discuss anything and everything",
      subscribers: 10500,
      posts: 1250,
    },
    {
      name: "Programming",
      description: "Share code and solve problems",
      subscribers: 9800,
      posts: 1100,
    },
    {
      name: "Web Development",
      description: "Frontend, backend, and everything in between",
      subscribers: 8500,
      posts: 950,
    },
    {
      name: "Data Science",
      description: "Explore data analysis and machine learning",
      subscribers: 7200,
      posts: 820,
    },
    {
      name: "Cybersecurity",
      description: "Discuss the latest in digital security",
      subscribers: 6700,
      posts: 750,
    },
    {
      name: "Artificial Intelligence",
      description: "Explore AI and its applications",
      subscribers: 8900,
      posts: 980,
    },
    {
      name: "Computer Networks",
      description: "Discuss networking protocols and technologies",
      subscribers: 5500,
      posts: 620,
    },
  ];

  const unsubscribedForums = [
    {
      name: "Cloud Computing",
      description: "Discuss cloud platforms and services",
      subscribers: 15000,
      posts: 2100,
    },
    {
      name: "DevOps",
      description: "Explore development and operations practices",
      subscribers: 12000,
      posts: 1800,
    },
    {
      name: "Mobile Development",
      description: "iOS, Android, and cross-platform development",
      subscribers: 11000,
      posts: 1600,
    },
    {
      name: "Blockchain",
      description: "Explore cryptocurrency and distributed ledgers",
      subscribers: 9500,
      posts: 1400,
    },
    {
      name: "Game Development",
      description: "Discuss game engines and design",
      subscribers: 10500,
      posts: 1550,
    },
    {
      name: "Computer Graphics",
      description: "Explore 3D rendering and visualization",
      subscribers: 7500,
      posts: 950,
    },
    {
      name: "Quantum Computing",
      description: "Discuss the future of computing",
      subscribers: 6000,
      posts: 750,
    },
  ];

  const posts = [
    {
      title: "Best practices for React hooks",
      author: "User1",
      upvotes: 120,
      comments: 25,
    },
    {
      title: "Optimizing database queries for large datasets",
      author: "User2",
      upvotes: 85,
      comments: 12,
    },
    {
      title: "Implementing JWT authentication in Node.js",
      author: "User3",
      upvotes: 67,
      comments: 8,
    },
    {
      title: "Comparing different state management solutions",
      author: "User4",
      upvotes: 92,
      comments: 18,
    },
    {
      title: "Building scalable microservices architecture",
      author: "User5",
      upvotes: 78,
      comments: 15,
    },
    {
      title: "Machine learning algorithms for image recognition",
      author: "User6",
      upvotes: 105,
      comments: 22,
    },
    {
      title: "Securing your web applications against XSS attacks",
      author: "User7",
      upvotes: 88,
      comments: 14,
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 w-full px-4 py-8 flex">
        {/* Subscribed Forums Sidebar */}
        <aside className="flex-[2.5] pr-4">
          <h2 className="text-xl font-semibold mb-4">Subscribed Forums</h2>
          <ScrollArea className="h-[calc(100vh-200px)]">
            <div className="space-y-4">
              {subscribedForums.map((forum) => (
                <Card
                  key={forum.name}
                  className="cursor-pointer hover:bg-accent"
                  onClick={() => setSelectedForum(forum.name)}
                >
                  <CardContent className="p-4 flex items-center space-x-4 h-[120px]">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{forum.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {forum.description}
                      </p>
                      <div className="flex items-center space-x-2 mt-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{forum.subscribers.toLocaleString()}</span>
                        <MessageSquare className="h-4 w-4 ml-2" />
                        <span>{forum.posts}</span>
                      </div>
                    </div>
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </aside>

        <Separator orientation="vertical" className="mx-4" />

        {/* Forum Posts */}
        <div className="flex-[5]">
          <h2 className="text-2xl font-semibold mb-4">{selectedForum} Forum</h2>
          <ScrollArea className="h-[calc(100vh-200px)]">
            <div className="space-y-4">
              {posts.map((post, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold">{post.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      Posted by {post.author}
                    </p>
                    <div className="flex items-center space-x-4 mt-4">
                      <Button variant="outline" size="sm">
                        <TrendingUp className="mr-2 h-4 w-4" />
                        {post.upvotes}
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        {post.comments}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>

        <Separator orientation="vertical" className="mx-5" />

        {/* Popular Unsubscribed Forums Sidebar */}
        <aside className="flex-[2.5] pl-4">
          <h2 className="text-xl font-semibold mb-4">Popular Forums</h2>
          <ScrollArea className="h-[calc(100vh-200px)]">
            <div className="space-y-4">
              {unsubscribedForums.map((forum) => (
                <Card key={forum.name}>
                  <CardContent className="p-4 flex items-center space-x-4 h-[120px]">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{forum.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {forum.description}
                      </p>
                      <div className="flex items-center space-x-2 mt-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{forum.subscribers.toLocaleString()}</span>
                        <MessageSquare className="h-4 w-4 ml-2" />
                        <span>{forum.posts}</span>
                      </div>
                    </div>
                    <PlusCircle className="h-5 w-5 text-primary cursor-pointer flex-shrink-0" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </aside>
      </main>
      {/* Create Forum Button and Sheet */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="fixed bottom-8 right-8 rounded-full shadow-lg"
            size="lg"
          >
            <Plus className="mr-2 h-4 w-4" /> Create Forum
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Create a New Forum</SheetTitle>
          </SheetHeader>
          <div className="space-y-4 mt-4">
            <Input placeholder="Forum Name" />
            <Textarea placeholder="Forum Description" />
            <Input placeholder="Forum Rules" />
            <Button className="w-full">Create Forum</Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
