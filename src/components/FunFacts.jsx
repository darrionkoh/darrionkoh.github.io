import React, { useState, useEffect } from "react";

export default function FunFacts() {
    const facts = [
        { icon: "🇸🇬", text: "Based in Singapore" },
        { icon: "🧋", text: "Bubble Tea Fiend" },
        { icon: "•ﻌ•", text: "Pomeranian Owner" },
        { icon: "🍣", text: "Buffet Connoisseur" }
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === facts.length - 1 ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(timer);
    }, [facts.length]);

    return (
        <div className="bg-white p-6 rounded-[2rem] border border-zinc-200 shadow-sm flex flex-col justify-between overflow-hidden relative h-full min-h-[160px]">
            <h3 className="font-bold text-zinc-400 text-[10px] uppercase tracking-[0.2em]">
                Fun Facts About Me!
            </h3>

            <div className="relative flex-1 mt-4">
                {facts.map((fact, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 flex items-center gap-3 transition-all duration-700 ease-in-out ${index === current
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-8 pointer-events-none"
                            }`}
                    >
                        <span className="text-2xl flex-shrink-0">{fact.icon}</span>
                        <span className="text-lg md:text-xl font-medium text-zinc-600 leading-tight">
                            {fact.text}
                        </span>
                    </div>
                ))}
            </div>

            <div className="flex gap-1.5 pt-4">
                {facts.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${index === current
                            ? "w-4 bg-violet-500"
                            : "w-1.5 bg-zinc-200 hover:bg-zinc-300"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}