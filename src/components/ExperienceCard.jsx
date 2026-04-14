import React from "react";
import { Briefcase, GraduationCap, Download } from "lucide-react";

export default function ExperienceCard() {
    return (
        <div className="md:col-span-2 bg-white p-8 rounded-[2rem] border border-zinc-200 shadow-sm flex flex-col gap-10">

            {/* Work Experience */}
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 bg-violet-50 rounded-lg">
                        <Briefcase size={18} className="text-violet-600" />
                    </div>
                    <h3 className="font-bold text-zinc-400 text-[10px] uppercase tracking-[0.2em]">
                        Work Experience
                    </h3>
                </div>

                <div className="space-y-8">
                    <div className="relative pl-6 border-l-2 border-zinc-100 hover:border-violet-200 transition-colors">
                        <div className="flex justify-between items-start flex-wrap gap-2">
                            <div>
                                <h4 className="font-bold text-zinc-900 text-lg">Software Engineer Intern</h4>
                                <p className="text-violet-600 font-semibold text-sm">NCS Group</p>
                            </div>
                            <span className="text-xs font-bold text-zinc-400 bg-zinc-50 px-3 py-1 rounded-full border border-zinc-100">
                                Apr 2024 — Mar 2025
                            </span>
                        </div>
                        <p className="text-sm text-zinc-500 mt-3 leading-relaxed max-w-2xl">
                            Collaborated with <span className="text-zinc-800 font-medium">GovTech</span> and <span className="text-zinc-800 font-medium">MOH</span> to refine a critical healthcare web application.
                            Developed an onboarding feature currently utilized by <span className="text-zinc-800 font-medium">3,000+ Medical Institutes</span> nationwide.
                        </p>
                        <div className="flex gap-2 mt-4">
                            {['Next.js', 'Spring Boot', 'Kotlin', 'MongoDB'].map(tech => (
                                <span key={tech} className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Education */}
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 bg-violet-50 rounded-lg">
                        <GraduationCap size={18} className="text-violet-600" />
                    </div>
                    <h3 className="font-bold text-zinc-400 text-[10px] uppercase tracking-[0.2em]">
                        Education
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* TP */}
                    <div className="relative pl-6 border-l-2 border-zinc-100 hover:border-violet-200 transition-colors flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-zinc-900 text-sm leading-tight max-w-[140px]">Diploma in Information Technology</h4>
                                <span className="text-[10px] font-bold text-zinc-400 bg-zinc-50 px-2 py-1 rounded-full border border-zinc-100 shrink-0">
                                    2022 — 2025
                                </span>
                            </div>
                            <p className="text-zinc-500 text-xs font-medium">Temasek Polytechnic</p>

                            <div className="mt-4 flex items-center gap-3">
                                <span className="text-[10px] font-bold py-1 px-2 bg-green-50 text-green-700 rounded-lg border border-green-100">
                                    CGPA 3.49
                                </span>

                                <a
                                    href="/DarrionPolyTranscript.pdf" //transcript button
                                    download
                                    className="flex items-center gap-1.5 text-[10px] font-bold py-1 px-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors shadow-sm"
                                >
                                    <Download size={12} strokeWidth={3} />
                                    Transcript
                                </a>
                            </div>
                        </div>
                        <p className="text-[11px] text-zinc-400 mt-4 italic">Senior Instructor @ TP Inline Skating Club</p>
                    </div>

                    {/* MJR */}
                    <div className="relative pl-6 border-l-2 border-zinc-100 hover:border-violet-200 transition-colors flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-zinc-900 text-sm">GCE O Level</h4>
                                <span className="text-[10px] font-bold text-zinc-400 bg-zinc-50 px-2 py-1 rounded-full border border-zinc-100 shrink-0">
                                    2018 — 2021
                                </span>
                            </div>
                            <p className="text-zinc-500 text-xs font-medium">Manjusri Secondary School</p>
                        </div>
                        <p className="text-[11px] text-zinc-400 mt-4 italic">Chairman @ Media Club</p>
                    </div>
                </div>
            </div>

        </div>
    );
}