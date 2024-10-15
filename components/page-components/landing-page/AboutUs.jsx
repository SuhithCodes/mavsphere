import React from "react";
import { X } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import teamMembersData from "@/app/data/landing-page/team-members.json";

/**
 * @param {Object} props
 * @param {boolean} props.isOpen
 * @param {Function} props.onClose
 * @param {boolean} props.isDarkMode
 */
const AboutUs = ({ isOpen, onClose, isDarkMode }) => {
  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent
        className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-white"}`}
      >
        <DrawerHeader className="sticky top-0 z-10 backdrop-blur-md bg-opacity-90 bg-inherit">
          <div className="flex justify-between items-center">
            <DrawerTitle className="text-4xl font-bold">
              Team MavSphere
            </DrawerTitle>
            <DrawerClose asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <X className="h-8 w-8" />
              </Button>
            </DrawerClose>
          </div>
          <DrawerDescription
            className={`mt-4 text-xl font-semibold ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We aim to create a platform that connects students, professionals,
            and industry leaders to foster growth and collaboration in the tech
            community.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <AnimatePresence>
            <motion.div
              className="flex flex-wrap gap-4 pb-4 justify-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {teamMembersData.map((member, index) => (
                <motion.div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className={`h-full ${
                      isDarkMode ? "bg-gray-800 text-white" : "bg-gray-50"
                    } transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl`}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center">
                        <Avatar className="w-32 h-32 mb-4 border-4 border-primary">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback className="text-2xl font-bold">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <h4 className="text-2xl font-semibold mb-2">
                          {member.name}
                        </h4>
                        <p
                          className={`text-lg font-semibold ${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          } mb-2`}
                        >
                          {member.designation} • {member.experience}
                        </p>
                        <p className="text-base font-semibold text-center italic mb-4">
                          &quot;{member.quote}&quot;
                        </p>
                        <div className="flex space-x-4">
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary transition-colors"
                          >
                            <FaGithub className="h-6 w-6" />
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default AboutUs;
