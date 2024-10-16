"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function CareerDevelopment() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedRoadmapType, setSelectedRoadmapType] = useState("skill");
  const [selectedTipTopic, setSelectedTipTopic] = useState(null);

  const skillBasedRoadmaps = [
    {
      title: "Software Engineering",
      description: "Master the art of coding and system design",
      image: "/placeholder.svg?height=100&width=200&text=Software+Engineering",
    },
    {
      title: "Data Science",
      description: "Learn to analyze and interpret complex data",
      image: "/placeholder.svg?height=100&width=200&text=Data+Science",
    },
    {
      title: "Digital Marketing",
      description: "Develop skills in online promotion and analytics",
      image: "/placeholder.svg?height=100&width=200&text=Digital+Marketing",
    },
    {
      title: "UX/UI Design",
      description: "Create intuitive and beautiful user interfaces",
      image: "/placeholder.svg?height=100&width=200&text=UX/UI+Design",
    },
    {
      title: "Cloud Computing",
      description: "Build and manage scalable cloud infrastructure",
      image: "/placeholder.svg?height=100&width=200&text=Cloud+Computing",
    },
    {
      title: "Cybersecurity",
      description: "Protect systems and networks from digital attacks",
      image: "/placeholder.svg?height=100&width=200&text=Cybersecurity",
    },
    {
      title: "Artificial Intelligence",
      description: "Develop intelligent systems and machine learning models",
      image: "/placeholder.svg?height=100&width=200&text=AI",
    },
    {
      title: "Blockchain Development",
      description: "Build decentralized applications and smart contracts",
      image: "/placeholder.svg?height=100&width=200&text=Blockchain",
    },
    {
      title: "IoT Development",
      description: "Create connected devices and systems",
      image: "/placeholder.svg?height=100&width=200&text=IoT",
    },
    {
      title: "Game Development",
      description: "Design and build interactive gaming experiences",
      image: "/placeholder.svg?height=100&width=200&text=Game+Dev",
    },
  ];

  const roleBasedRoadmaps = [
    {
      title: "Frontend Developer",
      description:
        "Build interactive user interfaces with modern web technologies",
      image: "/placeholder.svg?height=100&width=200&text=Frontend+Developer",
    },
    {
      title: "Backend Developer",
      description: "Design and implement server-side logic and databases",
      image: "/placeholder.svg?height=100&width=200&text=Backend+Developer",
    },
    {
      title: "Data Analyst",
      description:
        "Extract insights from complex datasets to drive business decisions",
      image: "/placeholder.svg?height=100&width=200&text=Data+Analyst",
    },
    {
      title: "Android Developer",
      description: "Create native mobile applications for the Android platform",
      image: "/placeholder.svg?height=100&width=200&text=Android+Developer",
    },
    {
      title: "DevOps Engineer",
      description: "Streamline development and deployment processes",
      image: "/placeholder.svg?height=100&width=200&text=DevOps+Engineer",
    },
    {
      title: "Machine Learning Engineer",
      description: "Develop AI models and intelligent systems",
      image: "/placeholder.svg?height=100&width=200&text=ML+Engineer",
    },
    {
      title: "iOS Developer",
      description: "Build applications for Apple's mobile platform",
      image: "/placeholder.svg?height=100&width=200&text=iOS+Developer",
    },
    {
      title: "Full Stack Developer",
      description: "Handle both frontend and backend development",
      image: "/placeholder.svg?height=100&width=200&text=Full+Stack+Dev",
    },
    {
      title: "Cloud Architect",
      description: "Design and oversee cloud computing strategies",
      image: "/placeholder.svg?height=100&width=200&text=Cloud+Architect",
    },
    {
      title: "Data Scientist",
      description:
        "Apply statistical and mathematical models to solve complex problems",
      image: "/placeholder.svg?height=100&width=200&text=Data+Scientist",
    },
  ];

  const articles = [
    {
      title: "The Future of AI in Software Development",
      description:
        "Explore how artificial intelligence is reshaping the landscape of software development and what it means for developers.",
      image: "/placeholder.svg?height=100&width=200&text=AI+in+Dev",
      badges: ["AI", "Software Development", "Future Tech"],
    },
    {
      title: "Mastering React Hooks",
      description:
        "A comprehensive guide to using React Hooks effectively in your projects.",
      image: "/placeholder.svg?height=100&width=200&text=React+Hooks",
      badges: ["React", "Frontend", "Web Development"],
    },
    {
      title: "DevOps Best Practices for 2023",
      description:
        "Learn the latest DevOps strategies to improve your development workflow and deployment processes.",
      image: "/placeholder.svg?height=100&width=200&text=DevOps+2023",
      badges: ["DevOps", "CI/CD", "Automation"],
    },
    {
      title: "Introduction to Quantum Computing",
      description:
        "Dive into the basics of quantum computing and its potential impact on the tech industry.",
      image: "/placeholder.svg?height=100&width=200&text=Quantum+Computing",
      badges: ["Quantum Computing", "Future Tech", "Computer Science"],
    },
    {
      title: "Optimizing Algorithms for Better Performance",
      description:
        "Learn techniques to improve the efficiency of your algorithms and write faster code.",
      image:
        "/placeholder.svg?height=100&width=200&text=Algorithm+Optimization",
      badges: ["Algorithms", "Performance", "Computer Science"],
    },
    {
      title: "Understanding Distributed Systems",
      description:
        "Explore the principles behind distributed systems and their applications in modern software architecture.",
      image: "/placeholder.svg?height=100&width=200&text=Distributed+Systems",
      badges: ["Distributed Systems", "Architecture", "Computer Science"],
    },
    {
      title: "Machine Learning Fundamentals",
      description:
        "Get started with machine learning concepts and techniques for building intelligent systems.",
      image: "/placeholder.svg?height=100&width=200&text=ML+Fundamentals",
      badges: ["Machine Learning", "AI", "Data Science"],
    },
    {
      title: "Cybersecurity Essentials for Developers",
      description:
        "Learn crucial security practices to protect your applications from common vulnerabilities.",
      image: "/placeholder.svg?height=100&width=200&text=Cybersecurity",
      badges: ["Cybersecurity", "Web Development", "Best Practices"],
    },
  ];

  const tipTopics = [
    {
      title: "Algorithms and Data Structures",
      description: "Master the fundamentals of computer science",
      icon: "🧮",
      relatedArticles: ["Optimizing Algorithms for Better Performance"],
    },
    {
      title: "Web Development",
      description: "Build modern and responsive web applications",
      icon: "🌐",
      relatedArticles: ["Mastering React Hooks"],
    },
    {
      title: "Artificial Intelligence",
      description: "Explore the world of AI and machine learning",
      icon: "🤖",
      relatedArticles: [
        "The Future of AI in Software Development",
        "Machine Learning Fundamentals",
      ],
    },
    {
      title: "Distributed Systems",
      description: "Understand complex, scalable system architectures",
      icon: "🌐",
      relatedArticles: ["Understanding Distributed Systems"],
    },
    {
      title: "Cybersecurity",
      description: "Protect systems and data from digital threats",
      icon: "🔒",
      relatedArticles: ["Cybersecurity Essentials for Developers"],
    },
  ];

  const itemsPerPage = 8;

  const nextSlide = (roadmaps) => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + itemsPerPage) % roadmaps.length
    );
  };

  const prevSlide = (roadmaps) => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - itemsPerPage + roadmaps.length) % roadmaps.length
    );
  };

  const RoadmapCarousel = ({ roadmaps }) => (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex flex-wrap transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
          }}
        >
          {roadmaps
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((roadmap, index) => (
              <div key={index} className="w-1/4 flex-shrink-0 px-2 mb-4">
                <Card className="h-full flex flex-col">
                  <CardHeader className="p-0">
                    <img
                      src={roadmap.image}
                      alt={roadmap.title}
                      className="w-full h-40 object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-4 flex-grow">
                    <CardTitle className="text-lg font-semibold mb-2">
                      {roadmap.title}
                    </CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {roadmap.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm">
                      Check Roadmap
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 shadow-md rounded-full"
        onClick={() => prevSlide(roadmaps)}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 shadow-md rounded-full"
        onClick={() => nextSlide(roadmaps)}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );

  const ArticleList = ({ articles }) => (
    <div className="space-y-4">
      {articles.map((article, index) => (
        <Card
          key={index}
          className="flex flex-col md:flex-row overflow-hidden h-auto"
        >
          <div className="flex-1 p-4">
            <CardTitle className="text-xl font-semibold mb-2">
              {article.title}
            </CardTitle>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {article.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-1">
              {article.badges.map((badge, badgeIndex) => (
                <Badge key={badgeIndex} variant="secondary">
                  {badge}
                </Badge>
              ))}
            </div>
            <div className="flex justify-end">
              <Button variant="outline">Read More</Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const TipsList = ({ tips, onSelectTopic }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tips.map((tip, index) => (
        <Card
          key={index}
          className="flex flex-col h-full cursor-pointer hover:shadow-lg transition-shadow duration-300"
          onClick={() => onSelectTopic(tip)}
        >
          <CardHeader>
            <div className="flex items-center space-x-2">
              <span className="text-4xl">{tip.icon}</span>
              <CardTitle>{tip.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {tip.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <Tabs defaultValue="roadmaps" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="roadmaps">Roadmaps</TabsTrigger>
          <TabsTrigger value="tips">Tips</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
        </TabsList>
        <TabsContent value="roadmaps">
          <div className="mb-4 flex justify-center space-x-4">
            <Button
              variant={selectedRoadmapType === "skill" ? "default" : "outline"}
              onClick={() => setSelectedRoadmapType("skill")}
            >
              Skill-based
            </Button>
            <Button
              variant={selectedRoadmapType === "role" ? "default" : "outline"}
              onClick={() => setSelectedRoadmapType("role")}
            >
              Role-based
            </Button>
          </div>
          <Separator className="my-4" />
          {selectedRoadmapType === "skill" ? (
            <RoadmapCarousel roadmaps={skillBasedRoadmaps} />
          ) : (
            <RoadmapCarousel roadmaps={roleBasedRoadmaps} />
          )}
        </TabsContent>
        <TabsContent value="tips">
          {selectedTipTopic ? (
            <div>
              <Button
                variant="ghost"
                onClick={() => setSelectedTipTopic(null)}
                className="mb-4"
              >
                ← Back to Topics
              </Button>
              <h2 className="text-2xl font-bold mb-4">
                {selectedTipTopic.title}
              </h2>
              <p className="mb-6">{selectedTipTopic.description}</p>
              <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
              <ArticleList
                articles={articles.filter((article) =>
                  selectedTipTopic.relatedArticles.includes(article.title)
                )}
              />
            </div>
          ) : (
            <TipsList tips={tipTopics} onSelectTopic={setSelectedTipTopic} />
          )}
        </TabsContent>
        <TabsContent value="articles">
          <ArticleList articles={articles} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
