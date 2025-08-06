"use client";

import { useState } from "react";
import { members, events, projects, achievements, navItems } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Menu, X, ChevronDown } from "lucide-react";

import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Events from "@/components/Events";
import Projects from "@/components/projects";
import Join from "@/components/Join";
import Contact from "@/components/Contact";
import Footer from "@/components/footer";

export default function ASCOLITClub() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const filterTypes = ["All", "Hackathon", "Workshop", "Meetup"];
  const filterYears = ["All", "2024", "2023"];

  const filteredEvents = events.filter((event) => {
    if (selectedFilter === "All") return true;
    return filterTypes.includes(selectedFilter)
      ? event.type === selectedFilter
      : event.year === selectedFilter;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar
        navItems={navItems}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />
      <Hero scrollToSection={scrollToSection} />
      <main>
        <About achievements={achievements} />
        <Team members={members} />
        <Events
          events={filteredEvents}
          filterTypes={filterTypes}
          filterYears={filterYears}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        {/* <Projects projects={projects} /> */}
        <Join />
        <Contact />
      </main>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
