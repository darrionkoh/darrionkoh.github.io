export default function Footer() {
    return (
        <footer className="w-full py-10 mt-auto text-[9px] text-zinc-400 text-center font-bold uppercase tracking-widest">
            <div className="flex flex-col gap-1.5">
                <span>© 2026 Darrion Koh</span>
                <span className="opacity-40 font-mono text-[7px] tracking-tight">
                    Latest Deployment: {__BUILD_DATE__}
                </span>
            </div>
        </footer>
    );
}