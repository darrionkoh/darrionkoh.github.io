export default function BioCard() {
    return (
        <div className="md:col-span-2 md:row-span-2 bg-white p-8 md:p-12 rounded-[2rem] border border-zinc-200 shadow-sm flex flex-col justify-between overflow-hidden">
            <div className="flex flex-col gap-6">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-3xl overflow-hidden shadow-xl border-4 border-white rotate-3 hover:rotate-0 transition-transform duration-300 bg-zinc-100">
                    <img
                        src="/aboutimg.jpg"
                        alt="Darrion Koh"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.src =
                                "https://api.dicebear.com/7.x/avataaars/svg?seed=Darrion";
                        }}
                    />
                </div>

                <div className="mt-4">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
                        Hello! I'm <span className="text-violet-600">Darrion Koh.</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-zinc-500 leading-relaxed">
                        Turning 21 this year, I graduated from Temasek Poly with a Diploma in Information Technology.
                        I enjoy collecting vinyls, buffet hopping and tinkering with side projects in my free time!
                    </p>
                </div>
            </div>

            <div className="mt-8 flex items-center gap-2 text-zinc-400 text-sm italic">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Looking for side projects to tinker with... 👀
            </div>
        </div>
    );
}