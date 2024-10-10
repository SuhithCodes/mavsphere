"use client";

import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  Home,
  Users,
  Briefcase,
  Calendar,
  BookOpen,
  Settings,
  User,
  Moon,
  Sun,
  LogOut,
  ChevronRight,
  Bell,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface LayoutComponentProps {
  children: React.ReactNode;
}

const MenuItem: React.FC<{
  isActive: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  isCollapsible?: boolean;
  children?: React.ReactNode;
}> = ({ isActive, onClick, icon, label, isCollapsible, children }) => (
  <li>
    {isCollapsible ? (
      <Collapsible>
        <CollapsibleTrigger asChild>
          <Button
            variant={isActive ? "secondary" : "ghost"}
            className={`w-full justify-start py-4 text-lg ${
              isActive ? "hover:bg-gray-700" : "hover:bg-gray-200"
            }`}
          >
            {icon}
            {label}
            <ChevronDown className="ml-auto h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-6 space-y-2">
          {children}
        </CollapsibleContent>
      </Collapsible>
    ) : (
      <Button
        variant={isActive ? "secondary" : "ghost"}
        className={`w-full justify-start py-4 text-lg ${
          isActive ? "hover:bg-gray-700" : "hover:bg-gray-200"
        }`}
        onClick={onClick}
      >
        {icon}
        {label}
      </Button>
    )}
  </li>
);

export function LayoutComponent({ children }: LayoutComponentProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");
  const [breadcrumbs, setBreadcrumbs] = useState(["Home"]);

  const username = "John Doe";

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const updatePage = (page: string) => {
    setCurrentPage(page);
    setBreadcrumbs(page === "Home" ? ["Home"] : ["Home", page]);
  };

  return (
    <div
      className={`flex h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Collapsible Side Menu */}
      <aside
        className={`w-64 ${
          isDarkMode ? "bg-gray-800" : "bg-gray-100"
        } shadow-lg`}
      >
        <nav className="p-4">
          <div className="flex items-center mb-6">
            <Sparkles className="h-6 w-6 mr-2" />
            <h1
              className={`text-3xl font-bold ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              MavSphere
            </h1>
          </div>
          <Separator className="my-4" />
          <ul className="space-y-2">
            <MenuItem
              isActive={currentPage === "Home"}
              onClick={() => updatePage("Home")}
              icon={<Home className="mr-2 h-4 w-4" />}
              label="Home"
            />
            <MenuItem
              isActive={["Messaging", "Groups", "Forums"].includes(currentPage)}
              icon={<Users className="mr-2 h-4 w-4" />}
              label="Networking"
              isCollapsible
            >
              <MenuItem
                isActive={currentPage === "Messaging"}
                onClick={() => updatePage("Messaging")}
                icon={null}
                label="Messaging"
              />
              <MenuItem
                isActive={currentPage === "Groups"}
                onClick={() => updatePage("Groups")}
                icon={null}
                label="Groups"
              />
              <MenuItem
                isActive={currentPage === "Forums"}
                onClick={() => updatePage("Forums")}
                icon={null}
                label="Forums"
              />
            </MenuItem>
            <MenuItem
              isActive={["Job Board", "Internship Board"].includes(currentPage)}
              icon={<Briefcase className="mr-2 h-4 w-4" />}
              label="Opportunities"
              isCollapsible
            >
              <MenuItem
                isActive={currentPage === "Job Board"}
                onClick={() => updatePage("Job Board")}
                icon={null}
                label="Job Board"
              />
              <MenuItem
                isActive={currentPage === "Internship Board"}
                onClick={() => updatePage("Internship Board")}
                icon={null}
                label="Internship Board"
              />
            </MenuItem>
            <MenuItem
              isActive={currentPage === "Events"}
              onClick={() => updatePage("Events")}
              icon={<Calendar className="mr-2 h-4 w-4" />}
              label="Events"
            />
            <MenuItem
              isActive={currentPage === "Settings"}
              onClick={() => updatePage("Settings")}
              icon={<Settings className="mr-2 h-4 w-4" />}
              label="Settings"
            />
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top Menu */}
        <header
          className={`flex justify-between items-center p-4 ${
            isDarkMode ? "bg-gray-800" : "bg-gray-100"
          } shadow-md`}
        >
          <div>
            <div className="flex items-center space-x-2 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <ChevronRight className="h-4 w-4" />}
                  <span
                    className={
                      index === breadcrumbs.length - 1 ? "font-semibold" : ""
                    }
                  >
                    {crumb}
                  </span>
                </React.Fragment>
              ))}
            </div>
            <h2
              className={`text-3xl font-semibold mt-1 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              {currentPage}
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search..."
                className={`pl-10 pr-4 py-2 rounded-full border ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600"
                    : "bg-white border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <span
              className={`text-sm font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {username}
            </span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="/placeholder.svg?height=32&width=32"
                      alt={username}
                    />
                    <AvatarFallback>{username.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className={
                  isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
                }
              >
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={toggleDarkMode}>
                  {isDarkMode ? (
                    <Sun className="mr-2 h-4 w-4" />
                  ) : (
                    <Moon className="mr-2 h-4 w-4" />
                  )}
                  <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
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
        <div className="p-4">{children}</div>
      </main>
    </div>
  );
}
