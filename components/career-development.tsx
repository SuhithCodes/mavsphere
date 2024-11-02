"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import articles from "@/app/data/resources/career-development-page/articles.json";

interface Roadmap {
  id: number;
  title: string;
  description: string;
  type: string;
  category: string;
  link: string;
  download_link: string;
}

export default function CareerDevelopmentComponent() {
  const [selectedTipTopic, setSelectedTipTopic] = useState(null);
  const [skillBasedRoadmaps, setSkillBasedRoadmaps] = useState<Roadmap[]>([]);
  const [roleBasedRoadmaps, setRoleBasedRoadmaps] = useState<Roadmap[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoadmaps = async () => {
      try {
        const [skillResponse, roleResponse] = await Promise.all([
          fetch("/api/roadmaps?type=skill"),
          fetch("/api/roadmaps?type=role"),
        ]);

        if (!skillResponse.ok || !roleResponse.ok) {
          throw new Error("Failed to fetch roadmaps");
        }

        const skillData = await skillResponse.json();
        const roleData = await roleResponse.json();

        setSkillBasedRoadmaps(Array.isArray(skillData) ? skillData : []);
        setRoleBasedRoadmaps(Array.isArray(roleData) ? roleData : []);
      } catch (error) {
        console.error("Failed to fetch roadmaps:", error);
        setSkillBasedRoadmaps([]);
        setRoleBasedRoadmaps([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRoadmaps();
  }, []);

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

  const RoadmapTable = ({ roadmaps }: { roadmaps: Roadmap[] }) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {roadmaps.map((roadmap) => (
          <TableRow key={roadmap.id}>
            <TableCell className="font-medium">{roadmap.title}</TableCell>
            <TableCell>{roadmap.description}</TableCell>
            <TableCell>
              <div className="space-x-2">
                <Button size="sm" asChild>
                  <a
                    href={roadmap.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href={roadmap.download_link} download>
                    Download
                  </a>
                </Button>
              </div>
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
            {loading ? (
              <div className="flex justify-center py-8">
                <p>Loading roadmaps...</p>
              </div>
            ) : (
              <>
                <TabsContent value="skill">
                  <RoadmapTable roadmaps={skillBasedRoadmaps} />
                </TabsContent>
                <TabsContent value="role">
                  <RoadmapTable roadmaps={roleBasedRoadmaps} />
                </TabsContent>
              </>
            )}
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
