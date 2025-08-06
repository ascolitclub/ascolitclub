"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  scrollToSection: (href: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center  overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full">
        <div className="w-full h-full bg-[url('/ascolitclub.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <span className="text-blue-400">ASCOL IT Club</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Where Passion Meets Innovation
            </p>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Join a community of tech enthusiasts, innovators, and future
              leaders shaping the digital world.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 text-lg shadow-lg shadow-blue-500/25 cursor-pointer"
              onClick={() => scrollToSection("#join")}
            >
              Join Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white hover:border-white hover:border-1 px-8 py-3 text-lg bg-transparent backdrop-blur-sm cursor-pointer"
              onClick={() => scrollToSection("#events")}
            >
              View Events
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform mb-1 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-blue-400" />
        </div>
      </div>
    </section>
  );
}
