import { useState, useEffect } from "react";

export default function ProjectArchive() {
    const [showStatus, setShowStatus] = useState(false);

    useEffect(() => {
        if (showStatus) {
            const timer = setTimeout(() => setShowStatus(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [showStatus]);

    const handleClick = () => {
        setShowStatus(true);
    };

    return (
        <div
            onClick={handleClick}
            className="md:col-span-2 bg-white p-8 rounded-[2rem] border border-zinc-200 shadow-sm flex items-center justify-between group cursor-pointer hover:border-zinc-300 transition-all relative overflow-visible"
        >
            <div>
                <h3 className="text-xl font-bold text-zinc-900">Project Archive</h3>
                <p className="text-zinc-500 text-sm">
                    View all my experiments and full-stack builds.
                </p>
            </div>

            <div className="relative">
                <div
                    className={`absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-2 bg-zinc-900 text-white text-xs font-bold rounded-xl whitespace-nowrap transition-all duration-300 ease-out pointer-events-none shadow-xl ${showStatus
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-90 translate-y-2"
                        }`}
                >
                    🚀 Under Construction!
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 rotate-45" />
                </div>

                <div className={`bg-zinc-100 w-12 h-12 flex items-center justify-center rounded-full transition-all text-xl font-bold ${showStatus ? "bg-violet-600 text-white scale-90" : "group-hover:bg-violet-600 group-hover:text-white"
                    }`}>
                    {showStatus ? "🛠️" : "→"}
                </div>
            </div>
        </div>
    );
}