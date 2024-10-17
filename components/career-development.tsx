"use client";

import React, { useState } from "react";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function CareerDevelopmentComponent() {
  const [selectedTipTopic, setSelectedTipTopic] = useState(null);

  const skillBasedRoadmaps = [
    {
      title: "Software Engineering",
      description: "Master the art of coding and system design",
    },
    {
      title: "Data Science",
      description: "Learn to analyze and interpret complex data",
    },
    {
      title: "Digital Marketing",
      description: "Develop skills in online promotion and analytics",
    },
    {
      title: "UX/UI Design",
      description: "Create intuitive and beautiful user interfaces",
    },
    {
      title: "Cloud Computing",
      description: "Build and manage scalable cloud infrastructure",
    },
    {
      title: "Cybersecurity",
      description: "Protect systems and networks from digital attacks",
    },
    {
      title: "Artificial Intelligence",
      description: "Develop intelligent systems and machine learning models",
    },
    {
      title: "Blockchain Development",
      description: "Build decentralized applications and smart contracts",
    },
    {
      title: "IoT Development",
      description: "Create connected devices and systems",
    },
    {
      title: "Game Development",
      description: "Design and build interactive gaming experiences",
    },
  ];

  const roleBasedRoadmaps = [
    {
      title: "Frontend Developer",
      description:
        "Build interactive user interfaces with modern web technologies",
    },
    {
      title: "Backend Developer",
      description: "Design and implement server-side logic and databases",
    },
    {
      title: "Data Analyst",
      description:
        "Extract insights from complex datasets to drive business decisions",
    },
    {
      title: "Android Developer",
      description: "Create native mobile applications for the Android platform",
    },
    {
      title: "DevOps Engineer",
      description: "Streamline development and deployment processes",
    },
    {
      title: "Machine Learning Engineer",
      description: "Develop AI models and intelligent systems",
    },
    {
      title: "iOS Developer",
      description: "Build applications for Apple's mobile platform",
    },
    {
      title: "Full Stack Developer",
      description: "Handle both frontend and backend development",
    },
    {
      title: "Cloud Architect",
      description: "Design and oversee cloud computing strategies",
    },
    {
      title: "Data Scientist",
      description:
        "Apply statistical and mathematical models to solve complex problems",
    },
  ];

  const articles = [
    {
      title: "The Future of AI in Software Development",
      description:
        "Explore how artificial intelligence is reshaping the landscape of software development and what it means for developers.",
      badges: ["AI", "Software Development", "Future Tech"],
    },
    {
      title: "Mastering React Hooks",
      description:
        "A comprehensive guide to using React Hooks effectively in your projects.",
      badges: ["React", "Frontend", "Web Development"],
    },
    {
      title: "DevOps Best Practices for 2023",
      description:
        "Learn the latest DevOps strategies to improve your development workflow and deployment processes.",
      badges: ["DevOps", "CI/CD", "Automation"],
    },
    {
      title: "Introduction to Quantum Computing",
      description:
        "Dive into the basics of quantum computing and its potential impact on the tech industry.",
      badges: ["Quantum Computing", "Future Tech", "Computer Science"],
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
  ];

  const RoadmapTable = ({ roadmaps }) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {roadmaps.map((roadmap, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{roadmap.title}</TableCell>
            <TableCell>{roadmap.description}</TableCell>
            <TableCell>
              <Button size="sm">Check Roadmap</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
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
          <TabsTrigger value="roadmaps">Roadmap Tool</TabsTrigger>
          <TabsTrigger value="tips">Tips</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
        </TabsList>
        <TabsContent value="roadmaps">
          <Tabs defaultValue="skill">
            <TabsList className="mb-4">
              <TabsTrigger value="skill">Skill-based</TabsTrigger>
              <TabsTrigger value="role">Role-based</TabsTrigger>
            </TabsList>
            <TabsContent value="skill">
              <RoadmapTable roadmaps={skillBasedRoadmaps} />
            </TabsContent>
            <TabsContent value="role">
              <RoadmapTable roadmaps={roleBasedRoadmaps} />
            </TabsContent>
          </Tabs>
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
