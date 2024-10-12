'use client'

import React, { useState } from 'react'
import { ThumbsUp, MessageCircle, Send, UserPlus, Briefcase, Calendar, Mail, Users, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function HomePageContent() {
  const [postContent, setPostContent] = useState('')
  const username = 'JohnDoe'

  const handlePost = () => {
    console.log('Posting:', postContent)
    setPostContent('')
  }

  const samplePosts = [
    { id: 1, author: 'Jane Smith', avatar: '/placeholder.svg?height=40&width=40', time: '2 hours ago', content: 'Just finished an amazing workshop on AI ethics!', hashtags: ['AIEthics', 'TechForGood'], likes: 15, comments: 3 },
    { id: 2, author: 'Mike Johnson', avatar: '/placeholder.svg?height=40&width=40', time: '4 hours ago', content: 'Looking for study partners for the upcoming coding bootcamp. Anyone interested?', hashtags: ['CodingBootcamp', 'StudyGroup'], likes: 8, comments: 7 },
    { id: 3, author: 'Emily Brown', avatar: '/placeholder.svg?height=40&width=40', time: '1 day ago', content: 'Excited to announce that I\'ll be speaking at the Tech Conference next month!', hashtags: ['PublicSpeaking', 'TechConference'], likes: 32, comments: 12 },
    { id: 4, author: 'Alex Turner', avatar: '/placeholder.svg?height=40&width=40', time: '2 days ago', content: 'Check out this amazing view from our team building event!', hashtags: ['TeamBuilding', 'OfficeLife'], image: '/placeholder.svg?height=400&width=600&text=Team+Building+Event', likes: 45, comments: 18 },
  ]

  const featuredProfiles = [
    { name: 'Alex Turner', title: 'Software Engineer', avatar: '/placeholder.svg?height=40&width=40' },
    { name: 'Sophia Lee', title: 'UX Designer', avatar: '/placeholder.svg?height=40&width=40' },
    { name: 'David Chen', title: 'Data Scientist', avatar: '/placeholder.svg?height=40&width=40' },
  ]

  const notifications = [
    { id: 1, icon: <Briefcase className="h-4 w-4" />, content: 'New job posting: Frontend Developer', time: '1 hour ago' },
    { id: 2, icon: <Calendar className="h-4 w-4" />, content: 'Event reminder: AI Workshop tomorrow', time: '3 hours ago' },
    { id: 3, icon: <Mail className="h-4 w-4" />, content: '3 new messages in your inbox', time: '5 hours ago' },
    { id: 4, icon: <Users className="h-4 w-4" />, content: 'Sarah Johnson accepted your connection request', time: '1 day ago' },
    { id: 5, icon: <Globe className="h-4 w-4" />, content: 'New article: "The Future of AI in Education"', time: '2 days ago' },
  ]

  return (
    <div className="min-h-screen p-6 flex overflow-hidden"> {/* Set min-height and enable overflow */}
      <div className="flex-grow max-w-3xl mx-auto flex flex-col"> {/* Center the main content */}
        {/* What's on your mind? */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt={username} />
                <AvatarFallback>{username.charAt(0)}</AvatarFallback>
              </Avatar>
              <Input
                placeholder="What's on your mind?"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                className="flex-grow"
              />
              <Button onClick={handlePost}>
                <Send className="h-4 w-4 mr-2" />
                Post
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Recent Activities</h3>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select your interests" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Activities</SelectItem>
                <SelectItem value="tech">Technology</SelectItem>
                <SelectItem value="career">Career</SelectItem>
                <SelectItem value="networking">Networking</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Separator className="my-4" />
        </div>

        {/* Main content with sample posts */}
        <div className="space-y-6"> {/* Removed scroll effect */}
          {samplePosts.map((post) => (
            <Card key={post.id}>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarImage src={post.avatar} alt={post.author} />
                    <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">{post.author}</h4>
                      <span className="text-sm text-gray-500">{post.time}</span>
                    </div>
                    <p className="mb-2">{post.content}</p>
                    {post.image && (
                      <img src={post.image} alt="Post image" className="w-full h-auto rounded-lg mb-4" />
                    )}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {post.hashtags.map((tag, index) => (
                        <Badge key={index} variant="secondary">#{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="sm">
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        {post.likes} Likes
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        {post.comments} Comments
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Right sidebar */}
      <div className="sticky top-0 w-80 flex-shrink-0"> {/* Prevent sidebar from shrinking */}
        {/* Notifications */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {notifications.map((notification) => (
                <li key={notification.id} className="flex items-start space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md transition-colors duration-200">
                  <div className="p-2 rounded-full bg-gray-200">
                    {notification.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">{notification.content}</p>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Featured Profiles */}
        <Card>
          <CardHeader>
            <CardTitle>Featured Profiles</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {featuredProfiles.map((profile, index) => (
                <li key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage src={profile.avatar} alt={profile.name} />
                      <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{profile.name}</p>
                      <p className="text-sm text-gray-500">{profile.title}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <UserPlus className="h-4 w-4" />
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
