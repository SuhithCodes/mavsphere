"use client";

import "@/styles/networking-page.css";
import React, { useState } from "react";
import { MessageSquare, Users, Bell, Send, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function NetworkingPageComponent() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [networkingTab, setNetworkingTab] = useState("messaging");

  const chats = [
    {
      id: 1,
      name: "Alice Johnson",
      lastMessage: "Hey, how's your project going?",
      time: "10:30 AM",
      unread: 2,
    },
    {
      id: 2,
      name: "Bob Smith",
      lastMessage: "Can you help me with the AI model?",
      time: "Yesterday",
      unread: 0,
    },
    {
      id: 3,
      name: "Charlie Brown",
      lastMessage: "Thanks for your feedback!",
      time: "Monday",
      unread: 1,
    },
  ];

  const groups = [
    {
      id: 1,
      name: "React Developers",
      lastMessage: "Alice: Check out this new React hook!",
      time: "11:45 AM",
      unread: 5,
    },
    {
      id: 2,
      name: "AI Research Group",
      lastMessage: "Bob: Anyone going to the AI conference next month?",
      time: "Yesterday",
      unread: 2,
    },
    {
      id: 3,
      name: "Biology Study Group",
      lastMessage: "Charlie: Don't forget about tomorrow's lab session!",
      time: "Tuesday",
      unread: 0,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "Alice Johnson",
      content: "Hey, how's your project going?",
      time: "10:30 AM",
      isSent: false,
    },
    {
      id: 2,
      sender: "You",
      content: "It's going well! Just finished the main feature.",
      time: "10:32 AM",
      isSent: true,
    },
    {
      id: 3,
      sender: "Alice Johnson",
      content: "That's great! Can't wait to see it.",
      time: "10:33 AM",
      isSent: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="p-6">
        <Tabs
          defaultValue={networkingTab}
          className="w-full"
          onValueChange={(value) => setNetworkingTab(value)}
        >
          <TabsList className="w-full justify-start mb-4">
            <TabsTrigger value="messaging" className="flex-1">
              <MessageSquare className="mr-2 h-4 w-4" />
              Private
            </TabsTrigger>
            <TabsTrigger value="groups" className="flex-1">
              <Users className="mr-2 h-4 w-4" />
              Groups
            </TabsTrigger>
          </TabsList>
          <TabsContent value="messaging" className="border-none p-0">
            <div className="flex h-[calc(100vh-180px)] rounded-lg overflow-hidden shadow-lg">
              {/* Chat List */}
              <div className="w-1/3 border-r border-border bg-card">
                <div className="p-4 bg-muted">
                  <Input
                    type="text"
                    placeholder="Search or start new chat"
                    className="w-full bg-background"
                  />
                </div>
                <ScrollArea className="h-[calc(100vh-240px)]">
                  {chats.map((chat) => (
                    <div
                      key={chat.id}
                      className={`flex items-center p-3 cursor-pointer hover:bg-accent ${
                        selectedChat === chat.id ? "bg-accent" : ""
                      }`}
                      onClick={() => setSelectedChat(chat.id)}
                    >
                      <Avatar className="h-12 w-12 mr-3">
                        <AvatarImage
                          src={`/placeholder.svg?height=48&width=48&text=${chat.name.charAt(
                            0
                          )}`}
                          alt={chat.name}
                        />
                        <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold">{chat.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {chat.lastMessage}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">
                          {chat.time}
                        </p>
                        {chat.unread > 0 && (
                          <span className="inline-block bg-primary text-primary-foreground text-xs rounded-full px-2 py-1 mt-1">
                            {chat.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </div>

              {/* Chat Window */}
              <div className="flex-1 flex flex-col bg-background">
                {selectedChat ? (
                  <>
                    {/* Chat Header */}
                    <div className="p-4 flex items-center justify-between bg-card">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage
                            src={`/placeholder.svg?height=40&width=40&text=${chats
                              .find((c) => c.id === selectedChat)
                              ?.name.charAt(0)}`}
                            alt={chats.find((c) => c.id === selectedChat)?.name}
                          />
                          <AvatarFallback>
                            {chats
                              .find((c) => c.id === selectedChat)
                              ?.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <h3 className="font-semibold">
                          {chats.find((c) => c.id === selectedChat)?.name}
                        </h3>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Bell className="h-5 w-5" />
                      </Button>
                    </div>

                    {/* Messages */}
                    <ScrollArea className="flex-1 p-4 bg-muted">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`mb-4 ${
                            message.isSent ? "text-right" : "text-left"
                          }`}
                        >
                          <div
                            className={`inline-block p-3 rounded-lg ${
                              message.isSent
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary text-secondary-foreground"
                            }`}
                          >
                            <p>{message.content}</p>
                            <p className="text-xs mt-1 opacity-70">
                              {message.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </ScrollArea>

                    {/* Message Input */}
                    <div className="p-4 bg-card">
                      <div className="flex items-center">
                        <Button variant="ghost" size="icon" className="mr-2">
                          <Paperclip className="h-5 w-5" />
                        </Button>
                        <Input
                          type="text"
                          placeholder="Type a message"
                          className="flex-1 mr-2 bg-background"
                        />
                        <Button>
                          <Send className="h-4 w-4 mr-2" />
                          Send
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-xl text-muted-foreground">
                      Select a chat to start messaging
                    </p>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="groups" className="border-none p-0">
            <div className="flex h-[calc(100vh-180px)] rounded-lg overflow-hidden shadow-lg">
              {/* Group List */}
              <div className="w-1/3 border-r border-border bg-card">
                <div className="p-4 bg-muted">
                  <Input
                    type="text"
                    placeholder="Search groups"
                    className="w-full bg-background"
                  />
                </div>
                <ScrollArea className="h-[calc(100vh-240px)]">
                  {groups.map((group) => (
                    <div
                      key={group.id}
                      className={`flex items-center p-3 cursor-pointer hover:bg-accent ${
                        selectedGroup === group.id ? "bg-accent" : ""
                      }`}
                      onClick={() => setSelectedGroup(group.id)}
                    >
                      <Avatar className="h-12 w-12 mr-3">
                        <AvatarImage
                          src={`/placeholder.svg?height=48&width=48&text=${group.name.charAt(
                            0
                          )}`}
                          alt={group.name}
                        />
                        <AvatarFallback>{group.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold">{group.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {group.lastMessage}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">
                          {group.time}
                        </p>
                        {group.unread > 0 && (
                          <span className="inline-block bg-primary text-primary-foreground text-xs rounded-full px-2 py-1 mt-1">
                            {group.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </div>

              {/* Group Chat Window */}
              <div className="flex-1 flex flex-col bg-background">
                {selectedGroup ? (
                  <>
                    {/* Group Chat Header */}
                    <div className="p-4 flex items-center justify-between bg-card">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage
                            src={`/placeholder.svg?height=40&width=40&text=${groups
                              .find((g) => g.id === selectedGroup)
                              ?.name.charAt(0)}`}
                            alt={
                              groups.find((g) => g.id === selectedGroup)?.name
                            }
                          />
                          <AvatarFallback>
                            {groups
                              .find((g) => g.id === selectedGroup)
                              ?.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <h3 className="font-semibold">
                          {groups.find((g) => g.id === selectedGroup)?.name}
                        </h3>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Bell className="h-5 w-5" />
                      </Button>
                    </div>

                    {/* Group Messages */}
                    <ScrollArea className="flex-1 p-4 bg-muted">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`mb-4 ${
                            message.isSent ? "text-right" : "text-left"
                          }`}
                        >
                          <div
                            className={`inline-block p-3 rounded-lg ${
                              message.isSent
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary text-secondary-foreground"
                            }`}
                          >
                            <p className="font-semibold">{message.sender}</p>
                            <p>{message.content}</p>
                            <p className="text-xs mt-1 opacity-70">
                              {message.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </ScrollArea>

                    {/* Group Message Input */}
                    <div className="p-4 bg-card">
                      <div className="flex items-center">
                        <Button variant="ghost" size="icon" className="mr-2">
                          <Paperclip className="h-5 w-5" />
                        </Button>
                        <Input
                          type="text"
                          placeholder="Type a message"
                          className="flex-1 mr-2 bg-background"
                        />
                        <Button>
                          <Send className="h-4 w-4 mr-2" />
                          Send
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-xl text-muted-foreground">
                      Select a group to start chatting
                    </p>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
