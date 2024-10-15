"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function NavigationItems() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-2">
        {/* Home */}
        <NavigationMenuItem className="px-1">
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-3 md:w-[400px] lg:w-[500px]">
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="/"
                  >
                    <div className="text-sm font-medium leading-none">
                      Home Page
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Browse the recent activities across the various forums,
                      view featured profiles, and notifications of your
                      activities
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Networking */}
        <NavigationMenuItem className="px-1">
          <NavigationMenuTrigger>Networking</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-3 md:w-[400px] lg:w-[500px]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="/"
                  >
                    <div className="text-sm font-medium leading-none">
                      Private Messaging
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Talk to your mentors and your connections in a private
                      chat.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="/"
                  >
                    <div className="text-sm font-medium leading-none">
                      Group Chats
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Collaborate with others in topic-specific group chats.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="/"
                  >
                    <div className="text-sm font-medium leading-none">
                      Forums
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Engage in discussions on various topics in our community
                      forums.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Opportunities */}
        <NavigationMenuItem className="px-1">
          <NavigationMenuTrigger>Opportunities</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-3 md:w-[400px] lg:w-[500px]">
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="/"
                  >
                    <div className="text-sm font-medium leading-none">
                      Job Listings
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Browse and apply for job opportunities in your field.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="/"
                  >
                    <div className="text-sm font-medium leading-none">
                      Internship Listings
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Find internships to gain valuable experience in your
                      industry.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Resources */}
        <NavigationMenuItem className="px-1">
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-3 md:w-[400px] lg:w-[500px]">
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="/"
                  >
                    <div className="text-sm font-medium leading-none">
                      Career Development
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Access Articles, Tools and Tips to boost your career.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="/"
                  >
                    <div className="text-sm font-medium leading-none">
                      Mentorship Program
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Connect with experienced professionals for guidance and
                      support.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Event */}
        <NavigationMenuItem className="px-1">
          <NavigationMenuTrigger>Event</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-3 md:w-[400px] lg:w-[500px]">
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="/"
                  >
                    <div className="text-sm font-medium leading-none">
                      Events
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Access and List academic events and conferences
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
