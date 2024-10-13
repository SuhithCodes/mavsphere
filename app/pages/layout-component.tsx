'use client'

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Search, ChevronDown, Home, MessageSquare, Users, Briefcase, Calendar, BookOpen, Settings, User, Moon, Sun, LogOut, ChevronRight, Bell, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

interface LayoutComponentProps {
  children: React.ReactNode
}

export function LayoutComponent({ children }: LayoutComponentProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isNetworkingOpen, setIsNetworkingOpen] = useState(false)
  const [isOpportunitiesOpen, setIsOpportunitiesOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('Home')
  const [breadcrumbs, setBreadcrumbs] = useState(['Home'])

  const navigate = useNavigate();
  
  const handleSettingClick = () => {
    updatePage('Settings');
    navigate('/settings');
  };
  const handleHomeClick = () => {
    updatePage('Home');
    navigate('/home');
  };
  const username = 'John Doe'

  useEffect(() => {
    // Check for user's preference in localStorage or system preference
    const savedMode = localStorage.getItem('darkMode')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    setIsDarkMode(savedMode === 'true' || (savedMode === null && prefersDark))
  }, [])

  useEffect(() => {
    // Apply dark mode to the document
    document.documentElement.classList.toggle('dark', isDarkMode)
    localStorage.setItem('darkMode', isDarkMode.toString())
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const updatePage = (page: string) => {
    setCurrentPage(page);

    if (page === "Home") {
      setBreadcrumbs(["Home"]);
    } else if (["Messaging", "Groups", "Forums"].includes(page)) {
      setBreadcrumbs(["Home", "Networking", page]);
    } else if (["Job Board", "Internship Board"].includes(page)) {
      setBreadcrumbs(["Home", "Opportunities", page]);
    } else if (["Career Development", "Mentorship Program"].includes(page)) {
      setBreadcrumbs(["Home", "Resources", page]);
    } else {
      setBreadcrumbs(["Home", page]);
    }
  };

  return (
    <div className={`flex h-screen bg-background text-foreground`}>
      {/* Collapsible Side Menu */}
      <aside className="w-64 bg-card shadow-lg">
        <nav className="p-4">
          <div className="flex items-center mb-6">
            <Sparkles className="h-6 w-6 mr-2" />
            <h1 className="text-3xl font-bold">MavSphere</h1>
          </div>
          <Separator className="my-4" />
          <ul className="space-y-2">
            <li>
              <Button
                variant={currentPage === 'Home' ? "secondary" : "ghost"}
                className="w-full justify-start py-4"
                onClick={handleHomeClick}
              >
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
            </li>
            <li>
              {/* <Collapsible open={isNetworkingOpen} onOpenChange={setIsNetworkingOpen}> */}
                {/* <CollapsibleTrigger asChild> */}
              <Button
                variant={['Messaging', 'Groups', 'Forums'].includes(currentPage) ? "secondary" : "ghost"}
                className="w-full justify-start py-4"
                onClick={() => navigate('/networking')}
              >
                <Users className="mr-2 h-4 w-4" />
                Networking
                {/* <ChevronDown className="ml-auto h-4 w-4" /> */}
              </Button>
                {/* </CollapsibleTrigger> */}
                {/* <CollapsibleContent className="pl-6 space-y-2"> */}
                  {/* <Button */}
                    {/* variant={currentPage === 'Messaging' ? "secondary" : "ghost"} */}
                    {/* className="w-full justify-start py-2" */}
                    {/* onClick={() => updatePage('Messaging')} */}
                  {/* > */}
                    {/* Messaging */}
                  {/* </Button> */}
                  {/* <Button */}
                    {/* variant={currentPage === 'Groups' ? "secondary" : "ghost"} */}
                    {/* className="w-full justify-start py-2" */}
                    {/* onClick={() => updatePage('Groups')} */}
                  {/* > */}
                    {/* Groups */}
                  {/* </Button> */}
                  {/* <Button */}
                    {/* variant={currentPage === 'Forums' ? "secondary" : "ghost"} */}
                    {/* className="w-full justify-start py-2" */}
                    {/* onClick={() => updatePage('Forums')} */}
                  {/* > */}
                    {/* Forums */}
                  {/* </Button> */}
                {/* </CollapsibleContent> */}
              {/* </Collapsible> */}
            </li>
            <li>
              {/* <Collapsible open={isOpportunitiesOpen} onOpenChange={setIsOpportunitiesOpen}> */}
                {/* <CollapsibleTrigger asChild> */}
                  <Button
                    variant={['Job Board', 'Internship Board'].includes(currentPage) ? "secondary" : "ghost"}
                    className="w-full justify-start py-4"
                    onClick={() => navigate('/opportunities')}
                  >
                    <Briefcase className="mr-2 h-4 w-4" />
                    Opportunities
                    {/* <ChevronDown className="ml-auto h-4 w-4" /> */}
                  </Button>
                {/* </CollapsibleTrigger> */}
                {/* <CollapsibleContent className="pl-6 space-y-2"> */}
                  {/* <Button */}
                    {/* variant={currentPage === 'Job Board' ? "secondary" : "ghost"} */}
                    {/* className="w-full justify-start py-2" */}
                    {/* onClick={() => updatePage('Job Board')} */}
                  {/* > */}
                    {/* Job Board */}
                  {/* </Button> */}
                  {/* <Button */}
                    {/* variant={currentPage === 'Internship Board' ? "secondary" : "ghost"} */}
                    {/* className="w-full justify-start py-2" */}
                    {/* onClick={() => updatePage('Internship Board')} */}
                  {/* > */}
                    {/* Internship Board */}
                  {/* </Button> */}
                {/* </CollapsibleContent> */}
              {/* </Collapsible> */}
            </li>
            <li>
              {/* <Collapsible open={isResourcesOpen} onOpenChange={setIsResourcesOpen}> */}
                {/* <CollapsibleTrigger asChild> */}
                  <Button
                    variant={['Career Development', 'Mentorship Program'].includes(currentPage) ? "secondary" : "ghost"}
                    className="w-full justify-start py-4"
                    onClick={() => navigate('/career-development')}
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    Resources
                    {/* <ChevronDown className="ml-auto h-4 w-4" /> */}
                  </Button>
                {/* </CollapsibleTrigger> */}
                {/* <CollapsibleContent className="pl-6 space-y-2"> */}
                  {/* <Button */}
                    {/* variant={currentPage === 'Career Development' ? "secondary" : "ghost"} */}
                    {/* className="w-full justify-start py-2" */}
                    {/* onClick={() => updatePage('Career Development')} */}
                  {/* > */}
                    {/* Career Development */}
                  {/* </Button> */}
                  {/* <Button */}
                    {/* variant={currentPage === 'Mentorship Program' ? "secondary" : "ghost"} */}
                    {/* className="w-full justify-start py-2" */}
                    {/* onClick={() => updatePage('Mentorship Program')} */}
                  {/* > */}
                    {/* Mentorship Program */}
                  {/* </Button> */}
                {/* </CollapsibleContent> */}
              {/* </Collapsible> */}
            </li>
            <li>
              <Button
                variant={currentPage === 'Events' ? "secondary" : "ghost"}
                className="w-full justify-start py-4"
                onClick={() => updatePage('Events')}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Events
              </Button>
            </li>
            <li>
              <Button
                variant={currentPage === 'Settings' ? "secondary" : "ghost"}
                className="w-full justify-start py-4"
                onClick={handleSettingClick}
              >
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top Menu */}
        <header className="sticky top-0 z-10 flex justify-between items-center p-4 bg-background shadow-md">
          <div>
            <div className="flex items-center space-x-2 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <ChevronRight className="h-4 w-4" />}
                  <span className={index === breadcrumbs.length - 1 ? 'font-semibold' : ''}>{crumb}</span>
                </React.Fragment>
              ))}
            </div>
            <h2 className="text-2xl font-semibold mt-1">
              {currentPage}
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <span className="text-sm font-medium">{username}</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt={username} />
                    <AvatarFallback>{username.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => navigate('/profile')}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/settings')}>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={toggleDarkMode}>
                  {isDarkMode ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
                  <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Render children (main content) */}
        {children}
      </main>
    </div>
  )
}