import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

export default function ProjectArchive() {
    const [isOpen, setIsOpen] = useState(false);
    const [showStatus, setShowStatus] = useState(false);

    const projects = [
        {
            name: "Jio!",
            desc: "A clean going-out toolkit for Singaporeans. Features a smart bill splitter, GST/Service charge calculator, shared event calendar, and debt tracker.",
            tech: ["JavaScript", "Supabase", "HTML5 & CSS3"],
            link: "https://darrion-jio.vercel.app/",
            github: "https://github.com/darrionkoh/jio",
            status: "Live"
        },
        {
            name: "IsMyHawkerOpen",
            desc: "A real-time status tracker for Singapore's hawker centers using GovTech's datasets.",
            tech: ["React", "Leaflet", "Tailwind"],
            link: "https://is-my-hawker-open.vercel.app",
            github: "https://github.com/darrionkoh/IsMyHawkerOpen",
            status: "Live"
        },
        {
            name: "This Portfolio!",
            desc: "A Bento-style personal archive and showcase for my growth.",
            tech: ["Vite", "React", "Tailwind"],
            link: "https://darrionkoh.github.io/",
            github: "https://github.com/darrionkoh/darrionkoh.github.io",
            status: "Source"
        }
    ];

    const handleTrigger = () => {
        setShowStatus(true);
        setTimeout(() => {
            setIsOpen(true);
            setShowStatus(false);
        }, 800);
    };

    return (
        <>
            <div
                onClick={handleTrigger}
                className="md:col-span-2 bg-white p-8 rounded-[2rem] border border-zinc-200 shadow-sm flex items-center justify-between group cursor-pointer hover:border-zinc-300 transition-all relative overflow-visible"
            >
                <div>
                    <h3 className="text-xl font-bold text-zinc-900">Project Archive</h3>
                    <p className="text-zinc-500 text-sm">Check out the workshop!</p>
                </div>

                <div className="relative">
                    <div className={`bg-zinc-100 w-12 h-12 flex items-center justify-center rounded-full transition-all text-xl font-bold ${showStatus ? "bg-violet-600 text-white" : "group-hover:bg-violet-600 group-hover:text-white"}`}>
                        {showStatus ? (
                            <div className="relative w-5 h-5">
                                <div className="absolute inset-0 border-2 border-zinc-100 rounded-full"></div>
                                <div className="absolute inset-0 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        ) : (
                            "→"
                        )}
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-zinc-900/60 backdrop-blur-md animate-in fade-in duration-300"
                        onClick={() => setIsOpen(false)}
                    />

                    <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in fade-in duration-300">
                        <div className="p-8 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50">
                            <div>
                                <h2 className="text-2xl font-black tracking-tight text-zinc-900">Project Archive</h2>
                                <p className="text-zinc-500 text-sm">Full list of my technical builds.</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-3 bg-white border border-zinc-200 rounded-full hover:bg-zinc-50 transition-colors shadow-sm"
                            >
                                <FaTimes size={20} className="text-zinc-500" />
                            </button>
                        </div>

                        <div className="max-h-[60vh] overflow-y-auto p-6 md:p-8 space-y-4 text-left">
                            {projects.map((project, i) => (
                                <div key={i} className="group p-6 rounded-[1.5rem] border border-zinc-100 hover:border-violet-200 hover:bg-violet-50/20 transition-all duration-300">
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3">
                                                <h4 className="font-bold text-lg text-zinc-900">{project.name}</h4>
                                                {project.status === "Live" && (
                                                    <span className="flex items-center gap-1 text-[9px] font-black text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 uppercase tracking-wider">
                                                        <span className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" />
                                                        {project.status}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-zinc-500 text-sm mt-1 leading-relaxed">{project.desc}</p>
                                            <div className="flex flex-wrap gap-3 mt-4">
                                                {project.tech.map(t => (
                                                    <span key={t} className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{t}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition-all shadow-md active:scale-95"
                                            >
                                                <FaExternalLinkAlt size={16} />
                                            </a>
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-zinc-100 text-zinc-900 rounded-xl hover:bg-zinc-900 hover:text-white transition-all active:scale-95"
                                            >
                                                <FaGithub size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}