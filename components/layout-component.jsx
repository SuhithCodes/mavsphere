"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import {
  Search,
  ChevronDown,
  Home,
  Network,
  Calendar,
  BookOpen,
  Settings,
  User,
  Moon,
  Sun,
  LogOut,
  ChevronRight,
  ChevronLeftCircle,
  ChevronRightCircle,
  ListCheck,
} from "lucide-react";
import { GiCosmicEgg } from "react-icons/gi";
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
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useRouter, usePathname } from "next/navigation";

export default function LayoutComponent({ children, childPage }) {
  const { data: session, status } = useSession();
  const username = session?.user?.username || "Guest";

  // Add loading state handling
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [openCollapsible, setOpenCollapsible] = useState(null);
  const [currentPage, setCurrentPage] = useState(childPage || "Home");
  const [breadcrumbs, setBreadcrumbs] = useState(["Home"]);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(savedMode === "true" || (savedMode === null && prefersDark));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const updatePage = (page) => {
    setCurrentPage(page);

    if (page === "Home") {
      setBreadcrumbs(["Home"]);
    } else if (["Messaging", "Forums"].includes(page)) {
      setBreadcrumbs(["Home", "Networking", page]);
    } else if (["Job Board", "Internship Board"].includes(page)) {
      setBreadcrumbs(["Home", "Opportunities", page]);
    } else if (["Career Development", "Mentorship Program"].includes(page)) {
      setBreadcrumbs(["Home", "Resources", page]);
    } else {
      setBreadcrumbs(["Home", page]);
    }
  };

  const handlePageClick = (pageName, path) => {
    updatePage(pageName);
    router.push(path);
  };

  const handleCollapsibleChange = (collapsibleName) => {
    setOpenCollapsible((prev) =>
      prev === collapsibleName ? null : collapsibleName
    );
  };

  const isSelected = (page) => {
    return (
      currentPage === page ||
      (openCollapsible === "Networking" &&
        ["Messaging", "Forums"].includes(page)) ||
      (openCollapsible === "Opportunities" &&
        ["Job Board", "Internship Board"].includes(page)) ||
      (openCollapsible === "Resources" &&
        ["Career Development", "Mentorship Program"].includes(page))
    );
  };

  const renderSidebarItem = (icon, label, onClick, isOpen) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <>
            <Button
              variant={isSelected(label) ? "secondary" : "ghost"}
              className={`w-full justify-start py-6 ${
                isSelected(label) ? "bg-primary/10" : ""
              } ${isSidebarCollapsed ? "px-0" : ""}`}
              onClick={onClick}
            >
              {React.cloneElement(icon, {
                className: `h-5 w-5 ${isSidebarCollapsed ? "" : "mr-2"}`,
              })}
              {!isSidebarCollapsed && (
                <>
                  <span className="font-semibold">{label}</span>
                  {isOpen !== undefined && (
                    <ChevronDown
                      className={`ml-auto h-4 w-6 transition-transform duration-200 ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  )}
                </>
              )}
            </Button>
          </>
        </TooltipTrigger>
      </Tooltip>
    </TooltipProvider>
  );

  // Update breadcrumbs when the page changes
  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/home") {
      updatePage("Home");
    } else if (path.startsWith("/networking/messaging")) {
      updatePage("Messaging");
    } else if (path.startsWith("/networking/forums")) {
      updatePage("Forums");
    } else if (path.startsWith("/opportunities")) {
      updatePage("Opportunities");
    } else if (path.startsWith("/resources/career-development")) {
      updatePage("Career Development");
    } else if (path.startsWith("/resources/mentorship-program")) {
      updatePage("Mentorship Program");
    } else if (path.startsWith("/events")) {
      updatePage("Events");
    } else if (path.startsWith("/settings")) {
      updatePage("Settings");
    }
  }, [pathname]);

  // Add this temporary debugging
  useEffect(() => {
    console.log("Session Status:", status);
    console.log("Session Data:", session);
  }, [session, status]);

  return (
    <div className={`flex h-screen bg-background text-foreground`}>
      {/* Collapsible Side Menu */}
      <aside
        className={`bg-card shadow-lg transition-all duration-300 flex flex-col ${
          isSidebarCollapsed ? "w-16" : "w-64"
        }`}
      >
        <nav className="p-4 flex-grow">
          <div
            className={`flex items-center mb-6.5 ${
              isSidebarCollapsed ? "justify-center" : "justify-between"
            }`}
          >
            {/* Always Render Cosmic Egg Icon */}
            <GiCosmicEgg className="h-12 w-14 text-primary" />
            {/* Conditionally Render Title */}
            {!isSidebarCollapsed && (
              <h1 className="text-3xl font-bold ml-1">MavSphere</h1>
            )}
          </div>
          <Separator className="my-6" />
          <ul className="space-y-4 flex-grow">
            <li>
              {renderSidebarItem(<Home />, "Home", () =>
                handlePageClick("Home", "/home")
              )}
            </li>
            <li>
              <Collapsible
                open={openCollapsible === "Networking"}
                onOpenChange={() => handleCollapsibleChange("Networking")}
              >
                <CollapsibleTrigger asChild>
                  {renderSidebarItem(
                    <Network />,
                    "Networking",
                    () => handleCollapsibleChange("Networking"),
                    openCollapsible === "Networking"
                  )}
                </CollapsibleTrigger>
                {!isSidebarCollapsed && (
                  <CollapsibleContent className="pl-6 space-y-2 overflow-hidden transition-all duration-300">
                    <Button
                      variant={isSelected("Messaging") ? "secondary" : "ghost"}
                      className={`w-full justify-start py-2 ${
                        isSelected("Messaging") ? "bg-primary/0" : ""
                      }`}
                      onClick={() =>
                        handlePageClick("Messaging", "/networking/messaging")
                      }
                    >
                      <span className="font-medium">Messaging</span>
                    </Button>
                    <Button
                      variant={isSelected("Forums") ? "secondary" : "ghost"}
                      className={`w-full justify-start py-2 ${
                        isSelected("Forums") ? "bg-primary/0" : ""
                      }`}
                      onClick={() =>
                        handlePageClick("Forums", "/networking/forums")
                      }
                    >
                      <span className="font-medium">Forums</span>
                    </Button>
                  </CollapsibleContent>
                )}
              </Collapsible>
            </li>
            <li>
              <Collapsible
                open={openCollapsible === "Resources"}
                onOpenChange={() => handleCollapsibleChange("Resources")}
              >
                <CollapsibleTrigger asChild>
                  {renderSidebarItem(
                    <BookOpen />,
                    "Resources",
                    () => handleCollapsibleChange("Resources"),
                    openCollapsible === "Resources"
                  )}
                </CollapsibleTrigger>
                {!isSidebarCollapsed && (
                  <CollapsibleContent className="pl-6 space-y-2 overflow-hidden transition-all duration-300">
                    <Button
                      variant={
                        isSelected("Career Development") ? "secondary" : "ghost"
                      }
                      className={`w-full justify-start py-2 ${
                        isSelected("Career Development") ? "bg-primary/0" : ""
                      }`}
                      onClick={() =>
                        handlePageClick(
                          "Career Development",
                          "/resources/career-development"
                        )
                      }
                    >
                      <span className="font-medium">Career Development</span>
                    </Button>
                    <Button
                      variant={
                        isSelected("Mentorship Program") ? "secondary" : "ghost"
                      }
                      className={`w-full justify-start py-2 ${
                        isSelected("Mentorship Program") ? "bg-primary/0" : ""
                      }`}
                      onClick={() =>
                        handlePageClick(
                          "Mentorship Program",
                          "/resources/mentorship-program"
                        )
                      }
                    >
                      <span className="font-medium">Mentorship Program</span>
                    </Button>
                  </CollapsibleContent>
                )}
              </Collapsible>
            </li>
            <li>
              {renderSidebarItem(<ListCheck />, "Opportunities", () =>
                handlePageClick("Opportunities", "/opportunities")
              )}
            </li>
            <li>
              {renderSidebarItem(<Calendar />, "Events", () =>
                handlePageClick("Events", "/events")
              )}
            </li>
            <li>
              {renderSidebarItem(<Settings />, "Settings", () =>
                handlePageClick("Settings", "/settings")
              )}
            </li>
          </ul>
        </nav>

        {/* Toggle Sidebar Button */}
        <Button
          variant="ghost"
          className="flex items-center justify-center h-14 w-full"
          onClick={toggleSidebar}
        >
          {isSidebarCollapsed ? (
            <ChevronRightCircle className="h-6 w-6" />
          ) : (
            <ChevronLeftCircle className="h-6 w-6" />
          )}
        </Button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top Menu */}
        <header className="sticky top-0 z-10 bg-background shadow-sm border-b border-border">
          <div className="flex justify-between items-center p-6">
            <div className="flex items-center space-x-2 text-base font-semibold">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <ChevronRight className="h-4 w-4" />}
                  <span>{crumb}</span>
                </React.Fragment>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                  size={20}
                />
              </div>
              <span className="text-sm font-medium">{username}</span>
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
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={() => handlePageClick("Profile", "/profile")}
                  >
                    <User className="mr-2 h-5 w-5" /> Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handlePageClick("Settings", "/settings")}
                  >
                    <Settings className="mr-2 h-5 w-5" /> Settings
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
                  <DropdownMenuItem onClick={() => console.log("Logging out")}>
                    <LogOut className="mr-2 h-5 w-5" /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
        {/* Render children (main content) */}
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
