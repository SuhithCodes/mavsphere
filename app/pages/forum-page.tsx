'use client'

import React, { useState } from 'react'
import { Send, ThumbsUp, MessageCircle, Share2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
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

export function ForumComponent() {
  const [postContent, setPostContent] = useState('')
  const [filter, setFilter] = useState('recent')
  const username = 'JohnDoe'

  const handlePost = () => {
    console.log('Posting:', postContent)
    setPostContent('')
  }

  const forumPosts = [
    { id: 1, author: 'Jane Smith', avatar: '/placeholder.svg?height=40&width=40', time: '2 hours ago', content: 'Just learned about CSS Grid and it\'s amazing! Any tips for mastering it?', hashtags: ['CSSGrid', 'WebDev'], likes: 15, comments: 3, shares: 2 },
    { id: 2, author: 'Mike Johnson', avatar: '/placeholder.svg?height=40&width=40', time: '4 hours ago', content: 'Looking for recommendations on the best JavaScript frameworks for building a large-scale web application. Any suggestions?', hashtags: ['JavaScript', 'WebFrameworks'], likes: 8, comments: 7, shares: 1 },
    { id: 3, author: 'Emily Brown', avatar: '/placeholder.svg?height=40&width=40', time: '1 day ago', content: 'Just published a blog post on "10 Essential VS Code Extensions for Web Developers". Check it out!', hashtags: ['VSCode', 'WebDevelopment'], likes: 32, comments: 12, shares: 5 },
    { id: 4, author: 'Alex Turner', avatar: '/placeholder.svg?height=40&width=40', time: '2 days ago', content: 'Having trouble with responsive design. Any recommended resources for mastering media queries?', hashtags: ['ResponsiveDesign', 'CSS'], likes: 10, comments: 8, shares: 0 },
  ]

  const sortPosts = (posts) => {
    switch (filter) {
      case 'liked':
        return [...posts].sort((a, b) => b.likes - a.likes)
      case 'commented':
        return [...posts].sort((a, b) => b.comments - a.comments)
      case 'recent':
      default:
        return posts // Assuming the original array is already sorted by recency
    }
  }

  const sortedPosts = sortPosts(forumPosts)

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Web Development Forum</h1>
        
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
            <h2 className="text-2xl font-semibold">Recent Activities</h2>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter topics" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="liked">Most Liked</SelectItem>
                <SelectItem value="commented">Most Commented</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Separator className="my-4" />
        </div>

        {/* Forum posts */}
        <div className="space-y-6">
          {sortedPosts.map((post) => (
            <Card key={post.id}>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarImage src={post.avatar} alt={post.author} />
                    <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">{post.author}</h3>
                      <span className="text-sm text-muted-foreground">{post.time}</span>
                    </div>
                    <p className="mb-2">{post.content}</p>
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
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        {post.shares} Shares
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}