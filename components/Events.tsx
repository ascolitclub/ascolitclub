"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "lucide-react";

interface Event {
  title: string;
  date: string;
  type: string;
  year: string;
  image: string;
}

interface EventsProps {
  events: Event[];
  filterTypes: string[];
  filterYears: string[];
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
}

export default function Events({
  events,
  filterTypes,
  filterYears,
  selectedFilter,
  setSelectedFilter,
}: EventsProps) {
  return (
    <section id="events" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Past Events</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore our exciting journey through hackathons, workshops, and tech
            meetups that have shaped our community.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[...filterTypes, ...filterYears.slice(1)].map((filter) => (
            <Button
              key={filter}
              variant={selectedFilter === filter ? "default" : "outline"}
              onClick={() => setSelectedFilter(filter)}
              className={
                selectedFilter === filter
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : ""
              }
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-indigo-600">{event.type}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="space-y-4">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={800}
                    height={600}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 flex items-center mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </p>
                    <Badge className="bg-indigo-600 mb-4">{event.type}</Badge>
                    <p className="text-gray-700">
                      This was an amazing event where our community came
                      together to learn, innovate, and collaborate. The event
                      featured hands-on workshops, expert speakers, and
                      networking opportunities that helped participants grow
                      their skills and expand their professional network.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
