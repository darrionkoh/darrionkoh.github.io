import React, { useState, useEffect } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const PROJECTS = [
  {
    title: "IsMyHawkerOpen",
    description: "Real-time status tracker for SG hawker centres. Built with React and GovTech's datasets to save you from wasted trips.",
    link: "https://is-my-hawker-open.vercel.app/",
    emoji: "🍜",
    color: "bg-violet-600",
    textColor: "text-violet-100"
  },
  {
    title: "Jio!",
    description: "A clean and simple going-out toolkit for Singaporeans. Features a bill splitter with local tax logic, GST calculator, and more.",
    link: "https://darrion-jio.vercel.app/",
    emoji: "🧾",
    color: "bg-emerald-600",
    textColor: "text-emerald-100"
  }
];

export default function FeaturedProject() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextProject = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevProject = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const project = PROJECTS[currentIndex];

  return (
    <div className="md:col-span-2 relative group h-full">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${project.color} p-8 rounded-[2rem] text-white relative overflow-hidden cursor-pointer block h-full transition-colors duration-500`}
      >
        <div className="relative z-10">
          <div className="flex justify-between items-start">
            <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white">
              Featured Project ({currentIndex + 1}/{PROJECTS.length})
            </span>
            <ExternalLink
              size={24}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-white">
            {project.title}
          </h2>
          <p className={`mt-2 ${project.textColor} max-w-[280px]`}>
            {project.description}
          </p>
        </div>

        <div className="absolute -bottom-4 -right-4 text-9xl opacity-20 group-hover:scale-110 transition-transform select-none">
          {project.emoji}
        </div>
      </a>

      {/* Slider Controls */}
      <div className="absolute bottom-8 left-8 z-20 flex gap-2">
        <button 
          onClick={prevProject}
          className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
          aria-label="Previous project"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextProject}
          className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
          aria-label="Next project"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}