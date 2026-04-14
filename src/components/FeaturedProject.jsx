import { ExternalLink } from "lucide-react";

export default function FeaturedProject() {
    return (
        <a
            href="https://is-my-hawker-open.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-2 bg-violet-600 p-8 rounded-[2rem] text-white relative overflow-hidden group cursor-pointer block"
        >
            <div className="relative z-10">
                <div className="flex justify-between items-start">
                    <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white">
                        Featured Project
                    </span>
                    <ExternalLink
                        size={24}
                        strokeWidth={2}
                        className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                        aria-hidden="true"
                    />
                </div>
                <h2 className="mt-6 text-3xl font-bold text-white">
                    IsMyHawkerOpen
                </h2>
                <p className="mt-2 text-violet-100 max-w-[280px]">
                    Real-time status tracking for Singapore's local food gems. Built with React.
                </p>
            </div>

            <div className="absolute -bottom-4 -right-4 text-9xl opacity-20 group-hover:scale-110 transition-transform select-none">
                🍜
            </div>
        </a>
    );
}