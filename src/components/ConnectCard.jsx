import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ConnectCard() {
    return (
        <div className="bg-zinc-900 p-6 rounded-[2rem] text-white flex flex-col justify-between h-full">
            <div>
                <h3 className="font-bold text-zinc-500 text-xs uppercase tracking-widest">
                    Connect
                </h3>
                <div className="flex flex-col gap-4 mt-8">
                    <a
                        href="https://github.com/darrionkoh"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                    >
                        <FaGithub className="w-5 h-5" />
                        <span className="text-sm font-medium">GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/darrionkoh/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 text-zinc-400 hover:text-[#0077B5] transition-colors"
                    >
                        <FaLinkedin className="w-5 h-5" />
                        <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                    <a
                        href="mailto:darrionkoh.biz@gmail.com"
                        className="flex items-center gap-3 text-zinc-400 hover:text-[#EA4335] transition-colors"
                    >
                        <FaEnvelope className="w-5 h-5" />
                        <span className="text-sm font-medium">Email</span>
                    </a>
                </div>
            </div>

            <p className="text-xs text-zinc-500 mt-12">
                Always open to chat about tech, projects, or potential collaborations!
            </p>
        </div>
    );
}