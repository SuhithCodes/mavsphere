"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import the LeafletMap component to ensure it's only rendered on the client side
const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
});

/**
 * @param {Object} props
 * @param {string} props.eventName
 * @param {string[]} props.organizers
 * @param {string} props.address
 * @param {string} props.location
 */
export default function DialogCardsComponent({
  eventName,
  organizers,
  address,
  location,
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline">Contact Us</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0 z-40" />
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[800px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Title className="text-xl font-semibold">
              {eventName}
            </Dialog.Title>
            <div className="flex flex-col md:flex-row gap-4">
              <Card className="flex-1">
                <CardHeader>
                  <CardTitle>Event Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-4 mb-4">
                    <h3 className="text-lg font-semibold">Organizers</h3>
                    {organizers.map((organizer, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarFallback>{organizer.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span>{organizer}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">Address</h3>
                    <p className="text-base text-gray-500">{address}</p>
                  </div>

                  <div style={{ height: "200px", width: "100%" }}>
                    <h3 className="text-lg font-semibold mb-2">Location</h3>
                    <Suspense fallback={<div>Loading Map...</div>}>
                      <LeafletMap address={location} />
                    </Suspense>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex-1">
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Subject" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Your message" />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <Dialog.Close asChild>
              <button
                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
              >
                <X />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
